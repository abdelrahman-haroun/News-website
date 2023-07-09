import axios from "axios";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";

export default function Post({ value }) {
  const [dataPost, setDataPost] = useState([]);
  const [del, setDel] = useState(0);
  const [editPostNew, setEditPostNew] = useState("");
  const [postIdEdit, setPostIdEdit] = useState();
  const [editStates, setEditStates] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/PostsComments`)
      .then((res) => setDataPost(res.data));
  }, [value, del]);

  function deletePost(postId) {
    axios
      .delete(`http://localhost:3001/PostsComments/${postId}`)
      .then(() => {
        console.log("Post deleted successfully");
        setDel(del + 1);
      })
      .catch((error) => {
        console.error("Error deleting post", error);
      });
  }

  function handelDel(postId) {
    deletePost(postId);
  }

  function handelEdit(postId) {
    setEditStates((prevState) => ({
      ...prevState,
      [postId]: true,
    }));
    setPostIdEdit(postId);
  }

  function handelNewEdit() {
    dataPost.forEach((el) => {
      if (el.id === postIdEdit) {
        el.des = editPostNew;
      }
    });

    axios
      .put(
        `http://localhost:3001/PostsComments/${postIdEdit}`,
        dataPost[postIdEdit - 1]
      )
      .then(() => {
        console.log("Post edited successfully");
        setEditStates((prevState) => ({
          ...prevState,
          [postIdEdit]: false,
        }));
      })
      .catch((error) => {
        console.error("Error editing post", error);
      });
  }

  const postes = dataPost.map((el) => {
    return (
      <div key={el.id} className="post">
        <div className="content">
          <div className="con">
            <div className="name-image">
              <img
                className="avatar-image"
                src={el.imageUrl}
                alt="User Avatar"
              />
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

            {editStates[el.id] ? (
              <>
                <input
                  placeholder="edit post"
                  value={editPostNew}
                  onChange={(e) => setEditPostNew(e.target.value)}
                />
                <button onClick={handelNewEdit}>confirm</button>
                <button
                  onClick={() =>
                    setEditStates((prevState) => ({
                      ...prevState,
                      [el.id]: false,
                    }))
                  }
                >
                  cancel
                </button>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="time-post">
            <p>{el.time}</p>
          </div>

          <div className="content-content">
            <p>{el.des}</p>
          </div>
        </div>
        <AddComment idPost={el.id} length={el.comments.length} />
      </div>
    );
  });

  return <div className="post-container">{postes}</div>;
}
