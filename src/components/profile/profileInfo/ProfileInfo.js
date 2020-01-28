import React from 'react';
import {ContentImg} from "../ProfileStyle";
import {DescriptionBlock} from "./ProfileInfoStyle";

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <ContentImg src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qR8k-quzchqFbUWX0s49X0JWSIEZSIBs6ssNdgoEpK5B1-IBCw&s" />
            </div>
            <DescriptionBlock>
                ava + description
            </DescriptionBlock>
        </div>

    )
}

export {ProfileInfo}