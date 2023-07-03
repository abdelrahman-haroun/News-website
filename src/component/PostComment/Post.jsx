import axios from "axios";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";

export default function Post({ value }) {
  const [dataPost, setDataPost] = useState([]);
  const [del, setDel] = useState(0);
  const [isedit, setIsedit] = useState(false);
  const [ed, setEd] = useState(0);
  const [editPostNew, setEditPostNew] = useState("");
  const [postIdEdit, setPostIdEdit] = useState();

  //
  useEffect(() => {
    axios
      .get(`http://localhost:3001/PostsComments`)
      .then((res) => setDataPost(res.data));
  }, [value, del, ed]);
  //
  function deletePost(postId) {
    // console.log(postId);
    axios.delete(`http://localhost:3001/PostsComments/${postId}`);
    setDel(del + 1);
  }
  //
  function handelDel(postId) {
    deletePost(postId);
  }

  function handelEdit(postId) {
    setIsedit(true);
    setPostIdEdit(postId);
  }
  function handelNewEdit() {
    dataPost.map((el) => {
      if (el.id === postIdEdit) {
        el.des = editPostNew;
      }
    });
    // console.log(dataPost);
    axios.put(`http://localhost:3001/PostsComments/${postIdEdit}`, dataPost[0]);
    setEd(ed + 1);
    setIsedit(false);
  }

  const postes = dataPost.map((el) => {
    return (
      <div key={el.id} className="post">
        <div className="content">
          <div className="con">
            <div className="name-image">
              <img className="avatar-image" src={el.imageUrl} />
              <p className="user-post">{el.name}</p>
            </div>
            {sessionStorage.getItem("id") == el.idUser && (
              <div className="edit-del ">
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => handelDel(el.id)}
                />
                <i
                  className="fa-solid fa-pen"
                  onClick={() => handelEdit(el.id)}
                />
              </div>
            )}

            {isedit && (
              <>
                <input
                  placeholder="edit post "
                  onChange={(e) => setEditPostNew(e.target.value)}
                />
                <button onClick={handelNewEdit}>confirm</button>
                <button onClick={() => setIsedit(false)}>cancel</button>
              </>
            )}
          </div>

          <div className="time-post">
            <p>{el.time}</p>
          </div>

          <div className="content-content">
            <p>{el.des}</p>
          </div>
        </div>
        <AddComment idPost={el.id} />
      </div>
    );
  });
  return (
    <>
      <div className="post-container">{postes}</div>
    </>
  );
}
