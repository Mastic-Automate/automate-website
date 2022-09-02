import styled from "styled-components";

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

export const ProductSectionWrapper = styled.section`
    width: 100%;
    min-height: 550px;
    padding: 0 5rem;
    background: #161722;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    ${media.tablet} {
        & {
            flex-direction: column-reverse;
        } 
    }
`;

    export const FlexCol = styled.div`
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: calc(50% - 5rem);
        min-height: 100%;
        display: flex;

        & .primary-title {
            width: 100%;

            font-size: 5rem;
            text-transform: uppercase;
            text-align: left;
            
            color: #fff;
        }

        & .primary-text {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 3rem;
            line-height: 38px;
            text-align: left;

            color: #C1C1C1;
        }

        & .primary-btn {
            align-self: flex-start;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 60px;
            gap: 10px;

            background: #1EEC58;
            border-radius: 10px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;

            color: #FFFFFF;
        }

            & .primary-btn:hover {
                opacity: .8;
            }

        & .primary-btn a { 
            position: relative;
            color: #fff;

            &:hover {
                &::before{
                    width: 0;
                }
            }

        }

        & img {
            width: 400px;
            height: 400px;
            margin-bottom: -250px;
        }

        ${media.tablet} {
            & {
                width: 100%;
                min-height: 400px;    
                margin: 3rem 0;
            }

            & img {
                margin: 0;
            }
        }
    `;