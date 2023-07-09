import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function ViewNews() {
  const { index } = useParams();
  const [News, setNews] = useState([]);
  const backNavgate = useNavigate();
  useEffect(() => {
    const getNews = async () => {
      const response = await axios(
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=59e511f905964077ab8eeceb2d446484`
      );
      setNews(response.data.articles[index]);
    };

    getNews();
  }, []);

  return (
    <div style={{ minHeight: "85vh", margin: "1rem 0" }}>
      <div
        style={{
          margin: "0.5rem auto",
          display: "flex",
          alignItems: "center",
          gap: "5rem",
          width: "70vw",
        }}
      >
        <i
          className="fa-solid fa-arrow-left fa-xl"
          onClick={() => {
            backNavgate("/ShowNews");
          }}
        ></i>
        <h1>{News.title}</h1>
      </div>

      <div className="article-container">
        <img
          className="article-image"
          src={News.urlToImage}
          alt="Article Image"
        />
        <p className="article-author">By Author {News.author}</p>
        <div className="article-content">
          <p>{News.content}</p>
        </div>
        <p className="article-description">{News.description}</p>
        <p className="article-time">Published on {News.publishedAt}</p>
        <p>
          If You Need To Read Full Articles
          <a href={News.url} style={{ fontWeight: "bold" }}>
            {" "}
            click here{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
