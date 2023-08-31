import styled from "styled-components";

const Container = styled.div`
    display : inline;
    width : 100%;
`

const Component = styled.div`
    display : flex;
    width : 100%;
`

const MainComponent = styled(Component)`
    display : inline;   
    width : 100%;
    height : 100%;
    justify-content : center;
    margin : 10px;
`

const BoardTitle = styled.div`
    width : 95%;
    height : 2rem;
    border : 1px solid gray;
`

const BoardContent = styled.div`
    margin-top: 10px;
    width : 95%;
    height : 30rem;
    border : 1px solid gray;
`
const InputTitle = styled.input`
    width : 95%;
    height : 2rem;
    border : 1px solid gray;
`

const InputContent = styled.input`
    margin-top: 10px;
    width : 95%;
    height : 30rem;
    border : 1px solid gray;
`

export { MainComponent, Container, Component, BoardTitle, BoardContent, InputContent, InputTitle };