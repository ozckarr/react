import React, { CSSProperties } from "react";


export default function Navbar () {
    return(
            <header >
                <h1 style={title}>REACT PLAYGROUND</h1>
            </header>
    )

}

const title: CSSProperties = {
    color: '#043927',
    paddingLeft: '1em',
    fontSize: '3vh'
}