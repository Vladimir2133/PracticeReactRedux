import React from 'react';
//styles
import {TextMessage} from "../DialogsStyle";

export const Message = (props) => {
    return(
        <TextMessage>{props.message}</TextMessage>
    )
};