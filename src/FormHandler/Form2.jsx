import React, { Component } from 'react'

export class Form2 extends Component {
    state={
        Email:'',
        pasword:''
    }
    emailhandler=(event)=>{
        this.setState({Email:event.targent.value})
    }
    paswordhandler=(event)=>{
        this.setState({pasword:event.targent.value})
    }
  render() {
    return (
      <div className="container">
      <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-primary">
                        <h1>Login Form</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <label>Email:</label>
                            <div className="form-group">
                        
                            <input className='form-controll' type="text" placeholder='Email id' onChange={this.emailhandler} />
                            </div>
                           <label htmlFor="">password</label>
                            <div className="form-group">
                            <input className='form-controll' type="text" placeholder='Paasword' onChange={this.paswordhandler} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Form2