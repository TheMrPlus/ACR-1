import React from 'react'
import useWindowDimensions from '../../utils/WindowDimensions';
import {ProductDiv, ProductPicture, ProductDesc, H4, H5, H6, SpecDiv} from './Components'

const ProductComponent = ({data: {price, photoUrl, gen, color, productName}}) => {
    const {width} = useWindowDimensions()



    return (
        <ProductDiv>
            <ProductPicture url={photoUrl}></ProductPicture>
            <ProductDesc>
                <H4>{productName}</H4>
                <H5>{price}</H5>
                 {width > 550 && <SpecDiv>
                    <H6>{gen}</H6>
                    <H6>{color}</H6>
                </SpecDiv>}
            </ProductDesc>
        </ProductDiv>
    )
}

export default ProductComponent
