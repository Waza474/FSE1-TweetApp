import React from "react";

function RegisterPage() {
   function validationCheck(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.set({ [name]: value });
   }

   function validationCheck_Email(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.set({ [name]: value });
   }

   function validationCheck_loginId(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.set({ [name]: value });
   }

   function validationCheck_Password(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.set({ [name]: value });
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
         <form>
            <label style={{ paddingTop: "0px" }}>First Name:</label>
            <input
               type="text"
               placeholder="First Name"
               className="form-control"
               id="firstName"
               style={{ fontSize: ".85em" }}
               onChange
            ></input>
            <label style={{ paddingTop: "10px" }}>Last Name:</label>
            <input
               type="text"
               placeholder="Last Name"
               className="form-control"
               id="lastName"
               style={{ fontSize: ".85em" }}
            ></input>
            <label style={{ paddingTop: "10px" }}>Email: *</label>
            <input
               type="email"
               placeholder="Email"
               className="form-control"
               id="email"
               style={{ fontSize: ".85em" }}
               onChange={(event) => this.validationCheck_Email}
            ></input>
            <label style={{ paddingTop: "10px" }}>Login Id / Username: *</label>
            <input
               type="text"
               placeholder="LoginId"
               className="form-control"
               id="loginId"
               style={{ fontSize: ".85em" }}
               onChange={(event) => this.validationCheck_loginId}
            ></input>
            <label style={{ paddingTop: "10px" }}>Password: *</label>
            <input
               type="password"
               placeholder="Password"
               className="form-control"
               id="password"
               style={{ fontSize: ".85em" }}
               onChange={(event) => this.validationCheck_Password}
            ></input>
            <label style={{ paddingTop: "10px" }}>Cornfirm Password: *</label>
            <input
               type="password"
               placeholder="Confirm Password"
               className="form-control"
               id="passwordConfirm"
               style={{ fontSize: ".85em" }}
               onChange={(event) => this.validationCheck_Password}
            ></input>
            <label style={{ paddingTop: "10px" }}>Contact Number:</label>
            <input
               type="number"
               placeholder="Contact Number"
               className="form-control"
               id="contactNumber"
               style={{ fontSize: ".85em" }}
               maxLength="10"
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
