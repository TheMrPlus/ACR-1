import React, {useState} from 'react'
import {ReactComponent as LogoSmall} from '../../img/LogoSmall.svg'
import {IconContext} from 'react-icons'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import {Hr, SmallNavigation, SmallMenu, StyledHeader, StyledLink} from './Components'
import {motion} from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'

const SmallNav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const iconVariants = {
        open: {
            rotate: 45,
            scale: 2,
            opacity: 1,
            translateX: 0
        },
        closed: {
            rotate: 0,
            scale: 2,
            opacity: [0,1],
            type:"spring",
            stiffness: 200,
            translateX: [100, 0]
        }
    }

    const menuVariants = {
        open:{
            top: 0,
            backgroundColor: "var(--background-color-2)",
            opacity: 100
        },
        closed:{
            top: "-90vh",
            backgroundColor: "#222125",
            opacity: 0
        }
    }

    return (
        <>
                <motion.div animate={{type: "spring", stiffness: 200, translateX: [-100, 0], opacity:[0,1], zIndex: 10}} transition={{duration: 2}}>
                <NavLink to="/" style={{zIndex: 2}} onClick={() => setIsOpen(false)}>
                        <LogoSmall style={{zIndex: 5}}/>
                </NavLink>
                </motion.div>
                <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                initial={true}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="plus-sign"
                variants={iconVariants}
                onClick={() => setIsOpen(state => !state)}
                style={{zIndex:2}}
                animate={isOpen ? "open" : "closed"}
                >
                <path
                    d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                    fill="#ffffff"
                />
                </motion.svg>
                <SmallNavigation
                initial={false}
                variants={menuVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{type:"spring",duration: 1.5}}
                >   
                    <Link style={{textDecoration:"none"}} to="/catalogue" onClick={() => setIsOpen(false)}>
                        <StyledHeader>CATALOGUE</StyledHeader>
                    </Link>
                    <Hr/>
                    <SmallMenu>
                        <IconContext.Provider value={{color:"#E9EAEC", size: "2em"}}>
                            <StyledLink href="https://www.facebook.com/CBRPNKAV" rel="noreferrer" target="_blank"><FaFacebookF/></StyledLink>
                            <StyledLink href="https://twitter.com/erlsn" rel="noreferrer" target="_blank"><FaTwitter/></StyledLink>
                            <StyledLink href="https://www.instagram.com/erlsn.acr/" rel="noreferrer" target="_blank"><FaInstagram/></StyledLink>
                        </IconContext.Provider>
                    </SmallMenu>
                </SmallNavigation>
        </>
    )
}

export default SmallNav
