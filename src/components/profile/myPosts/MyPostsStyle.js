import styled from 'styled-components'

const PostBlock = styled.div`
    padding:10px;

    
    & textarea{
    width: 100%;
    height: 45px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;} 
`

const Posts = styled.div`
    margin-top: 10px;
    
`

const ButtonSend = styled.button`
    width: 100px;
    height:45px;
    color white;
    background-color: #1082a8;
    border-radius:0 0 25px 25px ;
    cursor: pointer;
    outline: none;
    border:none;
    
    
    &:hover{
        background-color: #1082a8;
        color: black;
        border:1px solid black;
    }
`

export {PostBlock, Posts, ButtonSend}