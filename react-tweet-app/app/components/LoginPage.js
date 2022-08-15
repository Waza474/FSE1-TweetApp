import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";

function LoginPage() {
   const appDispatch = useContext(DispatchContext);
   const navigate = useNavigate();

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   async function onSubmit(e) {
      console.log("button Press");
      e.preventDefault();

      var config = {
         method: "get",
         url:
            "http://localhost:8080/api/v1.0/tweets/login?username=" +
            username +
            "&password=" +
            password,
         headers: {},
      };
      var result = false;

      await axios(config).then((res) => {
         console.log(res);
         console.log(res.data);
         result = res.data;
      });

      if (!result) {
         document.getElementById("lbLoginId").style.setProperty("color", "red");
         document.getElementById("lbPass").style.setProperty("color", "red");
         document.getElementById("lbWrong").style.setProperty("color", "red");
      }

      var config = {
         method: "get",
         url: "http://localhost:8080/api/v1.0/tweets/loginSuccess?username=aa",
         headers: {},
      };

      axios(config).then((res) => {
         console.log("Login Successful");
         console.log(res.data);
         appDispatch({ type: "login", data: res.data });
      });

      navigate("/");
   }

   return (
      <div
         onSubmit={(e) => onSubmit(e)}
         className="container"
         style={{
            paddingTop: "10px",
            backgroundColor: "#89cff0",
            paddingBottom: "20px",
         }}
      >
         <form>
            <label id="lbLoginId" style={{ paddingTop: "10px" }}>
               Login Id / Username:
            </label>
            <input
               type="text"
               placeholder="LoginId"
               className="form-control"
               id="loginId"
               style={{ fontSize: ".85em" }}
               onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label id="lbPass" style={{ paddingTop: "10px" }}>
               Password:
            </label>
            <input
               type="password"
               placeholder="Password"
               className="form-control"
               id="password"
               style={{ fontSize: ".85em" }}
               onChange={(e) => setPassword(e.target.value)}
            ></input>

            <div
               className="col"
               style={{ textAlign: "right", paddingTop: "10px" }}
            >
               <button type="submit">Log In</button>
            </div>
            <p id="lbWrong" style={{ color: "#89cff0" }}>
               The LoginID/Usernam and Password Combo do not Exist.
            </p>
         </form>
      </div>
   );
}

export default LoginPage;
