import React, {Fragment} from 'react';
//Components
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
//Styles
import {DialogItems, Messages, DialogList, DialogImg,Textarea, ButtonMessage,} from "././DialogsStyle";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    const newMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    return(
        <DialogList>
            <DialogItems>
                {state.data.map((d, index) => (
                   <Fragment key={index}>
                       <DialogImg alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WHjhDA7lpURcMrWeNLZPGvlr69K22ClT78HcpehT0NBAmVmilA&s' />
                       <DialogItem name={d.name} id={d.id} />
                   </Fragment>
                ))}
            </DialogItems>

            <Messages>
                {state.messages.map((m, index) => (
                    <Message key={index} message={m.message} />
                    ))}
                <Textarea>
                    <textarea placeholder='Enter your message'
                              value={newMessageBody}
                              onChange={onNewMessageChange}>
                    </textarea>
                    <ButtonMessage onClick={onSendMessageClick}>SEND</ButtonMessage>
                </Textarea>
            </Messages>
        </DialogList>
    );
};

export {Dialogs};