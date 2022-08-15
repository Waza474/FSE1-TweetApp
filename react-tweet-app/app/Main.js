import React from "react";
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

function Main() {
   const initialState = {
      loggedIn: false,
   };

   function ourReducer(draft, action) {
      switch (action.type) {
         case "login":
            draft.loggedIn = true;
            return;
         case "logout":
            draft.loggedIn = false;
            return;
      }
   }

   const [state, dispatch] = useImmerReducer(ourReducer, initialState);

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
