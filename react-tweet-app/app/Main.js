import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Tweet from "./components/Tweet";
import TweetCreator from "./components/TweetCreator";
import HomePage from "./components/HomePage";

function Main() {
   return (
      <div>
         <Header />
         <HomePage />
      </div>
   );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
   module.hot.accept();
}
