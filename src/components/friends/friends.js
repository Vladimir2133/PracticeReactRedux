import React, {Fragment} from 'react'

import {Button, FriendImg, User, Name, Location, Frag} from "./FriendsStyle";


const Friends = (props) => {
    return (
        <div>
            {props.users.map(user =>
                <User key={user.id}>
                    <Frag>
                        <FriendImg src={user.photoUrl}/>
                        {user.followed
                            ? <Button onClick={() => props.unfollow(user.id)}> Unfollow </Button>
                            : <Button onCLick={() => props.follow(user.id)}> follow </Button>
                        }
                    </Frag>
                    <Name>
                        <p>{user.fullName}</p>
                        <p>{user.status}</p>
                    </Name>
                    <Location>
                        <p>{user.location.city}</p>
                        <p>{user.location.country}</p>
                    </Location>
                </User>
            )}
        </div>
    )
}

export default Friends;
