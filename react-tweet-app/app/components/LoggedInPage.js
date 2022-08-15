import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LoggedInPage() {
   const navigate = useNavigate();
   return (
      <div
         className="container"
         style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center",
         }}
      >
         <h1>You are already Logged In</h1>
      </div>
   );
}

export default LoggedInPage;
