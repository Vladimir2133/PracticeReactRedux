import React from 'react';
//components
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostContainer} from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    )
}

export {Profile};
