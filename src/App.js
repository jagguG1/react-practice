import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='services' element={<Services/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

// import React from 'react'
// import Moves from './GetData/Moves'
// // import Registration from './FormHandler/REgistration'
// // import Form2 from './FormHandler/Form2'
// // import Form1 from './FormHandler/Form1'
// // import One from './One'
// // import Login from './Hooks exampls/Login'
// // import Mesage from './Hooks exampls/Mesage'
//     // import Form from './FormHandler/Form'
// const App = () => {
//   return (
//     <div>
//       {/* <Login/>
//       <Mesage/> */}
//       {/* <One/> */}
//       {/* <Form/> */}
//       {/* <Form1/> */}
//       {/* <Form2/> */}
//       {/* <Registration/> */}
//       <Moves/>
//     </div>
//   )
// }

// export default App