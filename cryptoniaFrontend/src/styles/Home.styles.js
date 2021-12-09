import styled from 'styled-components';
import button from '../assets/button.svg'


export const MuscleStand = styled.div`
    background-image: url('./assets/background.png');
    background-repeat: no-repeat;
  background-size: contain;
    width: 800px;
    height: 82px;
    border-radius: 50px 0px 0px 0px;
    position: absolute;
    margin-top: 1935px;
`
export const MuscleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: -150px;

`
export const MuscleCat = styled.img`
    width: 70%;
    background-image: url(${props => props.src}) 0% 0% no-repeat padding-box;
    object-fit: cover;

    @media (max-width: 978px){
        width: 300px;
        margin-top: 200px;
    }
`

export const SocialMediaGroup = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: row;
    margin-top: 140px;
    margin-bottom: 88px;
`
export const Image = styled.img`
    width: 120px;
    cursor: pointer;
    margin: auto;
`

export const HowLabel = styled.div`
    margin-top: -50px;
    width: 100%;
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    color: #000000;

    @media (max-width: 978px){
        margin-top: 50px;
    }
`
export const CatGroupImage = styled.img`
    width: 80%;
    background-image: url(${props => props.src}) 0% 0% no-repeat padding-box;
`
export const HowContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 978px){
        flex-direction: column-reverse;
    }
`

export const Column = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media (max-width: 978px){
        width: 100%;
        margin: auto;
    }
`;

export const GoContainer = styled.div`
    margin-top: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BuyMultipleBtn = styled.div`
    font: normal normal normal 42px/50px Kerox-NonCommercial;
    color: #000000;
`
export const Gobutton = styled.div`
    margin-left: 333px; 
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Gobox = styled.div`
    width: 175px;
    height: 88px;
    background: #FED144 0% 0% no-repeat padding-box;
    border: 6px solid #000000;
    border-radius: 40px 40px 0px 0px;
`
export const GoLabel = styled.div`
    margin-left: 75px;
    font: normal normal normal 82px/98px Kerox-NonCommercial;
    color: #000000;
`

export const BuyButton = styled.div`
    z-index: 999;
    position: relative;
    cursor: pointer;
    margin-top: 180px;
    background: #FED144 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000099;
    border-radius: 57px;
    width: 300px;
    height: 50px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
`
export const BuyLabel = styled.div`
    font: normal normal normal 25px/78px Kerox-NonCommercial;
    color: #FED144;
    align-self: center;
`

export const UnderLabel = styled.div`
    margin-top: 15px;
    font: normal normal normal 23px/23px Kerox-NonCommercial;
    width: ${props => props.width ? props.width : '90%'};
    margin-inline: auto;
    color: #FED144;

    img{
        width: 50px;
    }
`

export const AboutLabel = styled.div`
    margin-top: 15px;
    font: normal normal normal 22px/22px Kerox-NonCommercial;
    width: 90%;
    margin-inline: auto;
    margin-top: 50px;
    color: #FED144;
`


export const HomeContainer = styled.div`
    margin-top: 40px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const LogoImage = styled.img`
    width: 400px;

    @media (max-width: 471px){
        width: 90%;
        margin: auto;
    }
`

export const CatShowImage = styled.img`
    width: 100%;
    margin: auto;
    object-fit: cover;
`

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media (max-width: 868px){
        flex-direction: column;
        margin-top: 20px;
    }
`;

export const ConnectButton = styled.button`
    width: 280px;
    height: 80px;
    cursor: pointer;
    background: transparent;
    background-image: url(${button});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    font-weight: bold;
    margin-left: 20px;
    font-size: 25px;

    @media (max-width: 868px){
        width: 300px;
        margin-top: 20px;
        margin-left: 10px;
    }
`