import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signin.css";

export default function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigateLogin = useNavigate();
  const [error, setError] = useState("");
  let x = false;
  function handelSubmit(e) {
    e.preventDefault();
    const userChecker = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users?email=${data.email}&&password=${data.password}`
        );

        if (response.data.length > 0) {
          x = true;
        }
        if (x) {
          //    user found and sign in
          sessionStorage.setItem("id", response.data[0].id);
          navigateLogin("/");
        } else {
          console.log("no");
          setError("Email or Password is Invalid");
        }
      } catch (error) {
        console.error(error);
      }
    };
    userChecker();
  }
  return (
    <div className="sign-in">
      <form className="sign-in-form">
        <h1>LOG IN</h1>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          name="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error !== "" && <p className="error">{error}</p>}
        <p>
          If you dont have Account click{" "}
          <Link rel="stylesheet" to="/SignUp">
            <span>here</span>
          </Link>
        </p>
        <button type="submit" onClick={handelSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
}
