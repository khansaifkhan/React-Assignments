import React, { useEffect, useState } from "react";
import "./App.css";
import { CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function TopPost() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const [count] = useState(4);
  console.log("UseParams returned : ", params);
  const date = new Date();
  const dateString =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  console.log(dateString);
  useEffect(() => {
    var url = "https://blog-project-by-mk.onrender.com/" + params.category;
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
      <div className="sectionTop">
        <div className="ArticalTop">
          <h1 className="Toppostheading">Top Post</h1>
          <hr className="Shortline" />
          {data.map((article, index) => {
            if (index < count) {
              return (
                <div className="article" key={index}>
                  <img
                    className="thumbnail"
                    src={article.urlToImage}
                    alt="Image Loading..."
                  />

                  <div className="text-content">
                    <Link to={`/NewPage/${article.title}`} state={{ article }}>
                      <p className="title">{article.title}</p>
                    </Link>
                    <p className="content">{article.content}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="AD">Advertisement</div>
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
export default TopPost;
