import React from "react";
import styled from "styled-components";
import aboutImg from "../images/about-page.jpg";

function About() {
    return (
        <AboutStyle>
            <div className="pasta">
                <img src={aboutImg} alt="" width="40%" height="1000px" />
            </div>
            <div class="text">
                This project is created to help users having easier time to find
                receipes dependent on
                what they have in the fridge.
                In addition to the
                receipes, we included the function to
                find the restaurants around them.

            </div>
        </AboutStyle>
    );
}

const AboutStyle = styled.div`
  @font-face {
    font-family: "Helvetica Black",
  }
  img {
    float: right;
    position: relative;
    top: 1px;
  }

  div {
   height: 200px,
   text-align: center,
  }

  .text {
    padding-top: 400px;
  }
`;

export default About;
