import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import StateContext from "../StateContext";
import { API_URL } from "../Constants";

function MakeReply(props) {
   const [content, setContent] = useState("");
   const appState = useContext(StateContext);

   var replyholder;

   async function onSubmit(e) {
      e.preventDefault(e);

      const newTweet = {
         content: content == "" ? null : content,
         ownerId: appState.user.loginId,
      };

      console.log(props.tweetId);

      if (newTweet.content == null) return;

      const target = API_URL + newTweet.ownerId + "/reply/" + props.tweetId;

      await axios.post(target, newTweet).then((res) => {
         console.log("Tweet Created");
         console.log(res.data);
         replyholder = res.data;
      });

      props.callback(replyholder);
   }
   return (
      <div style={{ paddingBottom: "10px" }}>
         <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
               <div className="col">
                  <textarea
                     placeholder="Enter a Reply"
                     className="form-control"
                     id="taContent"
                     style={{
                        height: "50px",
                        fontSize: ".7em",
                        width: "500px",
                     }}
                     maxLength="144"
                     onChange={(e) => setContent(e.target.value)}
                  ></textarea>
               </div>
               <div className="col">
                  <button>Post</button>
               </div>
            </div>
         </form>
      </div>
   );
}

export default MakeReply;
