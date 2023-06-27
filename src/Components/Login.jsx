import React from "react";
import styled from "styled-components";


const Login = (props) => {



  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />

          <SignUp>Get All There</SignUp>
          <Description>
            Get Premier access to Raya and the Last Draggon for an additional
            fee with a Disney+ subscription As of 03/26/23, the price of isney+
            and The Disney Bundle will increase by $1
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='' />
        </CTA>
        {/* <BgImage /> */}
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 92vh;
  background-image: url("images/login-background.jpg");
  background-position: cover;
  background-repeat: no-repeat;
  /* margin-top: 20px; */
`;

const Content = styled.div`
overflow: hidden;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  height: 100%;
  box-sizing: border-box;
  //
  /* background-color: yellow; */
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("images/login-background.jpg");
  background-position: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* bottom: 0; */
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2vw;

  //
  /* background-color: pink; */
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 2.8px;
  font-size: 24px;
  padding: 16.5px 0;
  margin-bottom: 12px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 10px 0 24px;
    /* line-height: 1.5px; */
    padding: 0 1vw;
    font-size: 16px;
    letter-spacing: 1.7px;
`

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 100%;
    vertical-align: bottom;
`

export default Login;
