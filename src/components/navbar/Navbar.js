import React from 'react';

import {NavLink} from "react-router-dom";

//styles
import {Nav, Item} from './../navbar/NavbarStyle';
import {Popular} from "../friends/friends";

const Navbar = (props) => {
    return (
        <Nav>
            <Item>
                <NavLink to="/profile">Profile</NavLink>
            </Item>
            <Item>
                <NavLink to="/messages">Messages</NavLink>
            </Item>
            <Item>
                <NavLink to="/Friends">Friends</NavLink>
            </Item>
            <Item>
                <NavLink to="/news">News</NavLink>
            </Item>
                <Item>
                    <NavLink to="/music">Music</NavLink>
                </Item>
        </Nav>
    )
};

export {Navbar};