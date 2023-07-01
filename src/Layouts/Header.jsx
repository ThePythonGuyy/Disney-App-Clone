import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth, Gprovider } from "../Firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";


import {
  setSignOutState,
  setUserLoingDetails,
} from "../app/features/user/userSlice";

function Header() {
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userPhoto = useSelector((state) => state.user.photo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAuth = () => {
    if(!userEmail) {
    // console.log("hello");
    signInWithPopup(auth, Gprovider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState())
          navigate('/')
        })
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoingDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user);
        navigate('/home');
      }
    })
  }, [userName])

  return (
    <>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="" />
        </Logo>

        {!userName ? (
          <Login onClick={() => handleAuth()}>LOGIN</Login>
        ) : (
          <>
            <NavMenu>
              <a>
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
              </a>
              <a>
                <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" alt="" />
                <span>ORIGINAL</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIE</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
              </a>
            </NavMenu>

            <UserPhoto>
              {
                !userPhoto ? (
                  <img src="/images/user.svg" alt="" />
                ) : (
                  <img src={userPhoto} alt={userName} />
                )
              }
              <SignOut onClick={handleAuth}>
                <span >Sign Out</span>
              </SignOut>
            </UserPhoto>
          </>
        )}
      </Nav>
      <div>
        <Outlet  context={[userEmail]}/>
      </div>
    </>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  min-height: 8vh;
  background-color: #090b13;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 16px;
  z-index: 3;
  padding: 0 36px;

  /* background-color: pink; */
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 68px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    min-width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;
  /* width: 100%; */
  /* @media (max-width: 768px) {
    display: none;
  } */

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    z-index: auto;
    gap: 8px;

    img {
      height: 20px;
      min-width: 22px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 1.4px;
      line-height: 1.08px;
      white-space: nowrap;
      padding: 2px 0;
      position: relative;

      &:after {
        // could be either 'before' or 'after'
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -11px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        /* transform-origin: left-center; */
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        /* transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1); */
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  //
  /* background-color: green; */
`;

const Login = styled.div`
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease 0.02s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const SignOut = styled.div`
  position: absolute;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  padding: 3px 7px;
  padding-bottom: 5px;
  top: 8vh;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  opacity: 0;
  transition: all 0.4s ease 0.02s;
  display: felx;
  align-items: center;
  justify-content: center;
  span{
    letter-spacing: 1.2px;
    font-size: 12px;
    /* line-height: 0.5px; */
    
}

//
/* background-color: green; */
`

const UserPhoto = styled.div`

  display: inline-block;
  margin-left: auto;
  position: relative;
  width: 5%;
  cursor: pointer;
  img {
    /* margin-left: 200px; */
    width: 40px;
    margin-top: 1.2vh;
    border-radius: 50%;
    margin-left: 0.8rem;
  }

  &:hover {
    ${SignOut} {
      opacity: 1;
    }
  }

  /* background-color: aqua; */
`;





export default Header;
