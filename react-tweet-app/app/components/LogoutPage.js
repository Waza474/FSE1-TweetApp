import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function LogoutPage() {
   const appState = useContext(StateContext);
   const appDispatch = useContext(DispatchContext);
   const navigate = useNavigate();
   const [myText, setMyText] = useState(
      appState.loggedIn
         ? "Press Button to Logout"
         : "You are not currently Logged In"
   );

   function onSubmit(e) {
      e.preventDefault();
      if (appState.loggedIn) {
         appDispatch({ type: "logout" });
         setMyText("You have been logged out");
      }
   }

   return (
      <div
         className="container"
         style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center",
         }}
      >
         <form style={{ paddingBottom: "40px" }} onSubmit={(e) => onSubmit(e)}>
            <label style={{ paddingRight: "20px" }}>
               Do you want to logout?
            </label>
            <button>Log Out</button>
         </form>
         <p id="disp">{myText}</p>
      </div>
   );
}

export default LogoutPage;
