import backgroundImage from '../assets/imgs/login-background.jpg'
import ctaLogoOne from '../assets/imgs/cta-logo-one.svg'
import ctaLogoTwo from '../assets/imgs/cta-logo-two.png'
import React from 'react'
import styled from 'styled-components'
export default function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={ctaLogoOne} alt="cta-logo-one" />
                    <SignUp>get all there</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last
                        Dragon for additional fee with Disney+
                        subscription. As of 03/26/21, the price of
                        Disney+ and The Disney Bundle will increase
                        by $1.
                    </Description>
                    <CTALogoTwo src={ctaLogoTwo} alt="cta-logo-two" />
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:url(${backgroundImage});
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;

const Content = styled.div`
    margin-block-end: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const CTA = styled.div`
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-block-end: 12px;
    max-width: 600px;
    width: 100%;
`;

const SignUp = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0,0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 100%;
`;