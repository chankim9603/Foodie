import React from "react";
import Header from "../Header";
import styled from "styled-components";
import chef from "../images/smiling-chef.jpg";

function Home() {
  return (
    <HomeStyle>
      <div className="home-img">
        <img src={chef} alt="" style={{ width: 2000, height: 950 }} />
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;

  .home-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Home;
