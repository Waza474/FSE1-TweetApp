import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

function Main() {
   return (
      <div>
         <Header />
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
               <div className="col-8" style={{ backgroundColor: "green" }}>
                  <div className="row">twe</div>
                  <div className="row">
                     <button className="button-postTweet">Post Tweet</button>
                  </div>
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
                  TWEET
               </div>
            </div>

            <div className="row" style={{ paddingBottom: "20px" }}>
               <div className="col"></div>
               <div className="col-8" style={{ backgroundColor: "yellow" }}>
                  TWEET
               </div>
            </div>
         </div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
   module.hot.accept();
}
