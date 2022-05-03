import React from "react"

export default function RenderLinks({links, click}) {

    var linksElements = links.map(({link, linkName}) => {
        return (
            <li key={link.toString()} className={`${link.toString()}`} onClick={click} >
                <a href={link.toString()}>{linkName.toString()}</a>
            </li>
        )
    });

    return (
            <ul>
                {linksElements}
            </ul>
        )
};