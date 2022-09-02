import styled from 'styled-components'

export const GradientOverlay = styled.div`
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1),  rgba(0, 0, 0, 0.5));
    width: 100%;
    height: 100%;
    position: absolute;
    z-index:1;
    opacity: 25%;
`