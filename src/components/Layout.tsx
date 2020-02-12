import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout () {
    return(
        <div style={background}>
            <Navbar/>
            <Content/>
        </div>
    )

}

const background: CSSProperties = {
    backgroundColor: 'black',
    height: '100%',
    fontFamily: "'Roboto', sans-serif"

}