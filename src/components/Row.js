import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecommended, selectNewDisney, selectOriginals, selectTrending } from '../features/movie/movieSlice'

export default function Row({ type }) {
    const typesDataMap = {
        'recommended': { title: 'Recommended For You', data: useSelector(selectRecommended) },
        'newDisney': { title: 'New To Disney+', data: useSelector(selectNewDisney) },
        'originals': { title: 'Originals', data: useSelector(selectOriginals) },
        'trending': { title: 'Trending', data: useSelector(selectTrending) }
    }
    const movies = typesDataMap[type].data
    const title = typesDataMap[type].title
    return (
        <Container>
            <h4>{title}</h4>
            <Content>
                {movies && movies.map((movie, key) => (
                    <Wrap key={key} >
                        <Link to={'/details/' + movie.id} >
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content >
        </Container >
    )
}


const Container = styled.div`
    padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
                rgb(0 0 0 / 73%) 0 16px 18px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0;
    border: 3px solid rgba(249, 249, 249, 0,1);

    img {
        inset: 0;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 530ms ease-in-out 0;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,
        rgb(0 0 0 /72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);
    }

`