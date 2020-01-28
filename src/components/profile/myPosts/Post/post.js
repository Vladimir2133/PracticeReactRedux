import React from 'react';

import {Item, PostImg, Likes, LikeBtn} from './postStyle';

const Post = (props) => {
    return(
        <Item>
            <PostImg src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_KHJgWDR0AtZwzsCWSsSwmqOvo0TwgJ490NFEOCIfxzAoQlbdg&s'/>
             {props.message}
             <Likes>
                 <LikeBtn>likes {props.likes}</LikeBtn>
             </Likes>
        </Item>
    )
}

export {Post};