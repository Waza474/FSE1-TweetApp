import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";

function Main() {
   return (
      <div>
         <Header />
         <HomePage />
         <RegisterPage />
         <div style={{ height: "100px" }}></div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
   module.hot.accept();
}
