import styled, {css} from 'styled-components';

const DialogList = styled.div`
    display: grid;
    grid-template-columns: 4fr 8fr;
`

const DialogItems = styled.div`
    display: grid;
    
    grid-template-columns:60px 1fr;
 
    align-items:center
    padding: 10px;
    margin:10px;
    border-right: 1px solid black;
`



const Messages = styled.div`
 
    display: grid;
    
    grid-template-columns:1fr 1fr; 
    
  font-family: "Helvetica Neue";
  font-size: 20px;
  font-weight: normal;
  padding: 30px;
  display: flex;
  flex-direction: column;
 
`
const Textarea = styled.div`
    display: flex;
    width:600px;
    height: 40px;
    resize: both; 
    
    & textarea{
    width: 100%;
    height: 45px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
    }
`

const Dialog = styled.div`
    text-decoration: none;
   

    
     & a {
        text-decoration: none;
        font-size:18px;
        cursor: pointer;
        color: white; 
        cursor: pointer;
        transition: all 300ms linear 0s;
     
    &:hover{
      color: #1082a8;
     }
   }
`

export const TextMessage = styled.div`
    color:white; 
    background:#0B93F6;
    align-self: flex-end;
    padding: 10px;
    margin:10px;
    border-radius:15px;

`

const ButtonMessage = styled.button`
    width: 100px;
    height:45px;
    color white;
    background-color: #1082a8;
    border-radius:0 25px 25px 0;
    cursor: pointer;
    border: none;
    outline: none;
    
    
    &:hover{
        color: black;
    }
`

const MessageText = styled.div`
    align-items: flex-end
    background-color: 
`

const DialogImg = styled.img`
    width: 50px;
    margin:5px;
    border-radius: 30px;
    
   
`

export {DialogList, DialogItems, Messages, MessageText, DialogImg,Textarea, ButtonMessage,Dialog };