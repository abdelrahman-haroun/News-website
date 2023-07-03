import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    password: "",
    passwordR: "",
    email: "",
    imageUrl:
      "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgAAAA?pid=ImgDet&rs=1",
  });
  const [click, setClick] = useState(false);
  const [emailError, setEmailError] = useState([]);
  const navgateSignup = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    setClick(true);
    if (
      data.name !== " " &&
      data.password.length > 7 &&
      data.password === data.passwordR &&
      data.email !== ""
    ) {
      let x = false;
      const emailChecker = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/users?email=${data.email}`
          );

          if (response.data.length > 0) {
            x = true;
          }
          if (x) {
            setEmailError(["Email is already used", response.data[0].email]);
          } else {
            axios.post(`http://localhost:3001/users`, data);

            navgateSignup("/SignIn");
          }
        } catch (error) {
          console.error(error);
        }
      };
      emailChecker();
    } else console.log("no");
  }
  const handleImageUpload = (e) => {
    setData({ ...data, imageUrl: `${e.target.value}` });
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {data.name === "" && click === true && (
          <p className="error"> UserName is required </p>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {click === true && data.email === emailError[1] && (
          <p className="error"> {emailError[0]} </p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {data.password === "" && click === true && (
          <p className="error"> Password is required </p>
        )}
        <label htmlFor="passwordR">Repeat Password:</label>
        <input
          type="password"
          name="passwordR"
          onChange={(e) => setData({ ...data, passwordR: e.target.value })}
        />
        {data.passwordR !== data.password && click === true && (
          <p className="error"> Password doesn't match </p>
        )}
        <label htmlFor="image"> Upload your image </label>
        <input type="text" name="image" onChange={handleImageUpload} />

        <button type="submit" onClick={handelSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
