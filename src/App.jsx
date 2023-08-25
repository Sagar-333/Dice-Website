import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import AboutPage from "./components/about";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh; /* Adjust as needed */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll; /* Use "scroll" to show scrollbar even if not needed */
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  scroll-snap-align: start;
  height: 100vh; /* Each section occupies full viewport height */
`;

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section>
                  <Hero />
                </Section>
                <Section>
                  <Who />
                </Section>
                <Section>
                  <Works />
                </Section>
                <Section>
                  <Contact />
                </Section>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
