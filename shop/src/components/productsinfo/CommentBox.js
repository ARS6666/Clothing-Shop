import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/productsinfo/Comment.css";
import url from "../../config.json"


const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const location = useLocation();
  const [ShowCount, setShowCount] = useState(3)
  const [ButtContent, setButtContent] = useState("مشاهده بیشتر ...")
  const [ButtDisable, setButtDisable] = useState(false)
  const token = localStorage.getItem('token');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramId = searchParams.get('id');
    if (paramId) {
      setProductId(paramId);
    }
  }, [location.search]);

  useEffect(() => {
    if (productId) {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-CSRFToken", "K3pUKlDKLUZFsL3nSzrm8K6VQ5uoTWNXA6mlMlJcCjJUTl7n1qpLebKqIMXdQnUg");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch(`${url.baseUrl}/comments/comment/` + productId + "/", requestOptions)
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
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "K3pUKlDKLUZFsL3nSzrm8K6VQ5uoTWNXA6mlMlJcCjJUTl7n1qpLebKqIMXdQnUg");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyOTEwNjA1LCJpYXQiOjE3MzI5MDQ2MDUsImp0aSI6ImRjNmU5MmU0N2NlMTQ5Mzc5M2Q2NWU5MzJkOGZlMWU2IiwidXNlcl9pZCI6MX0.sx-RZx5EZX42HlVG4tiuRbNJXXZVAL5Ll6r0oxucYWg");


    const raw = JSON.stringify({
      "name": name,
      "text": comment,
      "product": productId
    });

    const requestOptionss = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${url.baseUrl}/comments/comment/` + productId + "/", requestOptionss)
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
        fetch(`${url.baseUrl}/comments/comment/` + productId + "/")
          .then((response) => response.json())
          .then((result) => {
            setComments(result);
          })
          .catch((error) => {
            console.log("Error fetching comments:", error);
          });
      })
      .catch((error) => {
        console.log("Error posting comment:", error);
      });
  }

  function HandleShow() {
    if (comments.length === 0) {
      setButtContent("کامنتی وجود ندارد ...");
    } else {
      if (ShowCount >= comments.length) {
        setShowCount(comments.length - 3);
        setButtContent("مشاهده بیشتر ...");
      } else {
        setShowCount(ShowCount + 3);
        setButtContent("مشاهده کمتر ...");
      }
    }
  }



  return (
    <div class="container-xl col-12 d-flex justify-content-center">
      <div
        className="col-md-11 col-11  fontr shadow "
        dir="rtl"
      >
        <div class="col-md-12 row m-0 p-5">
          <div class=" col-md-6  pt-2 col-12 p-0 m-0">
            {Array.isArray(comments) && comments.length > 0 &&
              comments.slice(Math.max(comments.length - ShowCount, 0), comments.length).map((c, index) => (
                <div key={index} className="mt-1 bg-light fontr p-3 border-bottom">
                  <div className="text-muted h5">{c.name}:</div>
                  <div className="h5">{c.text}</div>
                </div>
              ))}
            <div class="col-md-12 pt-3">
              <button class="btn btn-dark hover rounded-0 col-md-12" onClick={HandleShow} disabled={ButtDisable}>{ButtContent}
              </button>
            </div>

          </div>
          <div className="col-md-6 col-12 pt-4">
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
