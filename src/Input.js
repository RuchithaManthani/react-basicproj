import React from 'react'

const Input = ({colorName, setColorName}) => {
  return (
    <form className='inputForm' onSubmit={(e)=>e.preventDefault()}>
        
        <input id="input"
        type="text"
        placeholder='Add Color Name'
        required
        value={colorName}
        onChange ={(e)=>{setColorName(e.target.value)
        }}
        >
        </input>
        
         
       
    </form>
  )
}

export default Input