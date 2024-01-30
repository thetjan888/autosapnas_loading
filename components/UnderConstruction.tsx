import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 text-center animate-pulse">
        Autosapnas.lt projektas kuriamas
      </h1>
      <div className="w-16 sm:w-24 md:w-32 h-1 bg-indigo-500 rounded-full mb-4 animate-bounce-x">
        <div className="w-1/4 h-full bg-indigo-700 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;