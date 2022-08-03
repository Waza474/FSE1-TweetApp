import React from "react";

function TweetCreator() {
   return (
      <div style={{ padding: "7px" }}>
         <form>
            <div className="row">
               <textarea
                  placeholder="Tweet Content"
                  className="form-control"
                  style={{ height: "90px", fontSize: ".75em" }}
                  maxLength="144"
               ></textarea>
            </div>
            <div
               className="row"
               style={{ paddingTop: "7px", paddingBottom: "7px" }}
            >
               <input
                  type="text"
                  placeholder="tag"
                  className="form-control"
                  id="tag"
                  style={{ fontSize: ".85em" }}
                  maxLength="50"
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
