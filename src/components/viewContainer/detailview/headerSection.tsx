import React, { CSSProperties } from 'react';

interface Props {
    view: string
    openModal: () => void;
}

export default function HeaderSection(props: Props) {
    return (
        <div style={headerSegment}>
            <h2 style={header}>{props.view.toUpperCase()}</h2>
            <button onClick={props.openModal}>Open Modal</button>
        </div>
    )
}

const headerSegment: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}


const header: CSSProperties = {
    color: 'orange',
    textShadow: '0px 0px 5px black'
}