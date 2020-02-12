import React, { CSSProperties } from "react";


export default function Navbar () {
    return(
            <header >
                <h1 style={title}>React Playground</h1>
            </header>
    )

}

const title: CSSProperties = {
    color: 'white',
    padding: '1em',
    fontSize: '1em'
}