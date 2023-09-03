import styled from "styled-components";
import icon from '../../img/inging.jpg';

const GnbStyled = styled.div`
    width : 100%;
    height : 100%;
    display : inline-block;
`

const TopBar = styled(GnbStyled)`
    width: 100%;
    height : 6%;
    background-color : #212B36;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
`

const SearchBar = styled(TopBar)`
    flex: 3;
    padding-left: 3%;
    height: 75%;
`

const SearchIndex = styled.input`
    border-radius: 3px;
    width: 95%;
    color: #919EAB;
    height: 100%;
    border : 1px solid #919EAB;
    background-color : #212B36;
`

const UserLog = styled(TopBar)`
    flex: 1;
`

const Contents = styled(GnbStyled)`
    height : 90%;
    color: white;
    display: grid;
`

const SnbStyled = styled.div`
    margin : 0;
    padding : 0;
    width : 5%;
    height: 100%;
    background-color: #161C24;
    z-index : 1; 
    position: relative;
	transition:0.5s ease-in-out;	
    contain : style layout inline-size;
    &.active{
        width : 15%;
		transition:0.5s ease-in-out;	
    }
`

const User = styled.div`
    margin : 0;
    width: 100%;
    height: 15%;
    display: flex;
    border-bottom: 1px solid gray;
`

const UserIcon = styled(User)`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background: url(${icon});
    margin: auto;
    background-size: cover;
`

export { GnbStyled, TopBar, Contents, SnbStyled, UserIcon, User, SearchBar, UserLog, SearchIndex }