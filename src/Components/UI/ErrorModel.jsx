import React from "react";

import classes from './ErrorModel.module.css'

import Card from "./Card";
import AddUserButton from "./AddUserButton";

const ErrorModel = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <AddUserButton onClick={props.onConfirm} >Okay</AddUserButton>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModel;