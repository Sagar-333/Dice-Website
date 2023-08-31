import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #da4ea2;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #da4ea2;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: 14px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.35s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c7418d;
    transform: scale(1.08);
  }
`;

const TransparentButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #da4ea2;
`;

const SignupButton = styled(TransparentButton)`
  border-color: #da4ea2;

  &:hover {
    color: #da4ea2;
    background-color: transparent;
    transform: scale(1.08);
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/DiceWhite.png" />
          <List>
            <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
            <ListItem><StyledLink to="/about">About Us</StyledLink></ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Events</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Login</Button>
          <SignupButton>SignUp</SignupButton>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
