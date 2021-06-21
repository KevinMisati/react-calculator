import React,{useState} from 'react'
import classes from "./DisplayForm.module.css"
import ButtonDisplay from "./ButtonDisplay"

const DisplayForm = () => {
    const [displayValue, setDisplayValue] = useState("");
    const [operator, setOperator] = useState("");
    const handleButtonClick = (op) => {
       
        setDisplayValue( (val) => {
           return val+ op } )
       
    }
    const handleButtonClickOp= (op) => {
        setDisplayValue((val) => {
            return val + op
        })
        setOperator(op)

    }
    const evaluateCalculation = (e) => {
        e.preventDefault();
        const result = eval((displayValue))
        setDisplayValue(result)
        
    }

    const deleteVal = (e) => {
        e.preventDefault()
        const value = displayValue.split("");
        const updatedValue = value.pop();
        setDisplayValue(value.join(""));
        console.log("working");
        
    }
    const clearVal = (e) => {
        e.preventDefault()
        setDisplayValue("");

    }
    
    return (
        <form className={classes.form}>
            <input readOnly value={displayValue}  type="text" />
            <ButtonDisplay clearVal={clearVal} deleteVal={deleteVal} handleButtonClickOp={handleButtonClickOp} evaluateCalculation={evaluateCalculation} handleButtonClick={handleButtonClick} />
        </form>
    )
}

export default DisplayForm
