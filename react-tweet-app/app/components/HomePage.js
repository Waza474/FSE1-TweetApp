import Tweet from "./Tweet";
import TweetCreator from "./TweetCreator";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function HomePage() {
   const appState = useContext(StateContext);

   return (
      <div className="container" style={{ paddingTop: "10px" }}>
         <div className="row" style={{ paddingBottom: "60px" }}>
            <div className="col">
               {appState.loggedIn ? (
                  <img
                     className="avatar-big"
                     src={
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                     }
                  />
               ) : (
                  <div />
               )}
            </div>
            <div className="col"></div>
            <div className="col-8" style={{ backgroundColor: "#89cff0" }}>
               {appState.loggedIn ? (
                  <TweetCreator />
               ) : (
                  <p style={{ textAlign: "center", paddingTop: "10px" }}>
                     You must login to Create Tweets
                  </p>
               )}
            </div>
         </div>
         <div className="row">
            <div className="col"></div>
            <div className="col-8"></div>
         </div>

         <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col"></div>
            <div className="col-8" style={{ backgroundColor: "yellow" }}>
               TWEET
            </div>
         </div>

         <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col"></div>
            <div className="col-8" style={{ backgroundColor: "yellow" }}>
               <Tweet />
            </div>
         </div>

         <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col"></div>
            <div className="col-8" style={{ backgroundColor: "yellow" }}>
               TWEET
            </div>
         </div>
      </div>
   );
}

export default HomePage;
