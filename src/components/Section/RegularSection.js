import React, {useEffect}  from 'react'
import {SectionWrapper, SectionOne, Grid, StyledP, MidDiv, InfoDiv, DescDiv, H2, H3, H4, SectionTwo} from './Components'
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

const RegularSection = ({data: {photoUrl, primary, bgC, edition: {title, collection, date, desc}, item:{productTitle, description, type, gen, style}}}) => {

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
        hidden: {translateX:50, opacity:0},
        visible: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
    
    return (
        <SectionWrapper areas={primary ? "50% 35% 15%" : "35% 50% 15%"} bg={bgC}>
            <SectionOne area={primary ? "a" : "b"}>
                <Grid areas={primary ? "'a a b' 'd d e' 'f f f'" : " 'd d e' 'f f f'  'a a b' "}>
                    <StyledP style={{gridArea: "a"}} ref={ref} animate={controls} variants={boxVariants} initial="hidden">
                        All contents of this website are the property of ACRONYM&reg; GmbH.
                    </StyledP>
                    <StyledP style={{gridArea: "b"}} ref={ref} animate={controls} variants={boxVariants} initial="hidden">
                        ACRONYM GMBH <br/>
                        Zuccalistrasse 1 <br/>
                        80639 Munich, Germany
                    </StyledP>
                    <MidDiv ref={ref} animate={controls} variants={boxVariants} initial="hidden">
                        <H2>{title}</H2>
                        <H4>{collection}</H4>
                        <H4>{`//    ${date}`}</H4>
                        <H3>{desc}</H3>
                    </MidDiv>
                    <InfoDiv ref={ref} animate={controls} variants={boxVariants2} initial="hidden">
                        <H2 style={{textAlign: "end", border: "none"}}>{productTitle}</H2>
                        <H3 style={{textAlign: "end"}}>{description}</H3>
                        <DescDiv>
                        <H4 style={{gridArea: "a"}}>Type    {type}</H4>
                        <H4 style={{gridArea: "b"}}>Gen.    {gen}</H4>
                        <H4 style={{gridArea: "c"}}>Style    {style}</H4>

                        </DescDiv>
                    </InfoDiv>
                </Grid>
            </SectionOne>
            <SectionTwo primary={primary ? "b" : "a"} img={`url('${photoUrl}')`}></SectionTwo>
        </SectionWrapper>
    )
}

export default RegularSection
