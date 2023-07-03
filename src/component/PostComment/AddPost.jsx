import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function AddPost() {
  const userId = sessionStorage.getItem("id");
  const [counter, setCounter] = useState(0);
  let [posts, setPosts] = useState({
    des: "",
    name: "",
    idUser: "",
    imageUrl: "",
    time: "",
    comments: [],
  });
  const [x, setX] = useState(false);

  function handelClick(e) {
    e.preventDefault();
    setX(true);

    axios.get(`http://localhost:3001/users/${userId}`).then((res) =>
      setPosts({
        ...posts,
        name: res.data.name,
        idUser: res.data.id,
        imageUrl: res.data.imageUrl,
        time: new Date().toLocaleString(),
      })
    );
  }

  useEffect(() => {
    if (x) {
      axios.post(`http://localhost:3001/PostsComments`, posts);
      setCounter(counter + 1);
      setX(false);
    }
  }, [posts, counter]);

  return (
    <>
      <div className="input-post-from-user">
        <textarea
          name="title"
          cols="30"
          rows="5"
          placeholder="Enter your post"
          onChange={(e) => setPosts({ ...posts, des: e.target.value })}
        ></textarea>
        <button onClick={handelClick}>Add New Post</button>
      </div>
      <Post value={counter} />
    </>
  );
}
