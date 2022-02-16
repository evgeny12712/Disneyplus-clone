import styled from 'styled-components'
import React, { useEffect } from 'react'
import logo from '../assets/imgs/logo.svg'
import homeIcon from '../assets/imgs/home-icon.svg'
import searchIcon from '../assets/imgs/search-icon.svg'
import watchListIcon from '../assets/imgs/watchlist-icon.svg'
import originalsIcon from '../assets/imgs/original-icon.svg'
import moviesIcon from '../assets/imgs/movie-icon.svg'
import seriesIcon from '../assets/imgs/series-icon.svg'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'
import '../firebase'
export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const provider = new GoogleAuthProvider();
    const auth = getAuth()

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate('/home')
            }
        })
    }, [username])

    const handleAuth = () => {
        if (!username) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user)
                }).catch((error) => {
                    console.log('error', error)
                });
        } else {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            }).catch((error) => console.log(error))
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    return (
        <Nav>
            <Logo>
                <Link to="/home">
                    <img src={logo} alt="logo" />
                </Link>
            </Logo>
            {
                !username ?
                    <Login onClick={handleAuth}>LOGIN</Login>
                    :
                    <>
                        <NavMenu>
                            <a href='/home'>
                                <img src={homeIcon} alt="home-icon" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src={searchIcon} alt="search-icon" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src={watchListIcon} alt="watchlist-icon" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src={originalsIcon} alt="originals-icon" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src={moviesIcon} alt="movies-icon" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src={seriesIcon} alt="series-icon" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={username} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                        </SignOut>
                    </>
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 2;
`

const Logo = styled.div`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            width: 20px;
        }

        span {
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.5px;
            /* line-height: 1.5; */
            position: relative;
            &:before {
                background-color: rgb(249, 249, 249);
                content: '';
                height: 2px;
                position: absolute;
                left:0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 100ms;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 920px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding : 8px 16px;
    text-transform: uppercase;
    letter-spacing:1.5px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: rgb(19,19,19);
    border: 1px solid rgba(151,151,151, 0.34);
    padding: 10px;
    font-size: 0.875rem;
    letter-spacing: 3px;
    width : 100px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;

        }
    }
`
