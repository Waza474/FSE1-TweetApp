import "./main.css";
import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useImmerReducer } from "use-immer";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import AllUsersPage from "./components/AllUsersPage";
import LogoutPage from "./components/LogoutPage";
import RegisteredPage from "./components/RegisteredPage";
import LoggedInPage from "./components/LoggedInPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";

function Main() {
   const initialState = {
      loggedIn: false,
      user: {
         firstName: "",
         lastName: "",
         email: "",
         loginId: "",
         password: "",
         contactNumber: "",
      },
   };

   function ourReducer(draft, action) {
      switch (action.type) {
         case "login":
            draft.loggedIn = true;
            draft.user = action.data;
            return;
         case "logout":
            draft.loggedIn = false;
            return;
      }
   }

   const [state, dispatch] = useImmerReducer(ourReducer, initialState);

   useEffect(() => {
      console.log("gello");
      const data1 = JSON.parse(window.localStorage.getItem("tweetAppLoggedIn"));
      const data2 = JSON.parse(window.localStorage.getItem("tweetAppUser"));

      if (data1) {
         dispatch({ type: "login", data: data2 });
      } else {
         dispatch({ type: "logout" });
      }
   }, []);

   useEffect(() => {
      if (state.loggedIn) {
         window.localStorage.setItem(
            "tweetAppLoggedIn",
            JSON.stringify(state.loggedIn)
         );
         window.localStorage.setItem(
            "tweetAppUser",
            JSON.stringify(state.user)
         );
      } else {
         window.localStorage.removeItem("tweetAppLoggedIn");
         window.localStorage.removeItem("tweetAppUser");
      }
   }, [state.loggedIn]);

   return (
      <StateContext.Provider value={state}>
         <DispatchContext.Provider value={dispatch}>
            <BrowserRouter>
               <Header />
               <div style={{ height: "15px" }}></div>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route
                     path="/login"
                     element={state.loggedIn ? <LoggedInPage /> : <LoginPage />}
                  />
                  <Route path="/all-users" element={<AllUsersPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                  <Route path="/registered" element={<RegisteredPage />} />
                  <Route
                     path="/forgot-password"
                     element={<ForgotPasswordPage />}
                  />
               </Routes>
            </BrowserRouter>
            <div style={{ height: "100px" }}></div>
         </DispatchContext.Provider>
      </StateContext.Provider>
   );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
   module.hot.accept();
}
