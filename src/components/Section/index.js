import React from 'react';
import useWindowDimensions from '../../utils/WindowDimensions';
import RegularSection from './RegularSection';
import MobileSection from './MobileSection';

const Section = ({data}) => {

    const {width} = useWindowDimensions();

    return (
        width > 900 ? (
            <RegularSection data={data} />
        ) : (
            <MobileSection data={data} />
        )

    )
}

export default Section
