import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const Nav = styled.div`
    grid-area: nav;
    background-image: linear-gradient(to left, rgb(64, 64, 64), rgb(60, 70, 73), rgb(55, 76, 83), rgb(51, 82, 92), 
                                              rgb(47, 88, 102), rgb(42, 94, 111), rgb(38, 100, 121), rgb(33, 106, 130), 
                                              rgb(29, 112, 140), rgb(25, 118, 149), 
                                              rgb(20, 124, 159), rgb(16, 130, 168));
    
    padding:20px;
    line-height: 2em;
    border-radius: 15px;
  `

const Item = styled.div`
    border-radius: 10px;
    font-size: 24px;
    margin: 15px;
    text-align: left;
  
    
    & a{
    
    list-style-type: none;
    text-decoration: none;
    color: black;
     transition: all 300ms linear 0s;
    
    &:hover{
      color: white;
    }
  }
`

  export {Nav, Item};