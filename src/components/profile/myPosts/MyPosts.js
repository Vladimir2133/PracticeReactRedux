import React from 'react';
//components
import {Post} from './Post/post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
//styles
import {PostBlock, Posts, ButtonSend} from "./MyPostsStyle";

const MyPost = (props) => {
    console.log(props)
    const newPostElement = React.createRef();

    const onAddPost = () => { props.addPost() };

    const onPostChange = () =>  {
        let text = newPostElement.current.value;
        props.updateNewPostChange(text);
    }

    return(
        <PostBlock>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <ButtonSend onClick={ onAddPost }>Add post</ButtonSend>
                </div>
            </div>
            <Posts>
                {props.posts.map((p) => <Post message = {p.message} likes = {p.likes} id={p.id} />)}
            </Posts>
        </PostBlock>

    )
};

export {MyPost};