import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import {BiSearch} from 'react-icons/bi'


export const AsideNav = styled(motion.aside)`
width: 15%;
height: 100%;
background-color: #1F1D20;
position: fixed;
top: 0;
right: -15%;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: 1fr;
`

export const AsideDiv = styled.div`
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: center;
    `

export const AsideDivSocials = styled(AsideDiv)`
    background-color: var(--background-color-2);
    justify-content: space-evenly;
`

export const StyledLink = styled.a`
    color: #BDBDC7;
    transform: rotate(90deg);
    padding-bottom: 15px;
    text-decoration: none;
    font-size: 1.17em;
    @media (max-width: 1024px){
        font-size: 0.8em;
    }
    :hover{
        color: #FFF;
        
        transition: 1s;
    }
`

export const StyledSearch = styled(BiSearch)`
    margin-top: 30%;
    margin-left: 15px;
`
