import React, { useEffect, useState } from "react";
import "./App.css";
import { CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import TopPost from "./TopPost";
function ArticalPage() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const [count, setCount] = useState(7);
  console.log("UseParams returned : ", params);

  useEffect(() => {
    var url = "https://blog-project-by-amina.onrender.com/" + params.category;
    var req = new Request(url);

    fetch(req).then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
      });
    });
  }, [params]);
  if (loaded) {
    return (
      <div className="section">
        <div className="ArticalBox">
          <h1 style={{ textTransform: "capitalize" }}>{params.category}</h1>
          <hr className="Shortline"></hr>
          {data.map((article, index) => {
            if (index < count) {
              return (
                <div className="article1" key={article}>
                  <img
                    className="thumbnail"
                    src={article.urlToImage}
                    alt="Image Loading..."
                  />

                  <div className="text-content">
                    <Link to={`/NewPage/${article.title}`} state={article}>
                      <p className="title">{article.title}</p>
                    </Link>
                    <p className="content">{article.content}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              );
            }
          })}
          <button
            onClick={() => {
              setCount(count + 7);
            }}
          >
            <span className="arrow">⬇</span> Load More
          </button>
        </div>
        <div>
          <TopPost />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Loding">
        <CircularProgress />
      </div>
    );
  }
}
export default ArticalPage;
