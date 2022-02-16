import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import sliderImgOne from '../assets/imgs/slider-badag.jpg'
import sliderImgTwo from '../assets/imgs/slider-badging.jpg'
import sliderImgThree from '../assets/imgs/slider-scale.jpg'
import sliderImgFour from '../assets/imgs/slider-scales.jpg'
export default function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src={sliderImgOne} alt="slide-1" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={sliderImgTwo} alt="slide-2" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={sliderImgThree} alt="slide-3" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={sliderImgFour} alt="slide-4" />
                </a>
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity .2s ease 0%;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    a {
        box-shadow: rgb(0 0 0 /60%) 0px 26px 30px -10px, 
                    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        padding: 4px;
        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 100ms;
        }
    }
`