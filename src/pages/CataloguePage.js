import React from 'react'
import ProductSection from '../components/ProductsSection'
import {collections} from '../utils/data';


const CataloguePage = () => {
    return (
        <>
        {collections.map(el => <ProductSection data={el}></ProductSection>)}
        </>
    )
}

export default CataloguePage
