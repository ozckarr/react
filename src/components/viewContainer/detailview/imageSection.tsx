import React from 'react';
import { fullscreenAbsolute, fullScreen, centeredContent } from '../../../css';

interface Props{
    imageSrc: string
}

export default function ImageSection(props:Props){
    return (
        <img src={props.imageSrc} style={{ ...fullscreenAbsolute }}/>
    )
}