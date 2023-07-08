import React from "react";
import styled from "styled-components";
import chef from "../images/smiling-chef.jpg";

function Home() {
  return (
    <HomeStyle>
      <div className="home-img">
        <img src={chef} alt="" />
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  .home-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Home;
