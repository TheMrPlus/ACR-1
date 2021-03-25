import React, {useEffect} from 'react'
import {MobileSectionWrapper, PhotoDiv, PhotoInfoWrapper, InfoDivSm, DescDiv, H2, H3, H4} from './Components'
import useWindowDimensions from '../../utils/WindowDimensions';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

const MobileSection = ({data: {photoUrl, primary, bgC, edition: {title, collection, date, desc}, item:{productTitle, description, type, gen, style}}}) => {
    
    const {width} = useWindowDimensions();
    const controls = useAnimation();
    const {ref, inView} = useInView();
    
    useEffect(() => {
        if(inView) controls.start('visible')
        if(!inView) controls.start('hidden')
    }, [controls, inView])

    const boxVariants = {
        hidden: {translateX:-50, opacity:0},
        visible: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const boxVariants2 = {
        hidden: {translateX: 50, opacity:0},
        visible: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
    
    return (
        <MobileSectionWrapper bg={bgC}>
                <PhotoDiv ref={ref} animate={controls} variants={boxVariants} initial="hidden" img={`url('${photoUrl}')`} pos={primary ? 'left' : 'right'} align={primary ? 'flex-end' : 'flex-start'} >
                    <PhotoInfoWrapper align={primary ? "flex-end" : "flex-start"}>
                        <H2>{title}</H2>
                        <H4>{collection}</H4>
                        <H4>{`//     ${date}`}</H4>
                        <H3>{desc}</H3>
                    </PhotoInfoWrapper>
                </PhotoDiv>
                <InfoDivSm ref={ref} animate={controls} variants={boxVariants2} initial="hidden" align={width <= 400 ? primary ? 'flex-start' : 'flex-end' : null}>
                    <H2 style={{textAlign: "end", border: "none"}}>{productTitle}</H2>
                    <H3 style={{textAlign: "center"}}>{description}</H3>
                    <DescDiv>
                        <H4 style={{gridArea: "a"}}>Type    {type}</H4>
                        <H4 style={{gridArea: "b"}}>Gen.    {gen}</H4>
                        <H4 style={{gridArea: "c"}}>Style    {style}</H4>
                        </DescDiv>
                </InfoDivSm>
            </MobileSectionWrapper>
    )
}

export default MobileSection
