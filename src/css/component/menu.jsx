import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavCss = styled(NavLink)`
    display: grid;
    width: 100%;
    height: 50px;
    place-content: center;
    margin-top: 10px;
    text-decoration: none;
`

export { NavCss }