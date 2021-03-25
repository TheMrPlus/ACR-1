import React from 'react'
import {StyledHeader} from './Components'
import {ReactComponent as Logo} from '../../img/Logo.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RegularNav = () => {
    return (
        <>
            <motion.div animate={{translateX:[-100, 0], opacity: [0,1]}} transition={{duration: 1}}>
                <Link to="/">
                    <Logo/>
                </Link>
            </motion.div>
            <motion.div animate={{type: "spring", stiffness: 100, translateX:[-200, 0], opacity: [0,1]}} transition={{duration: 1.2, delay: 0.5}}>
                <Link style={{textDecoration:"none"}} to="/catalogue">
                    <StyledHeader>CATALOGUE</StyledHeader>
                </Link>
            </motion.div>
            
        </> 
    )
}

export default RegularNav
