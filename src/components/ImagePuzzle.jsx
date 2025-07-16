// src/components/ImagePuzzle.jsx

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactImagePuzzle from 'react-image-puzzle';
import Confetti from 'react-confetti';
import { FaUpload, FaRandom } from 'react-icons/fa';

import { ring } from '../assets/images/picData.js';

const ImagePuzzle = () => {
  const [imageSrc, setImageSrc] = useState(ring);
  const [puzzleKey, setPuzzleKey] = useState(0);
  // 1. New state to track the solved status
  const [isSolved, setIsSolved] = useState(false);

  const fileInputRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container to get dimensions

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsSolved(false); // Reset solved state on new image
        setImageSrc(e.target.result);
        setPuzzleKey(prevKey => prevKey + 1); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShuffle = () => {
    setIsSolved(false); // Reset solved state on shuffle
    setPuzzleKey(prevKey => prevKey + 1);
  };

  // 2. The function that triggers the celebration
  const handleSolved = () => {
    setIsSolved(true);
    // Hide the celebration after 5 seconds
    setTimeout(() => {
      setIsSolved(false);
    }, 5000);
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full relative">
      {/* 5. The Confetti component, rendered only when solved */}
      {isSolved && <Confetti recycle={false} numberOfPieces={400} />}

      <motion.div
        key={`${imageSrc}-${puzzleKey}`}
        className="rounded-xl overflow-hidden shadow-purple-500/20"
        // 4. The "pop out" animation on solve
        animate={{ 
          scale: isSolved ? 1.05 : 1,
          boxShadow: isSolved ? '0px 0px 35px rgba(192, 132, 252, 0.7)' : '0px 0px 20px rgba(168, 85, 247, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <ReactImagePuzzle
          image={imageSrc}
          // 3. The 'onDone' prop to detect the win
          onDone={handleSolved}
        />
      </motion.div>

      {/* 6. The "Congrats" message */}
      <AnimatePresence>
        {isSolved && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black text-white p-4 rounded-lg bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Congrats! 🎉
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-8">
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
        <motion.button onClick={() => fileInputRef.current.click()} className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaUpload />
          Upload Image
        </motion.button>
        <motion.button onClick={handleShuffle} className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FaRandom />
          Shuffle
        </motion.button>
      </div>
    </div>
  );
};

export default ImagePuzzle;