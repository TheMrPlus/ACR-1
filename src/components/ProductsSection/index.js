import React from 'react'
import ProductComponent from './ProductComponent';
import useWindowDimensions from '../../utils/WindowDimensions'
import {Line, H1, PhotoDiv, ProductsWrapper, SectionWrapper} from './Components';


const ProductSection = ({data: {products, collectionName, collectionImg}}) => {

    const {width} = useWindowDimensions()
    
    const divisor = width > 900 ? 4 : width > 550 ? 3 : 2;

    return (
        <SectionWrapper>
            <Line/>
            <H1>{collectionName}</H1>
            <PhotoDiv url={collectionImg}></PhotoDiv>
            <Line/>
            <ProductsWrapper columns={Math.ceil(products.length/(divisor))}>
                {products.map((el, i)=> <ProductComponent key={i} data={el}/> )}
            </ProductsWrapper>
        </SectionWrapper>
    )
}

export default ProductSection
