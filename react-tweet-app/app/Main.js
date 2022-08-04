import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AllUsersPage from "./components/AllUsersPage";
import LogoutPage from "./components/LogoutPage";

function Main() {
   const initialState = {
      loggedIn: false,
   };

   return (
      <div>
         <BrowserRouter>
            <Header />
            <div style={{ height: "15px" }}></div>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/all-users" element={<AllUsersPage />} />
               <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </BrowserRouter>
         <div style={{ height: "100px" }}></div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
   module.hot.accept();
}
