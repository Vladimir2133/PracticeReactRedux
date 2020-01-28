import React from 'react'
//redux
import {followAC, unfollowAC, setUsersAC} from "../../redux/friend-reducer";
//components
import Friends from "./friends";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
}



const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Friends);
