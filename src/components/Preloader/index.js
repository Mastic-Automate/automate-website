import React, { useState } from 'react'
import {theme} from '../../global/theme/index.js'
import styled, { keyframes } from 'styled-components'

const PreloaderDiv = styled.div`
    overflow: hidden;
    background-image: linear-gradient(145deg, ${theme.COLORS.SECONDARY_COLOR} 0%, ${theme.COLORS.BLUE_900} 100%);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9999;
    color: #fff;
`

const jumperDivs = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    } 5% {
        opacity: 1;
    } 100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
`

const Jumper = styled.div`
    display: block;
    margin: auto;
    width: 150px;
    height: 150px;
`

const JumperDiv = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 150px;
    border-radius: 100%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    -webkit-animation: ${jumperDivs} 2s 0s linear infinite;
    animation: ${jumperDivs} 2s 0s linear infinite;
`
const JumperDiv2 = styled(JumperDiv)`
    -webkit-animation-delay: 0.33333s;
    animation-delay: 0.33333s;
`
const JumperDiv3 = styled(JumperDiv)`
    -webkit-animation-delay: 0.66666s;
    animation-delay: 0.66666s;
`

const fadeOut = keyframes`
    0% {
        display: flex;
        position: fixed;
        height: 100%;
        width: 100%; 
        opacity: 1;

    } 50% {
        display: flex;
        position: fixed;
        height: 100%;
        width: 100%; 
        opacity: 0.7;

    } 70% {
        display: flex;
        position: fixed;
        height: 100%;
        width: 100%; 
        opacity: 0.3;    

    } 90% {
        display: flex;
        position: fixed;
        height: 100%;
        width: 100%; 
        opacity: 0;

    } 100% {
        display: none;
        height: 0;
        width: 0;                 
        opacity: 0;
    }
`

const PreloaderDivFadeOut = styled(PreloaderDiv)`
    -webkit-animation: ${fadeOut} 1.5s 0s linear forwards;
    animation: ${fadeOut} 1.5s 0s linear forwards;
`

export default function Preloader() {
    let [loaded, setLoaded] = useState(false)
    let [jumper, setJumper] = useState(true)

    const None = () => {
        return (
            <>
            </>
        )
    }

    const JumpersDiv = () => {
        return  (
            <Jumper className='jumper'>
                <JumperDiv className='one'></JumperDiv>
                <JumperDiv2 className='two'></JumperDiv2>
                <JumperDiv3 className='three'></JumperDiv3>
            </Jumper>
        )
    }

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {setLoaded(true)}, 2000)
        setTimeout(() => {
            setJumper(false)
        }, 3500)
      
    })

    const Preloader = !loaded ? PreloaderDiv : PreloaderDivFadeOut
    const ShowJumper = jumper ? JumpersDiv : None

    return (
        <Preloader className='preloader'>
            <ShowJumper />
        </Preloader>
    )       
}