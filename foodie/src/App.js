import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";
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
        <Route path="/food-search/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
