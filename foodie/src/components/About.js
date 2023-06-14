import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutStyle>
      <div className="about">
        This project is created to help users having easier time to find
        receipes dependent on what they have in the fridge. In addition to the
        receipes, we included the function to find the restaurants around them.
      </div>
    </AboutStyle>
  );
}

const AboutStyle = styled.div`
  @font-face {
    font-family: "Helvetica Black";
  }
`;

export default About;
