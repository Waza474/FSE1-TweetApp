import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Header() {
   return (
      <header>
         <div id="header-container">
            <h5>
               <Link to="/login" className="text-white">
                  Login
               </Link>
            </h5>
            <h5>
               <Link to="/register" className="text-white">
                  Register
               </Link>
            </h5>
            <h5>
               <Link to="/" className="text-white">
                  Tweets
               </Link>
            </h5>
            <h5>
               <Link to="/all-users" className="text-white">
                  All Users
               </Link>
            </h5>
            <h5>
               <Link to="/logout" className="text-white">
                  Logout
               </Link>
            </h5>
         </div>
      </header>
   );
}

export default Header;
