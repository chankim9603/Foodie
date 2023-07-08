import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Ingredient() {
  const API_KEY = "125a7a6824ba4e698a8bb78ff1616df2";
  // Once you have your API key, you have to put it in the request URL for every request you make like so ?apiKey=YOUR-API-KEY.
  // Attention: Only the first query parameter is prefixed with a ? (question mark), all subsequent ones will be prefixed with a & (ampersand). That is how URLs work and nothing related to our API. Here's a full example with two parameters apiKey and includeNutrition: https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

  const [keyword, setKeyword] = React.useState("");
  const [filteredKeyword, setFilteredKeyword] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [searched, setSearched] = React.useState("");

  const getRecipeByAny = async (keyword) => {
    if (keyword !== "") {
      filterSearch(keyword);
      console.log(filteredKeyword);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${filteredKeyword}`
      );
      const data = await response.json();
      // console.log(data);
      console.log(data);
      setResults(data);
    } else {
      setResults("");
    }
  };

  const filterSearch = (keyword) => {
    let filtered = "";
    while (keyword !== "") {
      let index = keyword.indexOf(";");
      if (filtered !== "") {
        filtered += ",+";
      }
      if (index === -1) {
        filtered += keyword;
        break;
      }
      filtered += keyword.substring(0, index);
      keyword = keyword.substring(index + 2);
    }
    setFilteredKeyword(filtered);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipeByAny(keyword);
    setSearched("No results! :(");
  };

  const renderSearch = (results) => {
    return results?.length != 0 ? (
      results?.map((data) => {
        return (
          <Link className="food-card" to={`recipe/${data.id}`}>
            <div className="names">{data.title}</div>
            <img src={data.image} alt="" />
          </Link>
        );
      })
    ) : (
      <div className="searched">{searched}</div>
    );
  };

  return (
    <IngredientStyled>
      <h1 className="title">Search by Ingredients</h1>
      <form className="search" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="food-search"
          value={keyword}
          onChange={handleChange}
          placeholder="Add ingredients here! Example: Eggs; Bacon; Cheese; Salt; Pepper"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="result">{renderSearch(results)}</div>
    </IngredientStyled>
  );
}

const IngredientStyled = styled.div`
  background-color: #137a63;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 15rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .title {
    font-size: 3rem;
  }
  .search {
    position: relative;
    width: 100%;
  }
  .search input {
    width: 100%;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    border-radius: 50px;
    font-size: 1.2rem;
    background-color: #fff;
    border: 3px solid black;
  }
  .search button {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    outline: none;
    border-radius: 50px;
    font-size: 1.2rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    font-family: inherit;
    border: 3px solid black;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .result {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .names {
    color: black;
    font-size: 1.2rem;
  }
  .food-card {
    background-color: #ece6ff;
    padding: 1rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 3px solid black;
  }
  .searched {
    font-size: 2rem;
  }
`;

export default Ingredient;
