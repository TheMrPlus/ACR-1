import React from 'react'
import Section from '../components/Section'
import {homePageData} from '../utils/data'

const HomePage = () => {

    return (
        <>
            {homePageData.map((el, i) => <Section key={i} data={el}></Section>)}
        </>
    )
}

export default HomePage
