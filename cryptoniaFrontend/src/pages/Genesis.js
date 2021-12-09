import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import React, { useContext } from 'react';
import { BuySection, Header, SocialMediaGroup, SubHeader, TextBox, ConnectButton } from '../styles/Genesis.styles';
import { Image } from '../styles/Home.styles';
import ConnectionContext from '../context/connection/context';
const Genesis = (props) => {
    const { redirectTwitter, redirectDiscord } = useContext(ConnectionContext);
     //number of cats to buy

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <Header>GENESIS</Header>
            <SubHeader>
                You’ll find a mystery kitty waiting for you.
            </SubHeader>

            <SubHeader>
                There are a total of 50 Genesis Cryptonia Kittens in this lot, which is different from the Generative Cryptonia Kittens and will not be found  in the Generative Cryptonia Kitten.
            </SubHeader>

            <SubHeader>
                The number of Genesis Cryptonia Kittens is restricted to 50, with each kitten costing a set price of 0.5 ETH. This includes one-of-a-kind items!
                Be the first to get your hands on them!
            </SubHeader>

            <ConnectButton onClick={props.genesisMint}>
                CLAIM
            </ConnectButton>

            <BuySection>
                <TextBox type='number' min={1} max={5} value={props.genesisNumber} onChange={e => props.setGenesisNumber(e.target.value)} />
            </BuySection>
            {/* {error && <Error>{error}</Error>} */}
{/* 
            <ContentCats>
                <img src={genesis} alt=""/>
            </ContentCats> */}

            <SocialMediaGroup>
                <Image onClick={redirectTwitter} src={twitter} />
                <Image onClick={redirectDiscord} src={discord} />
            </SocialMediaGroup>
        </div>
    )
}

export default Genesis;