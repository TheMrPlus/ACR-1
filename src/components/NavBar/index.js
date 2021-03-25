import React from 'react'
import useWindowDimensions from '../../utils/WindowDimensions'
import SmallNav from './MobileNav';
import {Header} from './Components'
import RegularNav from './RegularNav';

const NavBar = () => {
    const {width} = useWindowDimensions()
    return (
        <Header>
            {width > 900 ? (
                    <RegularNav/>
                ) : (
                    <SmallNav/>
                )
            }
        </Header>
    )
}

export default NavBar
