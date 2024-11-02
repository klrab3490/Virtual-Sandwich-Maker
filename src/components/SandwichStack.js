import React from 'react';

const SandwichStack = ({ ingredients, removeIngredient }) => {
  // Separate ingredients into top, middle, and bottom sections
  const topIngredients = ingredients.filter(ingredient => ingredient.position === 'top');
  const middleIngredients = ingredients.filter(ingredient => ingredient.position === 'middle');
  const bottomIngredients = ingredients.filter(ingredient => ingredient.position === 'bottom');

  return (
    <div className="bg-yellow-50 shadow-inner rounded-lg p-4 w-full max-w-md mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Sandwich Stack</h2>
      <div className="space-y-2 text-center">
        {/* Fixed Top "Bread" */}
        <div className="flex items-center justify-between bg-yellow-400 text-yellow-900 font-bold p-2 rounded-md">
          <span className='flex justify-center items-center w-full'>Bread</span>
        </div>

        {/* Top ingredients */}
        {topIngredients.map((ingredient, index) => (
          <div
            key={`top-${index}`}
            className="flex items-center justify-between bg-purple-200 text-purple-900 p-2 rounded-md"
          >
            <span>{ingredient.name}</span>
            <button
              onClick={() => removeIngredient(index)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Middle ingredients */}
        {middleIngredients.map((ingredient, index) => (
          <div
            key={`middle-${index}`}
            className="flex items-center justify-between bg-purple-200 text-purple-900 p-2 rounded-md"
          >
            <span>{ingredient.name}</span>
            <button
              onClick={() => removeIngredient(topIngredients.length + index)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Bottom ingredients */}
        {bottomIngredients.map((ingredient, index) => (
          <div
            key={`bottom-${index}`}
            className="flex items-center justify-between bg-purple-200 text-purple-900 p-2 rounded-md"
          >
            <span>{ingredient.name}</span>
            <button
              onClick={() => removeIngredient(topIngredients.length + middleIngredients.length + index)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Fixed Bottom "Bread" */}
        <div className="flex items-center justify-between bg-yellow-400 text-yellow-900 font-bold p-2 rounded-md">
          <span className='flex justify-center items-center w-full'>Bread</span>
        </div>
      </div>
    </div>
  );
};

export default SandwichStack;
