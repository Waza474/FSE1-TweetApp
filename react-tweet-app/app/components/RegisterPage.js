import React, { useState } from "react";

function RegisterPage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [contactNumber, setContactNumber] = useState("");

   function validationCheck_Password(e) {
      const name = e.target.name;
      const value = e.target.value;
      if (name == "password") {
         setPassword(value);
      }
   }
   function check_password(pa) {}

   function onSubmit(e) {
      e.preventDefault();
      const newUser = {
         firstName: firstName,
         lastName: lastName,
         email: email,
         loginId: loginId,
         password: password,
         contactNumber: contactNumber,
      };
      console.log(newUser);

      // internal server error, duplicate key exceptions
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

            <label style={{ paddingTop: "10px" }}>Email: *</label>
            <input
               type="email"
               placeholder="Email"
               className="form-control"
               name="email"
               style={{ fontSize: ".85em" }}
               onChange={(e) => setEmail(e.target.value)}
               value={email}
            ></input>

            <label style={{ paddingTop: "10px" }}>Login Id / Username: *</label>
            <input
               type="text"
               placeholder="LoginId"
               className="form-control"
               name="loginId"
               style={{ fontSize: ".85em" }}
               onChange={(e) => setLoginId(e.target.value)}
               value={loginId}
            ></input>

            <label style={{ paddingTop: "10px" }}>Password: *</label>
            <input
               type="password"
               placeholder="Password"
               className="form-control"
               name="password"
               style={{ fontSize: ".85em" }}
               onChange={(event) => validationCheck_Password(event)}
               value={password}
            ></input>

            <label style={{ paddingTop: "10px" }}>Cornfirm Password: *</label>
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
