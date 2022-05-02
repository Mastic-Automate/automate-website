import React from "react"

export default function RenderLinks({links}) {
    var linksElements = links.map(({link, linkName}) => {
        return (
            <li key={link.toString()} className={link.toString()} >
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