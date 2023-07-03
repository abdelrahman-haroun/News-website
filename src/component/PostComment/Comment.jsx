import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comment({ id, com }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `http://localhost:3001/PostsComments/${id}`
      );
      setComments(response.data.comments);
    };
    fetchdata();
  }, [com]);

  const comment = comments.map((el, index) => {
    return (
      <div key={index} className=" comments">
        <div className="content">
          <div className="con">
            <div className="name-image">
              <img className="avatar-image" src={el.imageUrl} />
              <p className="user-post">{el.name}</p>
            </div>
          </div>

          <div className="time-post">
            <p>{el.time}</p>
          </div>
          <div className="content-content">
            <p>{el.des}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {comment}
      {com.name !== "" ? (
        <div className=" comments">
          <div className="content ">
            <div className="con">
              <div className="name-image">
                <img className="avatar-image" src={com.imageUrl} />
                <p className="user-post">{com.name}</p>
              </div>
            </div>

            <div className="time-post">
              <p>{com.time}</p>
            </div>
            <div className="content-content">
              <p>{com.des}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
