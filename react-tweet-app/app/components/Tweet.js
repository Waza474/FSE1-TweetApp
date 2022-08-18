import React, { useContext, useState } from "react";
import StateContext from "../StateContext";
import axios from "axios";
import MakeReply from "./MakeReply";

function Tweet(props) {
   var time = new Date();
   time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

   const appState = useContext(StateContext);

   const [tweetData, setTweetData] = useState(props.data);
   const [showReplies, setShowReplies] = useState(false);
   const [repliesText, setRepliesText] = useState("Show Replies");
   const [likes, setLikes] = useState(tweetData.likes);
   const [reply, setReply] = useState(false);
   const [replies, setReplies] = useState(tweetData.replies);

   const tweetExample = {
      content: "",
      tag: "",
      ownerId: "",
      likes: "",
      replies: "",
   };

   const testReplies = [
      { content: "Apple", likes: 10, ownerId: "CatDog" },
      { content: "Cherry", likes: 4, ownerId: "Sonic" },
      { content: "Grape", likes: 12, ownerId: "Mouse" },
   ];

   function onRepliesClick() {
      setShowReplies(!showReplies);
      if (!showReplies) {
         setRepliesText("Hide Replies");
      } else {
         setRepliesText("Show Replies");
      }
   }

   async function onLikesClick() {
      setLikes(likes + 1);
      // NEED TO DO: ADD AXIOS FUNCTION
      // POTENTIALLY REWORD AS IT DEPENDS ON USER
   }

   function onReplyClick() {
      setReply(!reply);
   }

   function onFinishReply(newReply) {
      console.log("BELOW THIS");
      var temp = replies;
      if (temp == null) {
         temp = [];
      }
      temp.push(newReply);
      console.log(newReply, temp);
      setReplies(temp);
      setReply(false);
      setShowReplies(true);
   }

   return (
      <div
         style={
            props.type == "main"
               ? { paddingBottom: "20px" }
               : {
                    paddingBottom: "20px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                 }
         }
      >
         <div className="row" style={{ backgroundColor: "#89cff0" }}>
            <div className="col-auto-custom">
               <img
                  className="avatar-small"
                  src={
                     "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  }
               />
            </div>
            <div className="col">
               <div className="row" style={{ paddingTop: "5px" }}>
                  <div
                     className="col"
                     style={{
                        fontSize: ".9em",
                        color: "darkblue",
                        fontFamily: "bold",
                     }}
                  >
                     {tweetData.ownerId}
                  </div>
                  <div
                     className="col"
                     style={{
                        textAlign: "right",
                        fontSize: ".9em",
                        color: "darkblue",
                     }}
                  >
                     {time}
                  </div>
               </div>
               <div className="row">
                  <p style={{ paddingLeft: "7px" }}>{tweetData.content}</p>
               </div>
               <div
                  className="row"
                  style={{
                     color: "darkblue",
                     textAlign: "center",
                     paddingBottom: "15px",
                  }}
               >
                  <div className="col">
                     <button onClick={() => onLikesClick()}>
                        {"Likes: " + likes}
                     </button>
                  </div>
                  {replies != null && (
                     <div className="col">
                        <button onClick={() => onRepliesClick()}>
                           {repliesText}
                        </button>
                     </div>
                  )}
                  {appState.loggedIn && (
                     <div className="col">
                        <button onClick={() => onReplyClick()}>Reply</button>
                     </div>
                  )}
               </div>
               <div className="row">
                  {reply && (
                     <div>
                        <MakeReply
                           tweetId={tweetData.id}
                           callback={onFinishReply}
                        />
                     </div>
                  )}
               </div>
               <div className="row" style={{ backgroundColor: "#b8e1f5" }}>
                  {showReplies && (
                     <div
                        className="col"
                        style={{
                           backgroundColor: "#b8e1f5",
                           paddingTop: "10px",
                        }}
                     >
                        {replies.map((twe) => (
                           <Tweet data={twe} type={"reply"} />
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Tweet;
