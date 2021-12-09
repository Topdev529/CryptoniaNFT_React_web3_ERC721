import styled from 'styled-components';
import button from '../assets/button.svg';

export const SocialMediaGroup = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 140px;
    margin-bottom: 88px;
`
export const TwitterImage = styled.div`
    width: 226px;
    height: 200px;
    background: transparent url(${props => props.src}) 0% 0% no-repeat padding-box;
`
export const DiscordImage = styled.div`
    width: 247px;
    height: 200px;
    background: transparent url(${props => props.src}) 0% 0% no-repeat padding-box;
`

export const GenesisLabel = styled.div`
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    color: #000000;
    margin-top: 240px;
    margin-inline: auto;
    text-align: center;
    background: ${props => props.transparent && 'none !important'};
`

export const TextBox = styled.input`
    width: 300px;
    height: 50px;
    border: 2px solid #FED144;
    border-radius: 57px;
    margin-left: 45px;
    outline: none;
    @media (max-width: 768px){
        width: 90%;
        margin: auto;
    }
`
export const BuyLabel = styled.div`
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    color: #000000;
`
export const BuySection = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    place-items: center;
    margin-left: -40px;
`

export const LimitedLabel = styled.div`
    margin-top: 30px;    
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    text-align: center;
    color: #FED144;
`

export const ClaimLabel = styled.div`
    font: normal normal normal 22px/22px Kerox-NonCommercial;   
`
export const ClaimButton = styled.div`
    background: #FED144 0% 0% no-repeat padding-box;
    border-radius: 57px;
    display: flex;
    justify-content: center;
    width: 300px;
    place-items: center;
    height: 50px;
    margin-inline: auto;
    margin-top: 75px;
    cursor: pointer;
    transition: .3s ease-in-out all;

    :hover{
        background: #D1A724 0% 0% no-repeat padding-box;
        transition: .3s ease-in-out all;

    }

    @media (max-width: 768px){
        width: 90%;
        margin: auto;
        margin-top: 50px;
    }
`
export const ConnectButton = styled.button`
    width: 280px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    cursor: pointer;
    background: transparent;
    background-image: url(${button});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    font-weight: bold;
    font-size: 25px;
    margin-top: 50px;
`

export const Header = styled.div`
    margin-top: 50px;
    text-align: center;
    font: normal normal normal 80px/80px Kerox-NonCommercial;
    color: #FED144;

    @media (max-width: 768px){
        font: normal normal normal 35px/35px Kerox-NonCommercial;

    }
`
export const SubHeader = styled.div`
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    text-align: center;
    color: #FED144;
    margin-inline: auto;
    margin-top: 50px;
`

export const ContentCats = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    img{
        width: 100%;
    }
`;

export const Cat = styled.img`
    width: ${props => props.width ? props.width : '250px'};
    margin: auto;
    object-fit: cover;

    @media (max-width: 678px){
        width: ${props => props.widthR ? props.widthR : '100%'};
    }
`;

export const Error = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    color: #fff;
    background: #EC5555;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 978px){
        width: 90%;
    }
`;