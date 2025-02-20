import React from 'react'

const Square = ({ colorName }) => {
    return (
        <section className='Square'
        style={{backgroundColor: colorName}}
         
        >   
        <p> {colorName? colorName:"Emptyvalue" }</p> 
        </section>

    )
}

export default Square