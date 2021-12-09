import styled from 'styled-components';


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

export const ProgressContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 70px;

    @media (max-width: 978px){
        flex-direction: column;
        text-align: center;
    }
`
export const ContentProgressImage = styled.div`
    width: 20%;
    height: 150px;

    @media (max-width: 678px){
        width: 200px;
        margin: auto;
    }
`;

export const ProgressImage = styled.img`
    width: 150px;
`
export const ProgressLabel = styled.div`
    width: ${props => props.width ? props.width : '80%'};
    font: normal normal normal 25px/25px Kerox-NonCommercial;
    color: #FED144;
    margin-left: ${props => props.left ? props.left : '0px'};

    img{
        width: 50px;
    }

    @media (max-width: 678px){
        width: 90%;
        margin: auto;
        margin-left: 0px;
    }
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
        width: ${props => props.width ? props.width : '100px'};
    }

    @media (max-width: 678px){
        img{
            padding: 20px;
        }
    }
`;

export const SenLabel = styled.div`
    font: normal normal normal 25px/25px Kerox-NonCommercial;
    color: #FED144;
    margin-inline: auto;
    margin-top: 137px;
`

export const TextBox = styled.input`
    border-radius: 57px;
    border: 2px solid #FED144;
    width: 300px;
    margin-left: 60px;
    height: 50px;
    outline: none;
`
export const SearchLabel = styled.div`
    font: normal normal normal 25px/25px Kerox-NonCommercial;
    text-align: center;
    color: #FED144;
`
export const SearchGroup = styled.div`
    width: 90%;
    margin: auto;
    place-items: center;
    margin-top: 80px;
    display: flex;
    justify-content: center;
`

export const Sublabel = styled.div`
    width: 90%;
    text-align: center;
    font: normal normal normal 25px/25px Kerox-NonCommercial;
    margin-top: 20px;
    margin-inline: auto;
    margin: auto;
    color: #FED144;
`
export const Header = styled.div`
    font: normal normal normal 80px/80px Kerox-NonCommercial;
    color: #FED144;
    text-align: center;
    margin-top: 88px;

    @media (max-width: 500px){
        font: normal normal normal 70px/70px Kerox-NonCommercial;
    }
`
