import React, { Component } from 'react'

export class One extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return
        <div>Hello</div>
    }
    else{
        return
        <div>
            vasu
        </div>
        
    }
    return
  
  }
}

export default One