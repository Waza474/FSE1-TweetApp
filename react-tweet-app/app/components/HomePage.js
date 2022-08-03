import React from "react";
import Tweet from "./Tweet";
import TweetCreator from "./TweetCreator";

function HomePage() {
   return (
      <div className="container" style={{ paddingTop: "10px" }}>
         <div className="row" style={{ paddingBottom: "60px" }}>
            <div className="col">
               <img
                  className="avatar-big"
                  src={
                     "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  }
               />
            </div>
            <div className="col">Spa</div>
            <div className="col-8" style={{ backgroundColor: "#89cff0" }}>
               <TweetCreator />
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
