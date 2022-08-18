import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StateContext from "../StateContext";

function ForgotPasswordPage() {
   const [email, setEmail] = useState("");
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [confirm, setConfirm] = useState("");

   function validationCheck_Password(e) {
      const name = e.target.name;
      const value = e.target.value;
      if (name == "password") {
         setPassword(value);
      } else {
         setConfirm(value);
      }

      console.log("CHANGE: " + password + "  " + confirm);

      if (password != confirm) {
         document
            .getElementById("lbPassword")
            .style.setProperty("color", "red");
         document.getElementById("lbConfirm").style.setProperty("color", "red");
         document.getElementById("pMatch").style.setProperty("color", "red");
      } else {
         document
            .getElementById("lbPassword")
            .style.setProperty("color", "darkblue");
         document
            .getElementById("lbConfirm")
            .style.setProperty("color", "darkblue");
         document
            .getElementById("pMatch")
            .style.setProperty("color", "dodgerblue");
      }
   }

   return (
      <div>
         <h1 style={{ textAlign: "center" }}>Forogot Password?</h1>
         <div
            className="container"
            style={{
               paddingTop: "10px",
               backgroundColor: "#89cff0",
               paddingBottom: "20px",
            }}
         >
            <form onSubmit={(e) => onSubmit(e)}>
               <label style={{ paddingTop: "10px" }} id="lbEmail">
                  Email: *
               </label>
               <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  style={{ fontSize: ".85em" }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
               ></input>

               <label style={{ paddingTop: "10px" }} id="lbLoginId">
                  Login Id / Username: *
               </label>
               <input
                  type="text"
                  placeholder="LoginId"
                  className="form-control"
                  name="loginId"
                  style={{ fontSize: ".85em" }}
                  onChange={(e) => setLoginId(e.target.value)}
                  value={loginId}
               ></input>

               <label style={{ paddingTop: "10px" }} id="lbPassword">
                  Password: *
               </label>
               <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  style={{ fontSize: ".85em" }}
                  value={password}
                  onChange={(event) => {
                     validationCheck_Password(event);
                  }}
               ></input>

               <label style={{ paddingTop: "10px" }} id="lbConfirm">
                  Cornfirm Password: *
               </label>
               <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  name="passwordConfirm"
                  style={{ fontSize: ".85em" }}
                  onChange={(event) => validationCheck_Password(event)}
               ></input>

               <div
                  className="row"
                  style={{ paddingTop: "20px", textAlign: "right" }}
               >
                  <div className="col" style={{ textAlign: "left" }}>
                     <p
                        id="pReq"
                        style={{
                           fontSize: ".9em",
                           color: "dodgerblue",
                           padding: "0",
                           margin: "0",
                        }}
                     >
                        - Items marked with an * are required
                     </p>
                     <p
                        id="pMatch"
                        style={{
                           fontSize: ".9em",
                           color: "dodgerblue",
                           padding: "0",
                           margin: "0",
                        }}
                     >
                        - Passwords must match
                     </p>
                  </div>
                  <div className="col">
                     <button type="submit">Update Password</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ForgotPasswordPage;
