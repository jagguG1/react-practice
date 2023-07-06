
import React, { Component } from 'react'

class Registration extends Component {
    state = {
        firstName: "",
        lastName: "",
        mobileNo: "",
        emailId: ""
    }

    updateHandler = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state)
        //sending data to backed apis
        //we are consuming api

    }
    render() {
        return (
            <div>
                <h1>Registration Page</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler} >
                    <label >First Name:</label>
                    <input type="text" name="firstName" onChange={this.updateHandler} /> <br /><br />
                    <label >Last Name:</label>
                    <input type="text" name="lastName" onChange={this.updateHandler} /> <br /><br />
                    <label >Mobile Number:</label>
                    <input type="text" name="mobileNo" onChange={this.updateHandler} /> <br /><br />
                    <label >Email Id:::::</label>
                    <input type="text" name="emailId" onChange={this.updateHandler} /> <br /><br />
                    <input type="submit" value="Registration" />
                </form>
            </div>
        )
    }
}

export default Registration