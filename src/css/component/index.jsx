import styled from "styled-components";

const Container = styled.div`
    display : inline;
    width : 100%;
`

const Component = styled.div`
    display : flex;
    width : 100%;
    justify-content : flex-end;
`

const MainComponent = styled(Component)`
    display : inline;   
    width : 85%;
    height : 100%;
    justify-content : center;
`

const GnbStyled = styled.div`
    width : 100%;
    height : 100px;
    background-color : black;
`

const BoardTitle = styled.input`
    width : 95%;
    height : 2rem;
    margin : 10px;
`
const BoardContent = styled.input`
    width : 95%;
    height : 30rem;
    margin : 10px;
`

export { MainComponent, GnbStyled, Container, Component, BoardTitle, BoardContent };