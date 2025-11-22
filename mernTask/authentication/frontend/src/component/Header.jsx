import React from 'react'

const ClickButton= () => {
    const show=()=>{
     let num=5;
   for (let i=1; i<=num; i++){
    console.log(i)
       
}
}
return (
    <div>
        <button onClick={show}>Check count number</button>
    </div>
    
  )
}

export default ClickButton;