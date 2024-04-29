// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
// You can import additional sections or components if needed

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <Header />
        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Featured Research
          </h2>
          <Carousel />
          {/* You can place additional content here, such as featured articles, latest news, etc. */}
        </section>
        {/* Add other sections unique to the HomePage here */}
      </main>
    </>
  );
};

export default HomePage;
