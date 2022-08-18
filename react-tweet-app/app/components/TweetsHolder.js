import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import StateContext from "../StateContext";

function TweetsHolder() {
   const appState = useContext(StateContext);

   const [tweets, setTweets] = useState([]);
   const [a, setA] = useState(true);

   async function getTweeetsFromAPI() {
      var config = {
         method: "get",
         url: "http://localhost:8080/api/v1.0/tweets/all",
         headers: {},
      };

      var temp;
      await axios(config).then(function (response) {
         temp = response.data;
         setTweets(response.data);
      });

      if (a) {
         setA(false);
         console.log(temp);
      }
   }
   // Get the tweets
   useEffect(() => {
      getTweeetsFromAPI();
   });

   const testTweets = [
      { content: "Apple", likes: 10, ownerId: "CatDog" },
      { content: "Cherry", likes: 4, ownerId: "Sonic" },
      { content: "Grape", likes: 12, ownerId: "Mouse" },
   ];

   return (
      <div>
         {tweets.map(
            (twe) => twe.type == "root" && <Tweet data={twe} type={"main"} />
         )}
      </div>
   );
}

export default TweetsHolder;
