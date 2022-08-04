import React from "react";

function LoginPage() {
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
            <label style={{ paddingTop: "10px" }}>Login Id / Username:</label>
            <input
               type="text"
               placeholder="LoginId"
               className="form-control"
               id="loginId"
               style={{ fontSize: ".85em" }}
            ></input>
            <label style={{ paddingTop: "10px" }}>Password:</label>
            <input
               type="password"
               placeholder="Password"
               className="form-control"
               id="password"
               style={{ fontSize: ".85em" }}
            ></input>
            <div
               className="col"
               style={{ textAlign: "right", paddingTop: "10px" }}
            >
               <button type="submit">Log In</button>
            </div>
         </form>
      </div>
   );
}

export default LoginPage;
