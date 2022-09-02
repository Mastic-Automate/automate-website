import styled from 'styled-components'

import {Star} from 'phosphor-react'

const Container = styled.div`
    max-width: 470px;
    width: 100%;
    height: 330px;
    flex-shrink: 1;
    border-radius: 16px;
    border: 1px solid #263238;
    background-color: #1F2335;
    opacity: .8;
    backdrop-filter: blur(10px);
    padding-top: 34px;
    padding-bottom: 34px;
    padding-left: 20px;
    padding-right: 20px;
    display:flex;
    flex-flow: column nowrap;

    p {
        font-size: 24px;
        color: white;
    }
`
const Stars = styled.div`
    width: 100%;
    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`
const BottomSection = styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 30px;
    margin-top: auto;

    span{
        font-size: 24px;
        color: #676767;
    }
`
const ProfilePicture = styled.img`
    width: 75px;
    height: 75px;
`
export function CommentCard({text, name="Usuário anônimo", profile="/img/default_profile.png"}){
    return (
        <Container>
            <Stars>
                <Star size={30} color="#22C27F" weight='fill' />
                <Star size={30} color="#22C27F" weight='fill' />
                <Star size={30} color="#22C27F" weight='fill' />
                <Star size={30} color="#22C27F" weight='fill' />
                <Star size={30} color="#22C27F" weight='fill' />
            </Stars>
            <p>
                {text}
            </p>
            <BottomSection>
                <ProfilePicture 
                    src={profile}
                />
                <span>{name}</span>
            </BottomSection>
        </Container>
    )
}