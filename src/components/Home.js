import styled from 'styled-components'
import homeBackground from '../assets/imgs/home-background.png'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Row from './Row'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colRef } from '../firebase'
import { getDocs } from 'firebase/firestore'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
export default function Home() {
    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    let rowsData = {
        recommended: [],
        newDisney: [],
        originals: [],
        trending: []
    }

    useEffect(() => {
        getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        rowsData.recommended = [...rowsData.recommended, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        rowsData.newDisney = [...rowsData.newDisney, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        rowsData.originals = [...rowsData.originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        rowsData.trending = [...rowsData.trending, { id: doc.id, ...doc.data() }]
                        break;
                }

            })

            dispatch(setMovies({
                recommended: rowsData.recommended,
                newDisney: rowsData.newDisney,
                originals: rowsData.originals,
                trending: rowsData.trending
            }))
        })
    }, [username])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Row type="recommended" />
            <Row type="newDisney" />
            <Row type="originals" />
            <Row type="trending" />
            {/* <NewDisney /> */}
            {/* <Originals /> */}
            {/* <Trending /> */}
        </Container>
    )
}


const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
        background:url(${homeBackground}) center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`;