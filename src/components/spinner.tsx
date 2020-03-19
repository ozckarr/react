import React from 'react';
import { PropagateLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';

interface Props {
    size?: number
}

export default function(props: Props) {
    const defaultSize = 6;
    const size = props.size ? (props.size * defaultSize) : defaultSize

    return (
        <div style={{ ...centeredContent, ...fullScreen}}>
            <PropagateLoader color="white" size={size} sizeUnit="px"/>
        </div>
    );
}