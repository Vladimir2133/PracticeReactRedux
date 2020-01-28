import styled from 'styled-components'

const Item = styled.div`
    display:grid;
    
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 40px;
    
   
    padding:15px;  
    margin-top:10px;
    
    background-color:#BDBDBD;
    border-radius: 10px;
   
`
const PostImg = styled.img`
    padding-right: 25px;
    width: 75px;
`

const Likes = styled.div`
    display: flex;
    align-self: flex-end; 
`

const LikeBtn = styled.button`
    width:80px;
    height:30px;
    border-radius: 70px;
    cursor: pointer;
    outline: none;
    
    &:hover{
        background-color: #1082a8;
        color: black;
        border:1px solid black;
    }
`

export {Item, PostImg, Likes, LikeBtn};