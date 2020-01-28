const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text});

const initialsState = {
    posts: [
        {message:'Hi. How are you?', likes: 34 ,id: 1},
        {message:'Its my first project!', likes: 45 ,id: 2},
    ],
        newPostText:'Hello World!!'
};

export const profileReducer = (state = initialsState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likes: 0,
                id: 5,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
            };
        default:
            return state
    }
}