import styled from 'styled-components';

export const SubHeader = styled.div`
    width: 90%;
    margin: auto;
    color: #FED144;
    margin-inline: auto;
    margin-top: 102px;
`

export const Header = styled.div`
    width: 90%;
    margin: auto;
    font: normal normal normal 80px/80px Kerox-NonCommercial;
    color: #FED144;
    text-align: center;
    margin-top: 88px;
`

export const Text = styled.p`
    font: ${props => props.fz ? `normal normal normal ${props.fz}/${props.fz} Kerox-NonCommercial`: 'normal normal normal 22px/22px Kerox-NonCommercial'};
    color: #FED144;
`;

export const ContainerStep = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    margin-top: 60px;

    @media (max-width: 978px){
        flex-direction: ${props => props.direction ? props.direction : 'column'};
    }
`;

export const Col = styled.div`
    width: ${props => props.width ? props.width : '100%'};

    @media (max-width: 978px){
        width: 100%;
        margin: auto;
    }
`;

export const ImageCat = styled.img`
    width: 300px;
    margin: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 768px){
        width: 200px;
    }
`;