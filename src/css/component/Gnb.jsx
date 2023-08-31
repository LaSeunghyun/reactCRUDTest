import styled from "styled-components";

const GnbStyled = styled.div`
    width : 100%;
    height : 100%;
    display: inline-block;
`

const TopBar = styled(GnbStyled)`
    height : 10%;
    background-color : black;
    color: white;
    position: relative;
`

const Contents = styled(GnbStyled)`
height : 90%;
background-color : white;
color: black;
display: inline-block;
`

const SnbStyled = styled.div`
    margin : 0;
    padding : 0;
    background-color: green;
    width : 5%;
    height: 100%;
    position: relative;
    z-index: 1;
	transition:0.5s ease-in-out;	
    &.active{
        width : 10%;
		transition:0.5s ease-in-out;	
    }
`

export { GnbStyled, TopBar, Contents, SnbStyled }