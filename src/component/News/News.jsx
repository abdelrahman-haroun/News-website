import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./news.css";
export default function News({ search }) {
  const [newsApi, setNewsApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=59e511f905964077ab8eeceb2d446484"
      );
      setNewsApi(response.data.articles);
    };
    fetchData();
  }, []);

  const news = newsApi
    .filter((ele) => ele.urlToImage !== null)
    .filter((ele) => ele.title.toLowerCase().includes(search.toLowerCase()))
    .map((el, index) => {
      return (
        <div key={index} className="card">
          <div className="image-articles">
            <img src={el.urlToImage} alt="News Image" />
          </div>
          <div className="card-body">
            <div className="meta-info">
              <span className="author">Author : {el.author}</span>
              <span className="time">{el.publishedAt}</span>
            </div>
            <h2 className="title">{el.title}</h2>
            <p className="description">{el.description}</p>
          </div>
        </div>
      );
    });

  return <>{news}</>;
}
