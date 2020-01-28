import React, {Fragment} from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

let maoDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}


const DialogsContainer = connect(mapStateToProps, maoDispatchToProps) (Dialogs);

export {DialogsContainer};