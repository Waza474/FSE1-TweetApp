import React, { useContext, useState } from "react";
import axios from "axios";
import StateContext from "../StateContext";

function TweetCreator(props) {
   const [content, setContent] = useState("");
   const [tag, setTag] = useState("");
   const [taBorderColor, setTaBorderColor] = useState("white");

   const appState = useContext(StateContext);

   const style1 = {
      height: "90px",
      fontSize: ".75em",
   };

   const style2 = {
      height: "90px",
      fontSize: ".75em",
      borderColor: taBorderColor,
      borderWidth: "2px",
   };

   async function onSubmit(e) {
      e.preventDefault();

      const newTweet = {
         content: content == "" ? null : content,
         tag: tag == "" ? null : tag,
         ownerId: appState.user.loginId,
      };

      console.log(newTweet);

      const target =
         "http://localhost:8080/api/v1.0/tweets/" + newTweet.ownerId + "/add";
      try {
         await axios.post(target, newTweet).then((res) => {
            console.log("Tweet Created");
            console.log(res.data);
            props.callback();
         });

         document.getElementById("taContent").value = "";
         document.getElementById("tag").value = "";
      } catch (e) {
         console.log("AAHHAHAHSDHAS", e);
         switch (e.response.status) {
            case 400:
               console.log("Not Null Error");
               /* Cannot change style property, not sure why.
               document
                  .getElementById("taContent")
                  .style.setProperty("borderColor", "yellow");
               document
                  .getElementById("taContent")
                  .style.setProperty("borderWidth", "4");
                  */
               break;
         }
      }
   }

   function testfunc() {
      console.log("test");
   }

   return (
      <div style={{ padding: "7px" }}>
         <button
            onClick={(e) =>
               props.callback({
                  content: "Apple",
                  likes: 10,
                  ownerId: "CatDog",
               })
            }
         >
            test
         </button>
         <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
               <textarea
                  placeholder="Tweet Content"
                  className="form-control"
                  id="taContent"
                  style={style1}
                  maxLength="144"
                  onChange={(e) => setContent(e.target.value)}
               ></textarea>
            </div>
            <div
               className="row"
               style={{ paddingTop: "7px", paddingBottom: "7px" }}
            >
               <input
                  type="text"
                  placeholder="tag (optional)"
                  className="form-control"
                  id="tag"
                  style={{ fontSize: ".65em" }}
                  maxLength="50"
                  onChange={(e) => setTag(e.target.value)}
               ></input>
            </div>
            <div
               className="row"
               style={{ float: "right", paddingBottom: "7px" }}
            >
               <button type="submit">Post Tweet</button>
            </div>
         </form>
      </div>
   );
}

export default TweetCreator;
