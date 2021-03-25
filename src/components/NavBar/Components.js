import styled from '@emotion/styled';
import {motion} from 'framer-motion'

export const Hr = styled.div`
width: 80%;
height: 3px;
background-color: var(--primary-font-color);
`

export const SmallNavigation = styled(motion.div)`
background-color: transparent;
height: 100vh;
width: 100vw;
position: fixed;
z-index: 1;
top: 0;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
@media (orientation: landscape){
    height: 110vh;
}
`

export const SmallMenu = styled.div`
display: flex;
width: 100vw;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
padding: 10% 0 0 0;
`

export const StyledHeader = styled.h2`
font-size: 1.3em;
letter-spacing: 2px;
color: var(--primary-font-color);
text-decoration: none;
`

export const Header = styled.header`
overflow: hidden;
position: fixed;
top: 0;
left: 0;
width: 45%;
margin: 3% 3%;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-evenly;
@media (max-width: 900px){ 
    margin: 5% 0;
    width: 100%;
    justify-content: space-around;
}
`

export const StyledLink = styled.a`
        text-decoration: none;
`