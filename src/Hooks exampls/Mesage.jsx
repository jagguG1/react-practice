import React, { useState } from 'react'

const Mesage = () => {
    const[msg,setmsg]=useState("Hello")
   let gmhandler=()=>{
         setmsg('good morning')
   }
  return (
    <div>
     <h1>mesage component</h1>
     <h2>{msg}</h2>
     <button onClick={gmhandler}>gm</button>
     <button onClick={()=>{setmsg('have a nice day')}}>gn</button>
    </div>
  )
}

export default Mesage