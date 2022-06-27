import React from "react";
import { Link } from "../styles";

export default function RenderLinks({links, click}) {

    var linksElements = links.map(({link, linkName}) => {
        return (
            <li key={link.toString()} className={`${link.toString()}`} onClick={click} >
                <Link href={link.toString()}>{linkName.toString()}</Link>
            </li>
        )
    });

    return (
            <ul>
                {linksElements}
            </ul>
        )
};