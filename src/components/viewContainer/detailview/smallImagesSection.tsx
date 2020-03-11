import React, { CSSProperties } from 'react';

interface Props{
}

export default function SmallImagesSection(props:Props){
    return (
        <div style={SmallImagesContainer}>
            <div style={SmallImagesStyle}></div>
            <div style={SmallImagesStyle}></div>
            <div style={SmallImagesStyle}></div>
        </div>
    )
}

const SmallImagesContainer: CSSProperties={
    display: 'flex',
    width:'100%',
    justifyContent: 'space-around',
    marginBottom:'1em'
}

const SmallImagesStyle: CSSProperties={
    width: '30%',
    height: '10em',
    backgroundColor: 'white',
}