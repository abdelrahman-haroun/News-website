import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./news.css";
export default function News({ search }) {
  const [newsApi, setNewsApi] = useState([]);
  const [isFlex, setIsflex] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=59e511f905964077ab8eeceb2d446484"
      );
      setNewsApi(response.data.articles);
    };
    fetchData();
  }, []);

  const [itemsPerPage, setItemsperPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const newNews = newsApi.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(newsApi.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  const news =
    search === ""
      ? newNews
          .filter((ele) => ele.urlToImage !== null)
          .map((el, index) => {
            return (
              <div key={index} className={`${isFlex ? "card-flex" : "crad"}`}>
                <div
                  className={`${
                    isFlex ? "image-articles-flex" : "image-articles"
                  }`}
                >
                  <NavLink to={`/ViewNews/${index}`}>
                    <img src={el.urlToImage} alt="News Image" />
                  </NavLink>
                </div>
                <div className={`${isFlex ? "card-body-flex" : "card-body"}`}>
                  <div className={`${isFlex ? "meta-info-flex" : "meta-info"}`}>
                    <span className="author">Author : {el.author}</span>
                    <span className="time">{el.publishedAt}</span>
                  </div>

                  <h1 className="title">{el.title}</h1>
                  <p className="description">{el.description}</p>
                </div>
              </div>
            );
          })
      : newsApi
          .filter((ele) => ele.urlToImage !== null)
          .filter((ele) =>
            ele.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((el, index) => {
            return (
              <div key={index} className={`${isFlex ? "card-flex" : "crad"}`}>
                <div
                  className={`${
                    isFlex ? "image-articles-flex" : "image-articles"
                  }`}
                >
                  <NavLink to={`/ViewNews/${index}`}>
                    <img src={el.urlToImage} alt="News Image" />
                  </NavLink>
                </div>
                <div className={`${isFlex ? "card-body-flex" : "card-body"}`}>
                  <div className={`${isFlex ? "meta-info-flex" : "meta-info"}`}>
                    <span className="author">Author : {el.author}</span>
                    <span className="time">{el.publishedAt}</span>
                  </div>
                  <h1 className="title">{el.title}</h1>
                  <p className="description">{el.description}</p>
                </div>
              </div>
            );
          });

  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <i
          className={`${isFlex ? "fa-solid fa-grip" : "fa-solid fa-list"}`}
          onClick={() => setIsflex(!isFlex)}
        />
        <p> View </p>
        <select
          style={{ height: "20px" }}
          name="select-items"
          id=""
          onChange={(e) => {
            setItemsperPage(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option name="select-items" value="5">
            5
          </option>
          <option name="select-items" value="10">
            10
          </option>
          <option name="select-items" value="15">
            15
          </option>
          <option name="select-items" value="20">
            20
          </option>
        </select>
      </div>
      {/* <p style={{ textAlign: "center" }}>page {currentPage}</p> */}
      <div
        className={`${isFlex ? "con-news-flex" : "con-news"}`}
        style={{ minHeight: "80vh", margin: "1rem auto" }}
      >
        {news}
      </div>

      {search == "" && (
        <ul>
          <li>
            <a href="#" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => {
            return (
              <li key={i} className="big-page">
                <a href="#" onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            );
          })}
          <li className="mobile-page">
            {currentPage}/{nPage}
          </li>

          <li>
            <a href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
