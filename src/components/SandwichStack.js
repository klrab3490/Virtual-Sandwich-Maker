import React from 'react';

const SandwichStack = ({ ingredients, removeIngredient }) => {
  return (
    <div className="bg-yellow-50 shadow-inner rounded-lg p-4 w-full max-w-md mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Sandwich Stack</h2>
      <div className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`flex items-center justify-between ${
              ingredient.toLowerCase().includes('bread')
                ? 'bg-yellow-400 text-yellow-900 font-bold'
                : 'bg-purple-200 text-purple-900'
            } p-2 rounded-md`}
          >
            <span>{ingredient}</span>
            {index !== 0 && index !== ingredients.length - 1 && (
              <button
                onClick={() => removeIngredient(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SandwichStack;
