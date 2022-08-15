import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function RegisteredPage() {
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
         <h1>You Have Successfully Registered your Account.</h1>
      </div>
   );
}

export default RegisteredPage;
