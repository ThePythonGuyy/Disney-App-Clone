import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import db, { Gprovider } from "../Firebase/firebase";
import {
  collection,
  documentId,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const movieRef = collection(db, "movies", 'R5KOTyotd1cR9g7R28wg');

  //   getDoc(movieRef)
  //     .then(snap => {
  //       setDetails(snap.data());
  //       console.log(details)
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       navigate("*");
  //     })

  // },[id])

  useEffect(() => {
    const movieSel = collection(db, "movies");
    onSnapshot(movieSel, (snap) => {
      snap.docs.map((doc) => {
        if (doc.id === id) {
          setDetails(doc.data());
          console.log("success");
        }
      });
      if (!details) {
        console.log("doc doesn't exists");
      }
    });
  }, [id]);

  return (
    <DetailC>
      {details && (
        <>
          <BackGround>
            <img
              src={details.backgroundImg}
              alt=""
            />
          </BackGround>
          <ImgTitle>
            <img
              src={details.titleImg}
              alt=""
            />
          </ImgTitle>
          <ContentMeta>
            <Control>
              <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span>+</span>

                {/* <span />
             <span /> */}
              </AddList>
              <GrpWatch>
                <img src="/images/group-icon.png" alt="" />
              </GrpWatch>
            </Control>

            <SubTitle>{details.subTitle}</SubTitle>
            <Desc>{details.description}</Desc>
          </ContentMeta>
        </>
      )}
    </DetailC>
  );
};

const DetailC = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
`;

const BackGround = styled.div`
  position: fixed;
  left: 0;
  opacity: 0.8;
  right: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
  }
  /* top: 0; */
`;

const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: auto;
  padding-bottom: 24px;
  img {
    max-width: 700px;
    min-width: 200px;
    width: 35vw;
  }
  /* height: 30vw; */
  /* background-color: pink; */
`;

const ContentMeta = styled.div`
  max-width: 874px;

  //
  /* background-color: yellow; */
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
  box-sizing: border-box;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0 24px;
  border-radius: 6px;
  background: transparent;
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: center;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
  background-color: rgb(229, 229, 229);
  color: black;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  width: 130px;
  gap: 5px;
  font-size: 15px;

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(178, 178, 178);
    /* box-shadow: none; */
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin-bottom: 10px;

    width: 100px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgb(0, 0, 0, 0.3);
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  padding: 0 30px;

  &:hover {
  }
`;

const AddList = styled.div`
  border: 2px solid #f9f9f9;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.8);
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child{
      position: absolute;
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;

    }

    &:last-child{
      position: absolute;
      height: 2px;
      transform: translate(1px, 0px) rotate(90deg);
      width: 16px;

    }
  } */

  span {
    font-size: 2.8em;
  }
`;

const GrpWatch = styled.div`
  height: 52px;
  width: 52px;
  border: 2px solid #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 20px;
  padding-top: 5px;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0.7);

  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 16px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.div`
  /* line-height: 1.4px; */
  font-size: 20px;
  padding: 16px 0;
  /* min-height: 56px; */
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }

  /* background-color: pink; */
`;

export default Detail;
