import React, { useContext } from 'react';
import { Header, Text, ContainerStep, Col } from '../styles/FAQ.styles';
import { Image, SocialMediaGroup } from '../styles/Home.styles'
import ConnectionContext from '../context/connection/context';

import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import faq1 from '../assets/faq1.svg';
import faq2 from '../assets/faq2.svg';
import faq3 from '../assets/faq3.svg';
import { ContentCats } from '../styles/Roadmap.styles';
import { Cat } from '../styles/Genesis.styles';

const FAQ = () => {
    const { redirectTwitter, redirectDiscord } = useContext(ConnectionContext);
    const cats = [
        {
            img: faq1
        },
        {
            img: faq2
        },
        {
            img: faq3
        }
    ]
    return (
        <div>
            <Header>FAQ</Header>

            <ContainerStep direction='column-reverse'>
                <Col>
                    <Text fz='26px'>Why should I buy a <b>Cryptonia Kitten</b>? Why is it unique?</Text>

                    <Text>•	Cryptonia Kittens are limited to 10’000 generative and 50 exclusive Genesis Kittens living on the Ethereum blockchain under the ERC-721 standard.</Text>
                </Col>

            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        How can I buy a <b>Cryptonia Kitten</b>?
                    </Text>

                    <Text>
                        • Download and install a browser extension called MetaMask.
                    </Text>
                    <Text>
                        • this will allow websites to access your Wallet.
                    </Text>
                    <Text>
                        • Create a new account or log into your existing account.
                    </Text>
                    <Text>
                        • Buy or transfer some Ether to the Wallet. You can also buy from MetaMask directly from Coinbase.
                    </Text>
                    <Text>
                        • Once the extension is installed, this website will recognize your MetaMask wallet and add gives you the option to bid on, buy and sell you Cryptonia Kittens.
                    </Text>
                </Col>
            </ContainerStep>

            <ContainerStep direction='column-reverse'>
                <Col>
                    <Text fz='26px'>What the difference between a <b>Genesis Cryptonia Kitten</b> and a Generative Cryptonia Kitten?</Text>

                    <Text>
                        The Genesis Cryptonia Kittens are a series of 50 unique and exclusive Cryptonia Kittens
                    </Text>

                    <Text>
                        The Generative Cryptonia Kittens are a series of 10’000 crypto Kittens that are completely generative.
                    </Text>

                    <Text>Every Cryptonia Kittens is unique and they all have interactions.</Text>
                </Col>

            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        What standard are the <b>Cryptonia Kitten</b>?
                    </Text>


                    <Text>
                        The Cryptonia Kitten are created under the ERC-721 standard on the Ethereum blockchain.
                    </Text>
                </Col>
            </ContainerStep>

            <ContainerStep direction='column-reverse'>
                <Col>
                    <Text fz='26px'>
                        Can I choose a Generative or a Genesis <b>Cryptonia Kitten</b> before buying?
                    </Text>

                    <Text>
                        Both the Genesis and the Generative Cryptonia Kitten are random purchases.
                        Only the Kittens that have already been purchased or resold can be selected on Opensea.
                    </Text>
                </Col>

            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        What is MetaMask?
                    </Text>

                    <Text>
                        MetaMask is a crypto wallet software that supports Ethereum-based tokens. Once the MetaMask plugin is installed, cryptoniakittens.com, will automatically detect the MetaMask wallet and add all the options that will allow you to bid, buy and sell.
                    </Text>
                </Col>
            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        How can I sell my <b>Cryptonia Kitten</b>?
                    </Text>

                    <Text>
                        Once you have bought a Cryptonia Kitten with MetaMask, you can resell it directly or via opensea.
                    </Text>
                </Col>
            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        I have bought a <b>Cryptonia Kitten</b>, now what? What can I do with my <b>Cryptonia Kitten</b>?
                    </Text>

                    <Text>
                        There are many possible applications:
                    </Text>

                    <Text>
                        • You can interact and play with your Kitten.
                    </Text>
                    <Text>
                        • Move the mouse over the head or any area outside the Cryptonia Kitten to make it move its eyes and head according to the direction of the cursor.
                    </Text>
                    <Text>
                        • Click on the Cryptonia Kitten's body three times in a row to make it jump.
                    </Text>
                    <Text>
                        • Click on any of the Cryptonia Kitten's paws to make it lick them. This interaction works on both paws.
                    </Text>
                    <Text>
                        • Click on the tail of the Cryptonia Kitten to make it move.
                    </Text>
                    <Text>
                        • You can create your own brand with your Cryptonia Kittens (t-shirts, mugs, videos...).
                    </Text>

                    <Text>
                        • Hodle, collect or sell your Kitten, it is 100% yours
                    </Text>
                </Col>
            </ContainerStep>

            <ContainerStep>

                <Col>
                    <Text fz='26px'>
                        What is OpenSea?
                    </Text>

                    <Text>
                        OpenSea is the world's largest marketplace for non-fungible tokens (NFT). Every owner of a NFT can offer it for sale.
                    </Text>
                </Col>
            </ContainerStep>
            <ContentCats style={{ marginTop: '50px' }} width='200px'>
                {cats.map((cat, key) => (
                    <Cat width='100%' key={key} src={cat.img} />
                ))}
            </ContentCats>
            <Col>
                <SocialMediaGroup width='100%'>
                    <Image onClick={redirectTwitter} src={twitter} />
                    <Image onClick={redirectDiscord} src={discord} />
                </SocialMediaGroup>
            </Col>
        </div>
    )
}



export default FAQ;