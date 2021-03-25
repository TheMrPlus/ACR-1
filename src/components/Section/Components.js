import styled from '@emotion/styled'
import {motion} from 'framer-motion';

export const SectionWrapper = styled.section({
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateAreas: "'a b c'",
}, props => ({gridTemplateColumns: props.areas, backgroundColor: props.bg}))

export const SectionOne = styled.div({
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
}, props => ({gridArea: props.area}))

export const SectionTwo = styled(motion.div)({
    backgroundColor: "#FFF",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
}, props => ({gridArea: props.area, backgroundImage: props.img}))


export const StyledP = styled(motion.p)`
width: 60%;
text-align: start;
font-size: .5rem;
color: #FFF;
:first-of-type{
    width: 40%;
}
`
export const H2 = styled.h2`
color: #FFF;
font-size: 1.5em;
padding-bottom: 8px;
border-bottom: 2px solid #FFF;
margin: 0;
@media (max-width: 450px){
    font-size: 1.2em;
}
`

export const H4 = styled.h4`
font-size: 1em;
margin: 0;
padding-top: 8px;
color: var(--primary-font-color);
@media (max-width: 900px){
    color: #FFFFFF;
}

`

export const H3 = styled.h3`
font-size: 1.4em;
margin: 0;
padding-top: 10px;
color: #FB3640;
@media (max-width: 450px){
    font-size: 1.1em;
}
`
export const Grid = styled.div({
    display: "grid",
    width: "75%",
    height: "75%",
    gridTemplateColumns: "1fr .5fr 1fr",
    gridTemplateRows: "repeat(3,1fr)",
    alignItems: "center",
    justifyItems: "center"
}, props => ({gridTemplateAreas: props.areas}))

export const MidDiv = styled(motion.div)`
grid-area: d;
`

export const InfoDiv = styled(motion.div)`
grid-area: f;
justify-self: stretch;
@media (min-width: 1200px){
    margin-left: 80px;
}
`

export const DescDiv = styled.div`
display: grid;
margin-top: 1em;
width: 100%;
grid-template-columns: repeat(3, 1fr);
grid-template-areas: "a b c";
align-items: center;
justify-items: center;


`

// export const MobileSectionWrapper = styled.section`
// display:grid;
// width: 100%;
// height: 100vh;
// grid-template-columns: 1fr;
// grid-template-rows: 10% 60% 30%;
// grid-template-areas: "a" "b" "c";
// `

export const MobileSectionWrapper = styled.section({
    display: "grid",
    width: "100%",
    height: "100vh",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "10% 60% 30%",
    gridTemplateAreas: "'a' 'b' 'c'",
}, props => ({backgroundColor: props.bg}))

const div1 = styled(motion.div)`
width: 100%;
height: 100%;
grid-area: b;
align-self: start;
justify-self: center;
background-repeat: no-repeat;
background-size: contain;
display: flex;
flex-flow: column nowrap;

justify-content: center;
@media (max-width: 450px){
    justify-content: flex-start;
}`

export const PhotoDiv = styled(div1)({}, props => ({backgroundImage: props.img, backgroundPosition: props.pos, alignItems: props.align}))

export const div2 = styled(motion.div)`
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
padding-right: 10px;
padding-left: 10px;
@media (min-width: 450px){
    padding-right: 100px;
    padding-left: 100px;
}`

export const PhotoInfoWrapper = styled(div2)({

}, props => ({alignItems: props.align}))

export const div3 = styled.div`
width: 90%;
height: 60%;
margin: auto;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-evenly;
grid-area: c;`

export const InfoDivSm = styled(motion.div)({
    width: "90%",
    height: "60%",
    margin: "auto 10px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    gridArea: "c",
}, props => ({alignItems: props.align}))




