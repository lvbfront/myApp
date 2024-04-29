// Carousel.js - Component to hold the cards and browsing functionality
import React from 'react';
import Card from './Card';
import carouselData from '../assets/images/picData';


const Carousel = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto p-8">
      {carouselData.map((card, index) => (
        <Card key={index} title={card.title} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default Carousel;
