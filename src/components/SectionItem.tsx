import React, { CSSProperties } from "react";

export default function SectionItem () {
    return(
        <div>
            <img style={imgSectionItem} src="https://www.opulens.se/wp-content/uploads/2019/12/Banan.png" alt=""/>
        </div>
    )

}

const imgSectionItem: CSSProperties = {
    width: '100%'
}