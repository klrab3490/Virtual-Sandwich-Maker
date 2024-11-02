import React from 'react';

const LogicScale = ({ logicScore, comments }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Logic Scale</h2>
      <p className="text-4xl font-bold text-purple-600">{logicScore}</p>
      <p className="text-sm text-gray-500 italic mt-2">{comments}</p>
    </div>
  );
};

export default LogicScale;
