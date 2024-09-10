import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/productsinfo/Comment.css";

const Comments = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    show();
  }, [productId]);

  function show() {
    fetch(`http://127.0.0.1:8000/comments/api/v1/post?pst=${productId}`)
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching comments:", error));
  }

  function sendToServer() {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "X-CSRFToken",
      "a4gVs4LKoK9qpwBtyktdTabLGKkDTjtt0aSC8gxZdbs3aTs15Xp16uXl7nRL3uLI"
    );
    const raw = JSON.stringify({
      post: productId,
      name: name,
      content: comment,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://127.0.0.1:8000/comments/api/v1/post", requestOptions)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((result) => {
        setComment("");
        setName("");
        show();
      })
      .catch((error) => {
        console.log("Error posting comment:", error);
        setLoading(false);
      });
  }

  return (
    <div class="  d-flex justify-content-center pt-5">
      <div
        className="col-md-11 fontr   shadow  border-dark"
        dir="rtl"
        style={{ borderRadius: "20px" }}
      >
        <div class="col-md-12 row p-5">
          <div className="col-md-6 ">
            <div className="d-flex justify-content-start ">
              <div className="col-md-11  d-flex align-items-center">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control form-control-solid form-control-lg bg-light"
                  placeholder="نام و نام خانوادگی:"
                />
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="col-md-11 rounded pt-3 d-flex align-items-center">
                <textarea
                  id="comment"
                  rows="4"
                  value={comment}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendToServer();
                  }}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-control input-lg bg-light form-control-solid form-control-lg textarea"
                  placeholder="نظر شما:"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end p-2">
              <button
                onClick={sendToServer}
                className="col-md-3 btn btn-lg btn-success font-weight-bold"
              >
                ثبت
              </button>
            </div>
          </div>
          <div class=" col-md-6 contain">
            {comments.map((c, index) => (
              <div class="p-3">
                <div className="mt-2 text-dark-50 shadow rounded font-weight-bold font-size-lg text-left max-w-1500px fontr p-2">
                  <div className="text-muted h5">{c.name} :</div>
                  <div className="h5">{c.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
