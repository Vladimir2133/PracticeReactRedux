const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body});

const initialState = {
    data: [
            {name:'Dimonchik', id: 1},
            {name:'Vladislav', id: 2},
            {name:'Sasha', id: 3},
            {name:'Tania', id: 4},
            {name:'Misha', id: 5}

        ],
    messages:[
            {id: 1, message: 'HI'},
            {id: 1, message: 'How are you'},
            {id: 1, message: 'yo'},
            {id: 1, message: 'yo'},
            {id: 1, message: 'yo'}

        ],
    newMessageBody:''
};

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {...state, newMessageBody: action.body};

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: '',
            };
        default:
            return state;
    }
}