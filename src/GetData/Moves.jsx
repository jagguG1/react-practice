import React, { useEffect } from 'react'

const Moves = () => {
    const[vasu,setvasu]=React.useState({})
    useEffect(()=>{
        Axios.get('http://test.api.boxigo.in/sample-data/')
        .then((response)=>{
               setvasu(response.data)
        })
        .catch(()=>{

        })
        },[])
  return (
    <div>
    <h1>Customar Moves</h1>
       <h1>{vasu}</h1>
    </div>
  )
}

export default Moves