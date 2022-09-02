import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.type === 'primary'? '#22C27F' : 'transparent'};
    border: ${props => props.type === 'primary'? 'none' : '2px solid white'};
    width: 90%;
    max-width: 220px;
    height: 70px;
    border-radius:8px;
    z-index: 2;

    color: white;
    text-transform: uppercase;
    font-family: Poppins;
    font-weight: bold;
    font-size: 18px;
    cursor:pointer;

    @media(max-width: 600px){
        font-size: 16px;
        padding: 4px 16px;
    }
    @media(max-width: 350px){
        font-size: 12px;
    }
`

export function Button({children, onClick, type="primary", ...props}){
    return (
        <StyledButton type={type} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    )
}