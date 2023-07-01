import React from "react";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
  }
  return (
    <ImgSliderC {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </ImgSliderC>
  );
};

const ImgSliderC = styled(Slider)`
  /* padding: 0 2vw; */
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 2;

    &:hover{
    opacity: 1;
    transition: opacity 0.3s ease 0.1s;
  }
  }

  ul li button {
    &:before {
      font-size: 12px;
      color: rgb(150, 158, 171);
      
    }
  }

  li.slick-active button:before {
    color: white
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    /* left: -40px; */
  }

  /* background-color: pink; */

`;

const Wrap = styled.div`
  
  a > img{
    width: 100%;
    height: 50vh;
  }

  border-radius: 6px;
  cursor: pointer;
  position: relative;

  a{
    border-radius: 6px;
    /* box-sizing: content-box; */
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 5px;

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }

  }

`

export default ImgSlider;
