import React from "react";
import Header from "./Header";
import styled from "styled-components";
import chef from "../images/smiling-chef.jpg";

function Home() {
  return (
    <HomeStyle>
      <Header />
      <div className="home-img">
        <img src={chef} alt="" />
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
