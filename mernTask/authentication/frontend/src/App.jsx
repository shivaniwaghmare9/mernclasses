// import React, { useState } from 'react'
// import Signup from './component/Signup'
// import Login from './component/Login'



// const App = () => {
//   const[islogin,setIslogin]=useState(true)
//   return (
//     <div>
//       <h1 className='head'>Authentication</h1>
//       {islogin ? <Login onSwitch={()=>setIslogin(false)} /> : <Signup onSwitch={()=>setIslogin(true)} />}
      
//     </div>
//   )
// }

// export default App;
import React, { useState } from 'react'
import Signup from './component/Signup'
import Login from './component/Login'



const App = () => {
  const[islogin,setIslogin]=useState(true)
  return (
    <div>
      <h1 className='head'>Authentication</h1>
      {islogin ? <Login onSwitch={()=>setIslogin(false)} /> : <Signup onSwitch={()=>setIslogin(true)} />}
      
    </div>
  )
}

export default App