import React, { useContext } from "react";

function LogoutPage() {
   return (
      <div
         className="container"
         style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center",
         }}
      >
         <form style={{ paddingBottom: "40px" }}>
            <label style={{ paddingRight: "20px" }}>
               Do you want to logout?
            </label>
            <button>Log Out</button>
         </form>
         <p>you have been logged out</p>
      </div>
   );
}

export default LogoutPage;
