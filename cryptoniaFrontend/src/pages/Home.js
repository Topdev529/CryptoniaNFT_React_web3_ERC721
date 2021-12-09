import React, { useContext } from 'react';
import presentation from '../assets/presentation.svg';
import catgroup from '../assets/catgroup.svg';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import {
    AboutLabel,
    CatGroupImage,
    CatShowImage,
    Column,
    HomeContainer,
    HowContainer,
    Image,
    SocialMediaGroup,
    UnderLabel,
    ContainerButtons,
    ConnectButton
} from '../styles/Home.styles'
import ConnectionContext from '../context/connection/context';
import iconscats from '../assets/iconcats.svg'
import { TextBox } from '../styles/Genesis.styles';

const Home = (props) => {
    const { redirectTwitter, redirectDiscord } = useContext(ConnectionContext);
  
    return (
        <HomeContainer>
            <CatShowImage src={presentation} />

            <UnderLabel style={{ textAlign: 'center', fontSize: '35px', lineHeight: '35px' }}>Purchase your interactive Cryptonia Kittens for 0.05 eth</UnderLabel>

            <UnderLabel style={{ marginTop: '50px' }}>
                Cryptonia Kittens is a collection of 10,000 generative NFTs and 50 Genesis-exclusive interactive NFTs that are created programmatically.
                You can interact with your Cryptonia Kitten.
                The development of this collection needed the participation of the founders and engineers over a period of many months to be able to provide this interactive NFT to the whole NFT-loving community.
            </UnderLabel>

            <AboutLabel>
                <b>Genesis Cryptonia Kitten</b>
            </AboutLabel>

            <UnderLabel style={{ marginTop: '30px' }}>
                There are just 50 Cryptonia Kittens available in the Genesis universe.
                The customer who purchased a “Genesis Cryptonia Kitten will receive a random kitten in
                exchange for their payment.
            </UnderLabel>

            <AboutLabel>
                <b>Generative Cryptonia Kitten</b>
            </AboutLabel>

            <UnderLabel style={{ marginTop: '30px' }}>
                There will be several accessories available for the Generative Cryptonia Kitten, such as spectacles, hats, helmets, caps, bows, crowns, wigs, masks, eagle wings, and so on, to alter its
                look.
            </UnderLabel>

            <AboutLabel>
                A random kitten will be given to the buyer who paid for a Generative Cryptonia Kitten.
            </AboutLabel>



            <ContainerButtons style={{ marginTop: '100px' }}>
                <TextBox transparent type='number' min={1} max={100} value={props.normalNumber} onChange={e => props.setNormalNumber(e.target.value)}/>

                <ConnectButton onClick={props.normalMint}>
                    CLAIM
                </ConnectButton>
            </ContainerButtons>
            <HowContainer style={{ marginTop: '100px' }}>
                <Column width='100%'>
                    <CatGroupImage src={catgroup} />
                    <UnderLabel width='100%' style={{ fontSize: '35px', marginTop: '30px' }}>
                        How does it work?
                    </UnderLabel>
                    <UnderLabel width='100%'>
                        With your <b>Cryptonia Kitten</b> you may engage and play with her.
                        Simply drag the mouse over the screen, and make it move its head to look around.
                        Take pleasure in making it bounce, lift its paws, and wag its tail.
                    </UnderLabel>
                    <UnderLabel width='100%' style={{ marginTop: '50px' }}>
                        <img src={iconscats} alt=""/> Move the mouse over the head or
                        any other location outside of the Cryptonia Kitten to cause it to move its eyes and
                        head in the direction of the mouse cursor.
                    </UnderLabel>

                    <UnderLabel width='100%'>
                        <img src={iconscats} alt=""/> To make the Cryptonia Kitten bounce, simply click on its body three times in a row.
                    </UnderLabel>

                    <UnderLabel width='100%'>
                        <img src={iconscats} alt=""/> Select one of the Cryptonia Kittens paws and it will lick the paw you selected. This interaction operates on both paws at the same time.
                    </UnderLabel>

                    <UnderLabel width='100%'>
                        <img src={iconscats} alt=""/>
                        To get the Cryptonia Kitten to wag its tail, click on the tail of the kitten. The interactions are completely independent of one another, and you can complete more than one at a time.
                    </UnderLabel>
                    <SocialMediaGroup>
                        <Image onClick={redirectTwitter} src={twitter} />
                        <Image onClick={redirectDiscord} src={discord} />
                    </SocialMediaGroup>
                </Column>
                
            </HowContainer>

        </HomeContainer>
    )
}


export default Home;