import React, { useState } from "react";

import Card from "../UI/Card";
import AddUserButton from "../UI/AddUserButton";

import classes from './AddUser.module.css'
import ErrorModel from "../UI/ErrorModel";

const AddUser =(props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid name and age (non-empty values)"
            })
            return
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please Enter a age  (> 0)"
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () =>{
        setError(null)
    }

    return(
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input 
                    id="username" 
                    type="text"value={enteredUsername} 
                    onChange={usernameChangeHandler}
                    /> 
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                    id="age" 
                    type="number" 
                    value={enteredAge} 
                    onChange={ageChangeHandler}
                    /> 
                    <AddUserButton type="submit">Add User</AddUserButton>
                </form>
            </Card>
        </div>
    )
}

export default AddUser