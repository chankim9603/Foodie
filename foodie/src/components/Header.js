import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/foodie-logo.png";

function Header() {
  return (
    <HeaderStyle>
      <div className="home-page">
        <div className="sections">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-bar">
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/food-search"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "white" : "black",
                    };
                  }}
                >
                  FOOD
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ingredient-search"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "white" : "black",
                    };
                  }}
                >
                  INGREDIENT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/restaurant-search"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "white" : "black",
                    };
                  }}
                >
                  RESTAURANT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem 0 1rem;
  }
  background-color: black;
  .logo {
    height: 100px;
  }
  .logo img {
    height: 100%;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    background-color: blue;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
`;

export default Header;
