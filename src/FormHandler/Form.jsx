import React, { useState } from 'react'

const Form = () => {
    const[user,setuser]=useState({email:'',pasword:''})
    let emailhandler=(event)=>{
        setuser({email:event.target.value})
    }
    let paswordhandler=(event)=>{
        setuser({pasword:event.target.value})
    }
    let submithandler=(event)=>{
      event.preventDefault()
      alert(JSON.stringify(user))
      console.log(user)
    }
  return (
      <div className="container">
      <pre>{JSON.stringify(user)}</pre>
        <div className="row">
          <div className="col-md-6">
              <h1>Login Form</h1>
              <form>
                 <label>Email::</label>
                 <input type="text" onChange={emailhandler} /> <br/> <br/>
                 <label>pasword:</label>
                 <input type="text" onChange={paswordhandler} /> <br/>
                 <input type="submit" value='Login' />
              </form>
          </div>
        </div>
      </div>
  )
}

export default Form