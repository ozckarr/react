import React, { CSSProperties } from "react";
import SectionItem from "./SectionItem";

function Content () {

    return(
        <div>
            <SectionItem fruitText="BANANAS" fruitImg="https://source.unsplash.com/collection/9538166/1600x900"/>
            <SectionItem fruitText="ORANGES" fruitImg="https://source.unsplash.com/collection/9538171/1600x900"/>
            <SectionItem fruitText="MELONAS" fruitImg="https://source.unsplash.com/collection/9538188/1600x900"/>
        </div>
    )
}

export default Content
