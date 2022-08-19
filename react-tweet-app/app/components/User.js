import React, { useState } from "react";

function User(props) {
   const [userData, setUserData] = useState(props.data);
   const [username, setUsername] = useState(userData.loginId);

   return (
      <div
         style={{
            padding: "10px",
            backgroundColor: "#89cff0",
            width: "300px",
            margin: "auto",
         }}
      >
         <div className="row">
            <div className="col-auto">
               <img
                  className="avatar-small"
                  src={
                     "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  }
               />
            </div>
            <div className="col">
               <div className="row">
                  <h4>{username}</h4>
               </div>
               <div className="row">
                  <p>Hello this is my Status</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default User;
