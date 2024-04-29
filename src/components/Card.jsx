// Card.js - Component for the floating cards
import React from 'react';

const Card = ({ title, imageSrc }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
        </a>
        {/* Other card content */}
      </div>
    </div>
  );
};

export default Card;
