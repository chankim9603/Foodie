import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DOMPurify from "dompurify";

function Recipe() {
  const API_KEY = "125a7a6824ba4e698a8bb78ff1616df2";
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState({});

  const { image, instructions, title, extendedIngredients } = recipeInfo;
  const cleanInstructions = DOMPurify.sanitize(instructions);

  const getRecipeInfo = async (id) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
    );
    const data = await response.json();
    setRecipeInfo(data);
    console.log(data);
  };

  const displayIngredients = (ingredients) => {
    return ingredients?.map((ingredient) => {
      return (
        <div>
          <div>{ingredient.name}</div>
        </div>
      );
    });
  };

  useEffect(() => {
    getRecipeInfo(id);
  }, []);

  return (
    <RecipeStyled>
      <div className="food-card">
        <div className="visual">
          <h2 className="title">{title}</h2>
          <img src={image} alt="" />
        </div>
        <div className="ingredients">
          {displayIngredients(extendedIngredients)}
        </div>
      </div>
      <div className="instructions-container">
        <p className="instructions">
          <span dangerouslySetInnerHTML={{ __html: cleanInstructions }} />
        </p>
      </div>
    </RecipeStyled>
  );
}

const RecipeStyled = styled.div`
  padding: 10rem 10rem;
  .title {
    padding: 1rem 0;
  }
  .food-card {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #e3a2ba;
  }
  .ingredients {
    display: flex;
    flex-direction: column;
    div {
      padding: 0.5rem;
    }
    .instructions span {
      color: #6c7983;
      line-height: 1.7rem;
    }
  }
`;

export default Recipe;
