import React, { CSSProperties } from "react";

interface Props {
    fruitText: string; 
    fruitImg: string; 
}
 
function SectionItem (props: Props) {

    const imgFlex: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '30%',
        width: '100%',
        position: 'relative'
    }

    const textSectionItem: CSSProperties = {
        position: 'absolute',
        color: '#2E8B57',
        fontSize: 'min(11vw, 376px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '-20%',
        translate: 'translate(50%, -50%)'
    }    

    const imgSectionItem: CSSProperties = {
        width: '100%',
        margin: '1em 0',
        height: '26vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${props.fruitImg})`
    }

    return (
        <div style={imgFlex}>
            <p style={textSectionItem}>{props.fruitText}</p>
            <div style={imgSectionItem}></div>
        </div>
    )
}

export default SectionItem