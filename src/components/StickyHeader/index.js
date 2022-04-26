import React, { useEffect, useState } from 'react'
import Header from '../Header'

export default function StickyHeader({logo, links, backgroundcolor}) {
    const [classname, setClassname] = useState('unactivated')

    const toggleStickyHeader = () => {
        if (window.scrollY < (window.innerHeight - (window.innerHeight * 0.1)) ) {
            setClassname('unactivated')
        } else {
            setClassname('actived')
        }
    }

    useEffect(() => {
        toggleStickyHeader()
    }, [])

    window.addEventListener('scroll', toggleStickyHeader)

    return (
        <Header id={classname} logo={logo} links={links} backgroundcolor={backgroundcolor} navColor={'black'} /> 
    )
}