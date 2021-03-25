import React from 'react'
import {AsideNav, AsideDiv, AsideDivSocials, StyledLink, StyledSearch} from './Components'
import {IconContext} from 'react-icons'
import useWindowDimensions from '../../utils/WindowDimensions'

const Aside = () => {

    const {width} = useWindowDimensions();
    return (
        width > 900 ? 
        (<AsideNav animate={{right: 0}} transition={{duration: .7, type:"spring", stiffness:50}}>
            <AsideDiv>
                <IconContext.Provider value={{ color: "#FFF", size: "1.7em"}}>
                    <StyledSearch></StyledSearch>
                </IconContext.Provider>
            </AsideDiv>
            <AsideDivSocials>
                <StyledLink href="https://www.facebook.com/CBRPNKAV" rel="noreferrer" target="_blank">Fb</StyledLink>
                <StyledLink href="https://twitter.com/erlsn" rel="noreferrer" target="_blank">Tw</StyledLink>
                <StyledLink href="https://www.instagram.com/erlsn.acr/" rel="noreferrer" target="_blank">Ig</StyledLink>
            </AsideDivSocials>
        </AsideNav>)
        : (<></>)
    )
}

export default Aside
