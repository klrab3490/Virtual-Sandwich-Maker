import React, { useState } from 'react';

const ingredientsList = [
  // "Good" ingredients
  'Lettuce', 'Tomato', 'Cheese', 'Ham', 'Turkey', 'Chicken', 'Mustard', 'Mayo', 
  'Bacon', 'Avocado', 'Pickles', 'Onions', 'Cucumbers',

  // "Weird" ingredients
  'Marshmallows', 'Jelly Beans', 'Chutney', 'Spicy Ice Cream', 
  'Cotton Candy Beef Strips', 'Peanut Butter & Glitter', 
  'Caramel Swirls', 'Pickled Shoe Leather', 'Chocolate Chips', 'Wasabi', 
  'Ranch Dressing', 'Toothpaste', 'Gummy Bears', 'Maple Syrup', 
  'Sardines', 'Hot Cheetos', 'Chocolate Syrup', 'Fruit Loops'
];

const IngredientSelector = ({ addIngredient }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(ingredientsList[0]);

  const handleAddIngredient = () => {
    addIngredient(selectedIngredient);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Choose Your Ingredient</h2>
      <select
        className="w-full p-2 border rounded-md"
        value={selectedIngredient}
        onChange={(e) => setSelectedIngredient(e.target.value)}
      >
        {ingredientsList.map((ingredient, index) => (
          <option key={index} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddIngredient}
        className="mt-3 w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default IngredientSelector;
