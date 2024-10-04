import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/productsinfo/Comment.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('id');
    if (paramId) {
      setProductId(paramId);
    }
  }, [location.search]);

  useEffect(() => {
    if (productId) {
      fetch(`http://127.0.0.1:8000/comments/api/v1/post?pst=${productId}`) 
        .then((response) => response.json())
        .then((result) => {
          setComments(result);
        })
        .catch((error) => {
          console.log("Error fetching comments:", error);
        });
    }
  }, [productId]);

  function sendToServer() {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "a4gVs4LKoK9qpwBtyktdTabLGKkDTjtt0aSC8gxZdbs3aTs15Xp16uXl7nRL3uLI");

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
      })
      .catch((error) => {
        console.log("Error posting comment:", error);
      });
  }


  return (
    <div class="col-md-12 col-12 d-flex justify-content-center pt-5">
      <div
        className="col-md-11 col-11 fontr shadow "
        dir="rtl"
        style={{ borderRadius: "0px" }}
      >
        <div class="col-md-12 row m-0 p-5">
          <div class=" col-md-6 contain pt-2 col-12">
            {comments.map((c, index) => (
              <div className="mt-1 bg-light rounded text-left max-w-1500px fontr p-3">
                <div className="text-muted h5">{c.name}:</div>
                <div className="h5">{c.content}</div>
              </div>
            ))}
          </div>
          <div className="col-md-6 col-12 pt-3">
            <div className="d-flex justify-content-start">
              <div className="col-md-11 col-12 d-flex align-items-center pt-3">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control form-control-solid form-control-lg bg-lightform-control form-control-lg border-dark rounded-0"
                  placeholder="نام و نام خانوادگی:"
                />
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="col-md-11 col-12 rounded pt-3 d-flex align-items-center">
                <textarea
                  id="comment"
                  rows="4"
                  value={comment}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendToServer();
                  }}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-control form-control-lg border-dark rounded-0 textarea"
                  placeholder="نظر شما:"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end p-2">
              <button
                onClick={sendToServer}
                className="col-md-3 col-3 btn btn-success"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
