import React from "react";
import { styled } from "styled-components";

const Viewers = () => {
  return (
    <ViewersC>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
      <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </ViewersC>
  );
};

const ViewersC = styled.div`
  margin-top: 30px;
  padding: 30px 0px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  //
  /* background-color: pink; */
`;

const Wrap = styled.div`

  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 100%;
  height: 11vw;
  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    object-fit: cover;
    z-index: 0;
    opacity: 0;
    /* visibility: invisible; */
  }

  &:hover {

    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    video{
        opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 30vh;
    width: 80%;
  }
`;

export default Viewers;
