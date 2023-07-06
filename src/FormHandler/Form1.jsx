import React from 'react'

const Form1 = () => {
    let [user, setUser] = React.useState({ email: "", password: "" })
    let emailHandler = (event) => {
        setUser({ ...user, email: event.target.value })
    }
    let passwordHandler = (event) => {
        setUser({ ...user, password: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault()
        alert(JSON.stringify(user))
        console.log(user)
    }
    return (
        <div className="container">
            <pre>{JSON.stringify(user)}</pre>
            <div className="row">
                <div className="col-md-6">
                <center>
                    <h1>Login Page</h1>
                    <form onSubmit={submitHandler}>
                        <label >Email ID:::</label>
                        <input type="text" onChange={emailHandler} />  <br /><br />
                        <label >Password:</label>
                        <input type="text" onChange={passwordHandler} />  <br /><br />
                        <input type="submit" value="login" />
                    </form>
                    </center>
                </div>
            </div>

        </div>
    )
}

export default Form1