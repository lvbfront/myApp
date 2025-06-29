import React, { useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

/**
 * A component that renders text along a circular path with spinning animation.
 * It's wrapped in forwardRef to allow the parent to call its methods.
 */
const CircularText = forwardRef(({
  text,
  radius,
  spinDuration = 20,
  onHover = "speedUp",
  textColor = "text-black",
  textSize = "text-sm",
}, ref) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  /**
   * Defines the transition for the continuous rotation animation.
   * @param {number} duration - The duration for one full 360-degree rotation.
   * @param {number} from - The starting rotation degree.
   * @returns {object} Framer Motion transition object.
   */
  const getRotationTransition = (duration, from) => ({
    from,
    to: from + 360,
    ease: "linear",
    duration,
    repeat: Infinity,
  });

  /**
   * Creates the main transition object for the component.
   * @param {number} duration - The animation duration.
   * @param {number} from - The starting rotation degree.
   * @returns {object} Framer Motion transition object.
   */
  const getTransition = (duration, from) => ({
    rotate: getRotationTransition(duration, from),
  });

  // Starts the initial animation.
  useEffect(() => {
    const startRotation = rotation.get();
    controls.start({
      rotate: startRotation + 360,
      transition: getTransition(spinDuration, startRotation),
    });
    // Disabling exhaustive-deps because we only want this to run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, text, controls]);

  // Memoized hover handlers to avoid re-creation on every render.
  const handleHoverStart = useCallback(() => {
    if (!onHover) return;
    const startRotation = rotation.get();
    let newDuration = spinDuration;

    switch (onHover) {
      case "slowDown": newDuration = spinDuration * 2; break;
      case "speedUp": newDuration = spinDuration / 4; break;
      case "pause": controls.stop(); return;
      case "goBonkers": newDuration = spinDuration / 10; break;
      default: break;
    }
    controls.start({
      rotate: startRotation + 360,
      transition: getTransition(newDuration, startRotation),
    });
  }, [onHover, rotation, spinDuration, controls]);

  const handleHoverEnd = useCallback(() => {
    if (!onHover) return;
    const startRotation = rotation.get();
    controls.start({
      rotate: startRotation + 360,
      transition: getTransition(spinDuration, startRotation),
    });
  }, [onHover, rotation, spinDuration, controls]);
  
  // Expose hover handlers to the parent component via the ref.
  useImperativeHandle(ref, () => ({
    hoverStart: handleHoverStart,
    hoverEnd: handleHoverEnd,
  }), [handleHoverStart, handleHoverEnd]);

  return (
    <motion.div
      className="relative pointer-events-none" // pointer-events-none so it doesn't block underlying elements
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        rotate: rotation,
      }}
      animate={controls}
    >
      {letters.map((letter, i) => {
        const angle = (i / letters.length) * 360;
        return (
          <span
            key={i}
            className={`absolute top-0 left-1/2 -ml-[0.5em] ${textColor} ${textSize}`}
            style={{
              height: `${radius}px`,
              transformOrigin: 'bottom center',
              transform: `rotate(${angle}deg)`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        );
      })}
    </motion.div>
  );
});

export default CircularText;
