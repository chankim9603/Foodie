import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/foodie-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <div className="sections">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
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
              <li>
                <NavLink
                  to="/about-us"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "white" : "black",
                    };
                  }}
                >
                  ABOUT
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
    padding-top: 1rem;
  }
  background-color: black;
  .logo {
    height: 100px;
    padding-bottom: 1rem;
  }
  .logo img {
    height: 100%;
  }
  .nav-bar {
    width: 100%;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    background-color: blue;
    width: 100%;
    // padding: 1rem 0;
    justify-content: space-evenly;
    // align-items: stretch;
  }
  .nav-links li {
    // background-color: orange;
    // height: 100%;
    // width: 100%;
    padding: 1rem;
  }
`;

export default Header;
