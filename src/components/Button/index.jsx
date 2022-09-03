import styled from 'styled-components'


function Button({children, className,...props}){
    return (
        <button {...props} className={className}>
            {children}
        </button>
    )
}
const StyledButton = styled(Button)`
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
`

export {StyledButton as Button}