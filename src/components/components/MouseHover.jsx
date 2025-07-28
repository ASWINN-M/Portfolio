import React, { useEffect, useRef } from "react";

export const MouseStarTrail = ({ children }) => {
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const starRenderCount = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const distance = calculateDistance(
        clientX,
        clientY,
        lastRenderPosition.current.x,
        lastRenderPosition.current.y
      );

      if (distance >= 15) {
        lastRenderPosition.current.x = clientX;
        lastRenderPosition.current.y = clientY;
        renderNextStar();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextStar = () => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.className = 'pointer-events-none fixed z-[9999] text-yellow-300';
    star.style.cssText = `
      left: ${lastRenderPosition.current.x}px;
      top: ${lastRenderPosition.current.y}px;
      transform: translate(-50%, -50%);
      font-size: 16px;
      animation: starGlow 1.5s ease-out forwards;
    `;

    document.body.appendChild(star);

    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 1500);

    starRenderCount.current++;
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starGlow {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0) rotate(0deg);
          filter: drop-shadow(0 0 0px #fde047);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(180deg);
          filter: drop-shadow(0 0 8px #fde047);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
          filter: drop-shadow(0 0 0px #fde047);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};
