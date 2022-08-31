import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Constants";

function RegisterPage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [confirm, setConfirm] = useState("");
   const [contactNumber, setContactNumber] = useState("");

   function validationCheck_Password(e) {
      const name = e.target.name;
      const value = e.target.value;
      if (name === "password") {
         setPassword(value);
      } else {
         setConfirm(value);
      }

      console.log("CHANGE: " + password + "  " + confirm);

      if (password !== confirm) {
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

   const navigate = useNavigate();

   async function onSubmit(e) {
      e.preventDefault();

      const newUser = {
         firstName: firstName === "" ? null : firstName,
         lastName: lastName === "" ? null : lastName,
         email: email === "" ? null : email,
         loginId: loginId === "" ? null : loginId,
         password: password === "" ? null : password,
         contactNumber: contactNumber === "" ? null : contactNumber,
      };

      console.log(newUser);

      if (password !== confirm) {
         return;
      }

      try {
         await axios.post(API_URL + "/register", newUser).then((res) => {
            console.log(res);
            console.log(res.data);
         });

         navigate("/registered");
      } catch (e) {
         console.log(e);
         switch (e.response.status) {
            // Duplicate
            case 500:
               console.log("NOT UNIQUE");
               break;
            // Missing Requirements
            case 400:
               console.log("ENTER STUFF");
               handleEmptyFields();
               break;
            default:
               break;
         }
      }
      // internal server error, duplicate key exceptions
   }

   function handleEmptyFields() {
      document.getElementById("lbEmail").style.setProperty("color", "red");
      document.getElementById("lbLoginId").style.setProperty("color", "red");
      document.getElementById("lbPassword").style.setProperty("color", "red");
      document.getElementById("lbConfirm").style.setProperty("color", "red");
      document.getElementById("pReq").style.setProperty("color", "red");
   }

   return (
      <div
         className="container"
         style={{
            paddingTop: "10px",
            backgroundColor: "#89cff0",
            paddingBottom: "20px",
         }}
      >
         <form onSubmit={(e) => onSubmit(e)}>
            <label style={{ paddingTop: "0px" }}>First Name:</label>
            <input
               type="text"
               placeholder="First Name"
               className="form-control"
               name="firstName"
               style={{ fontSize: ".85em" }}
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label style={{ paddingTop: "10px" }}>Last Name:</label>
            <input
               type="text"
               placeholder="Last Name"
               className="form-control"
               name="lastName"
               style={{ fontSize: ".85em" }}
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
            ></input>

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

            <label style={{ paddingTop: "10px" }}>Contact Number:</label>
            <input
               type="number"
               placeholder="Contact Number"
               className="form-control"
               name="contactNumber"
               style={{ fontSize: ".85em" }}
               maxLength="10"
               value={contactNumber}
               onChange={(e) => setContactNumber(e.target.value)}
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
                     style={{
                        fontSize: ".9em",
                        color: "dodgerblue",
                        padding: "0",
                        margin: "0",
                     }}
                  >
                     - Email and LoginId/Username must be Unique to existing
                     values
                  </p>
               </div>
               <div className="col">
                  <button type="submit">Create Account</button>
               </div>
            </div>
         </form>
      </div>
   );
}

export default RegisterPage;
