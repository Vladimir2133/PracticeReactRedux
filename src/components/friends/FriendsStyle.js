import styled, {css} from 'styled-components';



export const Button = styled.button`
    width: 75px;
    height:30px;
    color white;
    border: none;
   background-color: #1082a8; 
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    margin: 15px 0 0 5px ;
    
     &:hover{ 
        color: black;
        border:1px solid black;
    }
`

export const FriendImg = styled.img`
    width: 70px;
    margin:5px;
    border-radius: 30px;
`

export const User = styled.div`
    width: 900px;
    height: auto;
    display: flex;
    margin 20px;
    padding:10px;
    border-radius: 20px;
    background-color:#BDBDBD;
    justify-content: flex-start;
    border: 1px solid white;
    
`

export const Name = styled.div`
    width: 640px;
    display: grid;
    grid-template-rows: 70px 30px;
    
    align-self: flex-start;
    margin: 0 20px;
    
`

export const Location = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 10px;   
`

export const Frag = styled.div`
    display: grid;
    grid-template-rows: 70px 40px;
    border-right: 1px solid black;
    padding-right: 15px;
`