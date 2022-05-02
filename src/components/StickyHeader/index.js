import React, { useEffect, useState } from 'react'
import Header from '../Header'

export default function StickyHeader({logo, links, resizeWidth}) {
    const [id, setId] = useState('unactivated')

    const toggleStickyHeader = () => {
        if (window.scrollY < (window.innerHeight - (window.innerHeight * 0.1)) ) {
            setId('unactivated')
        } else {
            setId('actived')
        }
    }

    useEffect(() => {
        toggleStickyHeader()
    }, [])

    window.addEventListener('scroll', toggleStickyHeader)

    return (
        <div style={{minHeight: '10rem'}}>
            <Header id={id} logo={logo} links={links} resizeWidth={resizeWidth}/> 
        </div>
    )
}