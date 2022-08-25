import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";

function RegisteredPage() {
   const navigate = useNavigate();
   const appDispatch = useContext(DispatchContext);
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
         <button
            onClick={(e) => {
               appDispatch({ type: "logout" });
               navigate("/login");
            }}
         >
            Login?
         </button>
      </div>
   );
}

export default RegisteredPage;
