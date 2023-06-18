import { render } from "@testing-library/react";
import React from "react";

function Food() {
  const API_KEY = "125a7a6824ba4e698a8bb78ff1616df2";
  // Once you have your API key, you have to put it in the request URL for every request you make like so ?apiKey=YOUR-API-KEY.
  // Attention: Only the first query parameter is prefixed with a ? (question mark), all subsequent ones will be prefixed with a & (ampersand). That is how URLs work and nothing related to our API. Here's a full example with two parameters apiKey and includeNutrition: https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

  const [keyword, setKeyword] = React.useState("");
  const [results, setResults] = React.useState([]);

  const getRecipeByAny = async (keyword) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${keyword}`
    );
    const data = await response.json();
    // console.log(data);
    // console.log(data.results);
    setResults(data.results);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipeByAny(keyword);
  };

  const renderSearch = (results) => {
    return results?.map((data) => {
      return (
        <div>
          <div>{data.title}</div>
          <img src={data.image} alt="" />
        </div>
      );
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="food-search"
          value={keyword}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {renderSearch(results)}
    </div>
  );
}

export default Food;
