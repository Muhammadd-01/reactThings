import React from "react";
import { useEffect, useState } from "react";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-4 mb-3" key={recipe.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                {recipe.instructions.map((ins, i) => (
                  <p className="card-text" key={i}>
                    {ins}
                  </p>
                ))}
                <a href="#" className="btn btn-dark">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
