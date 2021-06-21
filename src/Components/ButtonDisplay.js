import React from 'react'
import classes from "./ButtonDisplay.module.css"

const ButtonDisplay = ({ handleButtonClick,handleButtonClickOp,evaluateCalculation,deleteVal,clearVal}) => {
    
    return (
        <table className={classes.table}>
            <tr>
                <button onClick={(e) => { e.preventDefault();handleButtonClick(1)}} >1</button> 
                <button onClick={(e) => { e.preventDefault();handleButtonClick(2)}} >2</button> 
                <button onClick={(e) => { e.preventDefault();handleButtonClick(3)}} >3</button> 
                <button onClick={(e) => { e.preventDefault();handleButtonClick(4)}} >4</button> 
            </tr>
            <tr>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(5)}} >5</button>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(6)}} >6</button>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(7)}} >7</button>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(8)}} >8</button>
            </tr>
            <tr>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(9)}} >9</button>
                <button onClick={(e) => {e.preventDefault();handleButtonClick(0)}} >0</button>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp("(")}} >(</button>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp(")")}} >)</button>
            </tr>
            <tr>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp(".")}} >.</button>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp("+")}} >+</button>
                <button onClick={(e) => { e.preventDefault();handleButtonClickOp("-")}} >-</button>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp("*")}} >*</button>
            </tr>
            <tr>
                <button onClick={(e) => { e.preventDefault(); handleButtonClickOp("/") }} >/</button>
                <button onClick={deleteVal} >D</button>
                <button onClick={clearVal} >C</button>
                <button onClick={evaluateCalculation} >=</button>
            </tr>
        </table>
    )
}

export default ButtonDisplay
