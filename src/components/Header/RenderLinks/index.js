import React from "react"

export default function RenderLinks(links, linksNames) {
    links = []
    if (links.length === linksNames.length) {
        var count = -1
        var linksElements = links.maps((link) => {
            count = count + 1
            return (
                <li>
                    <a href={link}>{linksNames}</a>
                </li>
            )
    })
    } else {
        throw new Error("links length and link's names llength must be equal")
    }

    return (
            <ul>
                {linksElements}
            </ul>
        )
};