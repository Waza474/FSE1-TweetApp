import React, { useContext, useState } from "react";
import StateContext from "../StateContext";
import axios from "axios";
import MakeReply from "./MakeReply";
import { API_URL } from "../Constants";

function Tweet(props) {
   //var time = new Date();
   //time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

   const appState = useContext(StateContext);

   const [tweetData, setTweetData] = useState(props.data);
   const [showReplies, setShowReplies] = useState(false);
   const [repliesText, setRepliesText] = useState("Show Replies");
   const [likes, setLikes] = useState(tweetData.likes);
   const [reply, setReply] = useState(false);
   const [replies, setReplies] = useState(tweetData.replies);
   const [editStatus, setEditStatus] = useState(false);
   const [editText, setEditText] = useState(tweetData.content);

   // Placeholder Items used during developement
   /*
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

   */

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
      var config = {
         method: "put",
         url: API_URL + "/" + appState.user.loginId + "/like/" + tweetData.id,
         headers: {},
      };

      axios(config).then(function (response) {
         console.log(JSON.stringify(response.data));
         setTweetData(response.data);
      });
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

   const timeCreated =
      tweetData.timeCreated.substring(11, 16) +
      " - " +
      tweetData.timeCreated.substring(8, 10) +
      "-" +
      tweetData.timeCreated.substring(5, 7) +
      "-" +
      tweetData.timeCreated.substring(0, 4);

   async function onDeleteTweet(e) {
      var config = {
         method: "delete",
         url: API_URL + "/" + tweetData.ownerId + "/delete/" + tweetData.id,
         headers: {},
      };

      axios(config).then(function (response) {
         console.log(JSON.stringify(response.data));
      });

      props.refreshTweets();
   }

   async function onEditTweet(e) {
      if (tweetData.content === editText) {
         console.log("No changes noted, not updating");
         setEditStatus(!editStatus);
         return;
      }

      var data = tweetData;
      data.content = editText;

      var config = {
         method: "put",
         url: API_URL + "/X/update/Y",
         headers: {},
         data: data,
      };

      axios(config).then(function (response) {
         setTweetData(response.data);
         console.log(JSON.stringify(response.data));
      });

      setEditStatus(!editStatus);
   }

   return (
      <div
         style={
            props.type === "main"
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
                  alt="alt"
               ></img>
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
                     {timeCreated}
                  </div>
                  {appState.user.loginId === tweetData.ownerId && (
                     <div style={{ paddingRight: "5px", fontSize: "0.7em" }}>
                        <button onClick={(e) => onDeleteTweet(e)}>
                           Delete Tweet
                        </button>
                     </div>
                  )}
                  {appState.user.loginId === tweetData.ownerId &&
                     (!editStatus ? (
                        <div style={{ paddingRight: "5px", fontSize: "0.7em" }}>
                           <button onClick={() => setEditStatus(!editStatus)}>
                              Edit Tweet
                           </button>
                        </div>
                     ) : (
                        <div style={{ paddingRight: "5px", fontSize: "0.7em" }}>
                           <button onClick={(e) => onEditTweet(e)}>
                              Save Changes
                           </button>
                        </div>
                     ))}
               </div>
               <div className="row">
                  {!editStatus ? (
                     <p style={{ paddingLeft: "7px" }}>{tweetData.content}</p>
                  ) : (
                     <textarea
                        className="form-control"
                        id="taContent"
                        style={{
                           height: "64px",
                           fontSize: ".7em",
                        }}
                        maxLength="144"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                     ></textarea>
                  )}
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
