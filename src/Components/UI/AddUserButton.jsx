import React from "react";

import classes from './AddUserButton.module.css'

const AddUserButton = (props) => {
    
    return (
        <button 
        // onClick={props.onClick}
        className={classes.button} 
        type={props.type || 'button'} 
        onClick={props.onClick}
        >{props.children}</button>
    )
}

export default AddUserButton