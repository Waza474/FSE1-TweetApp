import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

function AllUsersPage() {
   const [search, setSearch] = useState("");
   const [results, setResults] = useState([]);

   useEffect(() => {
      if (search == "") {
         var config = {
            method: "get",
            url: "http://localhost:8080/api/v1.0/tweets/users/all",
            headers: {},
         };

         axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            setResults(response.data);
         });
      } else {
         console.log("Searching...");
         var config = {
            method: "get",
            url: "http://localhost:8080/api/v1.0/tweets/user/search/" + search,
            headers: {},
         };

         axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            setResults(response.data);
         });
      }
   }, [search]);

   return (
      <div
         className="container"
         style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center",
         }}
      >
         <div className="row">
            <h2>Type to start searching for users:</h2>
         </div>
         <div style={{ paddingBottom: "50px" }} className="row">
            <input
               placeholder="search for user..."
               className="form-control"
               id="iSearch"
               onChange={(e) => setSearch(e.target.value)}
            ></input>
         </div>
         <div
            style={{
               padding: "10px",
            }}
            className="row"
         >
            <div className="col">
               {results.map((usr) => (
                  <div style={{ paddingBottom: "20px" }}>
                     <User data={usr} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default AllUsersPage;
