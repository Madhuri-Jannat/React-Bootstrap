import React from 'react'

export default function Event() {
    const shoot =(x) =>{
        alert(x);
    };
    const today ="Friday";
  return (
    <>
      <h1>Event</h1>
    
    <button onClick={()=> shoot("Great Shoot")}>shoot</button>
    {/* <button onClick={()=> cot("Great Shoot")}>shoot</button> */}

    <h1>Condition</h1>
    {today=="Friday" ?"Holiday" : "Open"} <br />
    {today=="Friday" && "Holiday"}
    </>
  );
}
