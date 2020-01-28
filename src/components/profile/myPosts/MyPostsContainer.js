import React from 'react';
import {MyPost} from "./MyPosts";
//components
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

import {connect} from "react-redux";
//styles


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const maoDispatchToProps = (dispatch) => {
    return{
        updateNewPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};

const MyPostContainer = connect(mapStateToProps, maoDispatchToProps) (MyPost);
export {MyPostContainer};