import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";
import Ingredient from "./components/Ingredient";
import Restaurant from "./components/Restaurant";
import Food from "./components/Food";

import Recipe from "./components/Recipe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/food-search" element={<Food />} />
        <Route path="/ingredient-search" element={<Ingredient />} />
        <Route path="/food-search/recipe/:id" element={<Recipe />} />
        <Route path="/ingredient-search/recipe/:id" element={<Recipe />} />
        <Route path="/restaurant-search" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
