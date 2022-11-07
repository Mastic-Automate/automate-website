import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 550px;
    height: 100%;
    max-height: 800px;
    background-color:rgba(31, 35, 53, .8);
    border-radius: 16px;
    border: 1px solid #263238;
    box-sizing:border-box;
    backdrop-filter: blur(10px);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

`

export function PixCard({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}