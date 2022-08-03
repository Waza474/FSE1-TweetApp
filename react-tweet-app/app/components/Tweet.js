import React from "react";

function Tweet() {
   var time = new Date();
   time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

   return (
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
            <div className="row">
               <div
                  className="col"
                  style={{ fontSize: ".9em", color: "darkblue" }}
               >
                  handle
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
               <p style={{ paddingLeft: "7px" }}>
                  what if this content was very long how does this thingo handle
                  it lol, i dont know lilsldasnlasdkna jlkasdl hadljhs asdl .
               </p>
            </div>
         </div>
      </div>
   );
}

export default Tweet;
