import logo from '../assets/logo.svg';
import button from '../assets/button.svg';
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa'
import ConnectionContext from '../context/connection/context';

const Navbar = (props) => {
    const history = useHistory()
    const [showMenuResponsive, setShowMenuResponsive] = useState(false);
    const { account, setAccount } = useContext(ConnectionContext);

    const dispatchAccount = () => {
        setAccount(props.account)
    }

    useEffect(() => {
        if (!props.account) return
        dispatchAccount()
    }, [props.account])

    return (
        <div>
            <NavContainer>
                <ContentLogo>
                    <LogoImage onClick={() => history.push('/')} src={logo} />

                </ContentLogo>
                <ContentButton>
                    <ConnectButton onClick={props.connect}>
                        {props.account !== '' &&
                            `${props.account.slice(0, 10)}...${props.account.slice(
                                props.account.length - 8,
                                props.account.length
                            )}`
                        }
                        {props.account === '' &&
                            `Connect MetaMask`
                        }
                    </ConnectButton>
                    <FaBars onClick={() => setShowMenuResponsive(!showMenuResponsive)} className='bars' />
                </ContentButton>
            </NavContainer>
            {showMenuResponsive &&
                <ContentMenuResponsive>
                    <NavLink><Link to="/" style={{ textDecoration: 'none', color: "#FFC236" }}><FaHome /></Link></NavLink>
                    <NavLink><Link to="/genesis" style={{ textDecoration: 'none', color: "#FFC236" }}>GENESIS</Link></NavLink>
                    <NavLink><Link to="/roadmap" style={{ textDecoration: 'none', color: "#FFC236" }}>ROADMAP</Link></NavLink>
                   
                    <NavLink><Link to="/faq" style={{ textDecoration: 'none', color: "#FFC236" }}>FAQ</Link></NavLink>
                </ContentMenuResponsive>
            }
            <BottomNavContainer>
                <NavLink><Link to="/" style={{ textDecoration: 'none', color: "#FFC236" }}><FaHome /></Link></NavLink>
                <NavLink><Link to="/genesis" style={{ textDecoration: 'none', color: "#FFC236" }}>GENESIS</Link></NavLink>
                <NavLink><Link to="/roadmap" style={{ textDecoration: 'none', color: "#FFC236" }}>ROADMAP</Link></NavLink>
             
                <NavLink><Link to="/faq" style={{ textDecoration: 'none', color: "#FFC236" }}>FAQ</Link></NavLink>
            </BottomNavContainer>

        </div>
    )
}

const BottomNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    background: #000;
    padding: 10px 0px 10px 0px;

    @media (max-width: 1178px){
        display: none;
    }
`

const NavLink = styled.div`
    margin-right: 100px;
    font: normal normal normal 31px/37px Kerox-NonCommercial;
    letter-spacing: 0px;

    @media (max-width: 1178px){
        margin-right: 10px;
        text-align: right;
    }
`

const NavContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;  
    padding-top: 40px;  

    @media (max-width: 1178px){
        flex-direction: column;
    height: 100%;
    }

    @media (max-width: 478px){
        padding: 0px 10px 0px 10px;

    }
`

const ContentLogo = styled.div`
    width: 70%;

    @media (max-width: 1178px){
        width: 100%;
    }
`;

const LogoImage = styled.img`
    width: 60%;
    display: flex;
    margin: auto;
    cursor: pointer;
    justify-content: center;

    @media (max-width: 1178px){
        width: 100%;
    }
`

const ContentButton = styled.div`
    width: 30%;
    .bars{
        display: none;
    }

    @media (max-width: 1178px){
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;

        .bars{
            display: block;
            color: #FED144;
            font-size: 40px;
            margin-top: 15px;
            margin-left: 10px;
        }
    }

`;

const ConnectButton = styled.button`
    width: 280px;
    height: 80px;
    cursor: pointer;
    background: transparent;
    background-image: url(${button});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    font-weight: bold;
`

const ContentMenuResponsive = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 20px;
`;


export default Navbar;