import React from 'react';
import {NavLink} from "react-router-dom";
//Constants

//Styles
import {Dialog} from "../DialogsStyle";


export const DialogItem = (props) =>{

    let path = '/messages/' + props.id;

    return(
        <Dialog >
            <NavLink to={path}>{props.name}</NavLink>
        </Dialog>
    )
};