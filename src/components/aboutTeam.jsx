import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  scroll-snap-align: start; 
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url("./img/moon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: justify;
  padding: 10px;
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
  padding: 20px;
  margin: 0;
  line-height: 1.2;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
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

const SubTitle = styled.h1`
  font-size: 60px;
  padding-bottom: 15px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const AboutTeam = () => {
  return (
    <Section>
      <Title><TitleText>About</TitleText> <Interdisciplinary>Dean</Interdisciplinary></Title>
      <ContentWrapper>
        <ImageSection />
        <TextSection>
          <Content>
            <SubTitle>Dr. Rajneesh Talwar</SubTitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolorem, nam molestias dolores quaerat natus aut ut veniam labore? Nostrum, corporis error quo perferendis libero deserunt explicabo earum itaque facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ipsa laboriosam voluptatem alias ex. Rem similique minima amet, praesentium quibusdam unde atque a provident excepturi officiis corrupti maxime ex quas?
          </Content>
        </TextSection>
      </ContentWrapper>
    </Section>
  );
};

export default AboutTeam;
