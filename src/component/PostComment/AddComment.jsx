import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";

export default function AddComment({ idPost, length }) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState({});
  const userId = sessionStorage.getItem("id");
  const [commentDone, setCommentDone] = useState({
    des: "",
    name: "",
    imageUrl: "",
    time: "",
  });
  const [len, setLen] = useState(length);
  //
  const fetchData = async () => {
    await axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((res) => setUser(res.data));
  };
  //
  const updateData = async () => {
    await axios
      .get(`http://localhost:3001/PostsComments/${idPost}`)
      .then(
        (res) => (
          (res.data.comments = [...res.data.comments, commentDone]),
          axios.put(`http://localhost:3001/PostsComments/${idPost}`, res.data),
          setLen(res.data.comments.length)
        )
      );
  };
  //
  useEffect(() => {
    fetchData();
  }, []);
  //
  useEffect(() => {
    if (commentDone.name !== "" && commentDone.des !== "") {
      updateData();
    }
  }, [commentDone]);
  //
  function handelClick() {
    setCommentDone({
      ...Comment,
      des: comment,
      name: user.name,
      imageUrl: user.imageUrl,
      time: new Date().toLocaleString(),
    });
  }
  //

  return (
    <div className="extra content">
      <div className="input-post-from-user">
        <textarea
          type="title"
          cols="30"
          rows="2"
          placeholder="Add Comment..."
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={handelClick}>Add Comment</button>
      </div>
      <p style={{ paddingLeft: "25px" }}>
        <i className="fa-regular fa-comment fa-xl"></i>
        {len}
      </p>
      <Comment id={idPost} com={commentDone} />
    </div>
  );
}
