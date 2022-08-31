import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import StateContext from "../StateContext";
import { API_URL } from "../Constants";

function TweetsHolder({ childFunc }) {
   const appState = useContext(StateContext);

   const [tweets, setTweets] = useState([]);
   const [a, setA] = useState(true);

   async function getTweeetsFromAPI() {
      var config = {
         method: "get",
         url: API_URL + "/all",
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
      console.log("2");
   }
   // Get the tweets
   useEffect(() => {
      console.log("1");
      getTweeetsFromAPI();
      childFunc.current = NewTweetCreated;
   }, []);

   function testfunc2(msg) {
      console.log(msg);
   }

   function NewTweetCreated() {
      getTweeetsFromAPI();
   }

   const testTweets = [
      { content: "Apple", likes: 10, ownerId: "CatDog" },
      { content: "Cherry", likes: 4, ownerId: "Sonic" },
      { content: "Grape", likes: 12, ownerId: "Mouse" },
   ];

   return (
      <div>
         {tweets.map(
            (twe) =>
               twe.type == "root" && (
                  <Tweet
                     data={twe}
                     type={"main"}
                     refreshTweets={getTweeetsFromAPI}
                  />
               )
         )}
      </div>
   );
}

export default TweetsHolder;
