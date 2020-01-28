import styled from 'styled-components'


const Wrapper = styled.div
`
    display: grid;
  
    width: 1200px;
    height: 900px;
    margin: 0 auto;
  
    grid-template-areas: 
    "header header"
    "nav content";
  
  
    grid-template-rows: 60px 1fr;
    grid-template-columns: 3fr 9fr;
    grid-gap:10px;

`


const Content = styled.div`
    grid-area: content;
    background: #424242;

`

export {Wrapper, Content};