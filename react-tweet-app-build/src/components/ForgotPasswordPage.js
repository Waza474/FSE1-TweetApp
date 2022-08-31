import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StateContext from "../StateContext";
import { API_URL } from "../Constants";

function ForgotPasswordPage() {
   const [email, setEmail] = useState("");
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [confirm, setConfirm] = useState("");
   const navigate = useNavigate();

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
         dispPassReq();
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

   function turnRed(id) {
      document.getElementById(id).style.setProperty("color", "red");
   }

   function dispPassReq() {
      turnRed("lbPassword");
      turnRed("lbConfirm");
      turnRed("pMatch");
   }

   function dispRequired() {
      turnRed("pReq");
      turnRed("pUser");
   }

   async function onSubmit(e) {
      e.preventDefault();

      if (password != confirm) return;

      console.log("User does not exist");
      if (loginId == "" || loginId == null) {
         dispRequired();
         return;
      }

      var config = {
         method: "put",
         url: API_URL + loginId + "/forgot/",
         headers: {
            "Content-Type": "text/plain",
         },
         data: password,
      };
      try {
         await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
         });
         navigate("/login");
      } catch (e) {
         switch (e.response.status) {
            case 500:
               console.log("User does not exist");
               document
                  .getElementById("pUser")
                  .style.setProperty("color", "red");
               break;
            default:
               console.log("Unhandled Error Found on Forgot Password");
               break;
         }
      }
   }

   return (
      <div>
         <h1 style={{ textAlign: "center" }}>Forgot Password?</h1>
         <div
            className="container"
            style={{
               paddingTop: "10px",
               backgroundColor: "#89cff0",
               paddingBottom: "20px",
            }}
         >
            <form onSubmit={(e) => onSubmit(e)}>
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
                     <p
                        id="pUser"
                        style={{
                           fontSize: "1.5em",
                           color: "#89cff0",
                           padding: "0",
                           margin: "0",
                           textAlign: "right",
                        }}
                     >
                        No user Exists...
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
