import React, { CSSProperties } from "react";

export default function SectionItem () {
    return (
        <div>
            <p style={textSectionItem}>BANANA</p>
            <div style={imgSectionItem}></div>
        </div>
    )

}

const imgSectionItem: CSSProperties = {
    width: '100%',
    margin: '1em 0',
    height: '28vh',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://source.unsplash.com/collection/9538188/1600x900")'
}

const textSectionItem: CSSProperties = {
    position: 'absolute',
    color: '#2E8B57',
    fontSize: '13vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

