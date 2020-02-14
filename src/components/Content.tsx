import React, { CSSProperties } from "react";
import SectionItem from "./SectionItem";

export default function Content () {
    return(
        <div>
            <SectionItem />
            <SectionItem/>
            <SectionItem/>
        </div>
    )

}



const fruitsData = [
    {
        id: 1,
        fruitText: "BANANAS",
        fruitImg: "https://source.unsplash.com/collection/9538166/1600x900"
    },
    {
        id: 2,
        fruitText: "ORANGES",
        fruitImg: "https://source.unsplash.com/collection/9538171/1600x900"
    },
    {
        id: 3,
        fruitText: "MELONAS",
        fruitImg: "https://source.unsplash.com/collection/9538188/1600x900"
    }
]

