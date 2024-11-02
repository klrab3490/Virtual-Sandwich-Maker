import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import SandwichStack from './components/SandwichStack';
import LogicScale from './components/LogicScale';

function App() {
  const defaultIngredients = ['Top Bread', 'Bottom Bread'];
  const [ingredients, setIngredients] = useState(defaultIngredients);
  const [logicScore, setLogicScore] = useState(0);
  const [comments, setComments] = useState('');

  const weirdIngredients = [
    'Marshmallows', 'Jelly Beans', 'Chutney', 'Spicy Ice Cream', 'Cotton Candy Beef Strips', 
    'Peanut Butter & Glitter', 'Caramel Swirls', 'Pickled Shoe Leather', 'Chocolate Chips', 
    'Wasabi', 'Toothpaste', 'Gummy Bears', 'Maple Syrup', 'Sardines', 'Hot Cheetos', 
    'Chocolate Syrup', 'Fruit Loops'
  ];

  const goodIngredients = [
    'Lettuce', 'Tomato', 'Cheese', 'Ham', 'Turkey', 'Chicken', 'Mustard', 'Mayo', 
    'Bacon', 'Avocado', 'Pickles', 'Onions', 'Cucumbers'
  ];

  // Handle adding ingredients
  const addIngredient = (ingredient) => {
    const updatedIngredients = [
      ingredients[0],
      ...ingredients.slice(1, ingredients.length - 1),
      ingredient,
      ingredients[ingredients.length - 1]
    ];
    setIngredients(updatedIngredients);
    updateLogicScore(updatedIngredients.map(ing => ing.name));
  };

  // Remove a specific ingredient by index
  const removeSpecificIngredient = (index) => {
    if (index > 0 && index < ingredients.length - 1) { // Ensure we don’t remove bread
      const updatedIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(updatedIngredients);
      updateLogicScore(updatedIngredients);
    }
  };

  // Reset sandwich to default bread-only state
  const resetSandwich = () => {
    setIngredients(defaultIngredients);
    setLogicScore(0);
    setComments('');
  };

  // Calculate logic score based on ingredients
  const updateLogicScore = (newIngredients) => {
    let score = 0;
    newIngredients.forEach((ingredient) => {
      if (weirdIngredients.includes(ingredient)) {
        score += 15;
      } else if (goodIngredients.includes(ingredient)) {
        score -= 5;
      }
    });
    setLogicScore(score);
    updateComments(score);
  };

  // Update comments based on logic score
  const updateComments = (score) => {
    let comment = '';
    if (score < 0) {
      comment = 'A decent sandwich, but painfully ordinary!';
    } else if (score < 50) {
      comment = 'This is getting interesting... a mix of flavors!';
    } else if (score < 100) {
      comment = 'This sandwich is out of this world! Bold choice!';
    } else {
      comment = 'You’ve created the ultimate sandwich anomaly! Bravo!';
    }
    setComments(comment);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 text-center">Virtual Sandwich Maker</h1>
      <IngredientSelector addIngredient={addIngredient} />
      <SandwichStack ingredients={ingredients} removeIngredient={removeSpecificIngredient} />
      <LogicScale logicScore={logicScore} comments={comments} />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <button
          onClick={resetSandwich}
          className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 flex-1"
        >
          Reset Sandwich
        </button>
      </div>
    </div>
  );
}

export default App;
