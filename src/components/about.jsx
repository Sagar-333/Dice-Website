import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 95vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Interdisciplinary = styled.span`
  color: #da4ea2;
  font-family: 'Tilt Prism';
  font-weight: 100;
`;

const TitleText = styled.span`
  color: white;
  font-family: 'Great Vibes';
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 400;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Line = styled.img`
  height: 5px;
`;

const AboutPage = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            <TitleText>About</TitleText> <Interdisciplinary>Us</Interdisciplinary>
          </Title>
          <Subtitle>
            Our Mission
          </Subtitle>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus libero sed
            ultrices. Aenean a sem a justo interdum elementum. Proin interdum velit in
            nisl hendrerit consectetur.Veniam tempor minim deserunt amet non amet veniam adipisicing ullamco occaecat nisi eu veniam. Excepteur sunt eiusmod Lorem exercitation aute consequat adipisicing est enim aliqua do. Lorem nostrud veniam enim nulla incididunt amet reprehenderit reprehenderit est. Officia nostrud officia est commodo consequat Lorem.
          </Desc>
        </Left>
        <Right>
          <Img src="./img/moon.png" alt="About Us" />
        </Right>
      </Container>
    </Section>
  );
};

export default AboutPage;
