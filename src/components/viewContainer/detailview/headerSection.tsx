import React,{CSSProperties} from 'react'

interface Props{
    whereAreWe: string
}

export default function HeaderSection(props:Props){

    return (
        <p style={styleHeader}>{"Welcome to the " + props.whereAreWe}</p>
    )
}

const styleHeader : CSSProperties = {
    color: 'white',
    marginLeft: '1em' 
}