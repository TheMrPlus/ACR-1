import styled from '@emotion/styled';
import {motion} from 'framer-motion';

export const SectionWrapper = styled.section`
    width: 85%;
    left:0;
    background-color: #BDBDC7;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }
`

export const Line = styled(motion.div)`
    width: 20%;
    background-color: #FFF;
    height: 2px;
    margin: 50px 0;
    :first-of-type{
            margin: 150px 0 50px 0;
    }
    @media (max-width: 550px){
        :first-of-type{
            margin: 100px 0 50px 0;
        }
        margin: 20px 0;
    }
    
`

export const H1 = styled(motion.h1)`
    color: #FFF;
    @media (max-width: 550px){
        margin: 0;
    }
`

const div2 = styled.div`
    width: 50%;
    height: 40vh;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    margin: 3em 0;
    @media (max-width: 900px){
        width: 80%;
        height: 30vh;
    }
`
export const PhotoDiv = styled(div2)({

}, props => ({backgroundImage: `url('${props.url}')`}))

const div3 = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 5em 0;
    grid-gap: 2em;
    align-items: center;
    justify-items: center;
    @media (max-width: 550px){
        grid-template-columns: repeat(2, 1fr);

        grid-gap: 4em 1.5em;
    }
    @media (min-width: 551px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`

export const ProductsWrapper = styled(div3)({

}, props => ({gridTemplateRows: `repeat(${props.columns}, 60vh)`}))


export const ProductDiv = styled(motion.div)`
width: 100%;
height: 95%;
`

const div1 = styled.div`
width: 100%;
height: 75%;
background-position: top;
background-size: cover;
@media (max-width: 550px){
    height: 60%;
    
}
`

export const ProductPicture = styled(div1)({
width: "100%",
top: "0",
backgroundPosition: "top",
backgroundSize: "cover"
}, props => ({backgroundImage: `url('${props.url}')`}))



export const ProductDesc = styled.div`
width: 100%;
height: 25%;
justify-self: center;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: 40% 60%;
grid-template-areas: "a a" "b c";
align-items: center;
justify-items: center;
@media (max-width: 550px){
    height: 40%;
    grid-template-areas: "a a" "b b";
}
`

export const H4 = styled.h4`
font-size: 1em;
color: #FFF;
grid-area: a;
text-align: center;
margin: 0;
`
export const H5 = styled.h5`
font-size: .8em;
color: white;
width: 100%;
text-align: center;
background-color: #1F1D20;
grid-area: b;
margin: 0;
padding: .5em 0;
transition: 1s;
:hover{
    background-color: #FB3640;
}
`

export const SpecDiv = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
`

export const H6 = styled.h6`
color: #fff;
font-size: .8em;
margin: 0;
`