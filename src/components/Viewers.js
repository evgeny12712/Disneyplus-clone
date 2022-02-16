import React from 'react'
import styled from 'styled-components'
import viewersDisney from '../assets/imgs/viewers-disney.png'
import viewersMarvel from '../assets/imgs/viewers-marvel.png'
import viewersNational from '../assets/imgs/viewers-national.png'
import viewersPixar from '../assets/imgs/viewers-pixar.png'
import viewersStarwars from '../assets/imgs/viewers-starwars.png'
import videoDisney from '../assets/videos/1564674844-disney.mp4'
import videoMarvel from '../assets/videos/1564676115-marvel.mp4'
import videoNational from '../assets/videos/1564676296-national-geographic.mp4'
import videoPixar from '../assets/videos/1564676714-pixar.mp4'
import videoStarwars from '../assets/videos/1608229455-star-wars.mp4'
export default function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={viewersDisney} alt="disney" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoDisney} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersMarvel} alt="marvel" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoMarvel} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersNational} alt="national" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoNational} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersPixar} alt="pixar" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoPixar} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersStarwars} alt="starwars" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoStarwars} type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1fr));

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

const Wrap = styled.div`
    padding-top: 58.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/69%) 0 26px 30px -10px,
                rgb(0 0 0/73%) 0 16px 10px -10px;
    cursor:pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-rezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgb(249, 249, 249,  0.1);
    img {
        inset: 0;
        display: block;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0%;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0/80%) 0 40px 58px -16px,
                rgb(0 0 0/72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        video {
            opacity: 1;
        }
    }
`