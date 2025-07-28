import React, { useEffect, useRef } from "react";

export const MouseStarTrail = ({ 
  children,
  starSize = 12,
  starColor = "#fde047",
  glowIntensity = 8,
  trailDistance = 10,
  starLifetime = 1000,
  starOpacity = 1
}) => {
  const lastRenderPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const distance = calculateDistance(
        clientX,
        clientY,
        lastRenderPosition.current.x,
        lastRenderPosition.current.y
      );

      if (distance >= trailDistance) {
        lastRenderPosition.current.x = clientX;
        lastRenderPosition.current.y = clientY;
        createStar(clientX, clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [trailDistance]);

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const createStar = (x, y) => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.className = 'pointer-events-none fixed z-[9999]';
    star.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%);
      font-size: ${starSize}px;
      color: ${starColor};
      animation: starGlow ${starLifetime}ms ease-out forwards;
      opacity: ${starOpacity};
    `;

    document.body.appendChild(star);

    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, starLifetime);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starGlow {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0) rotate(0deg);
          filter: drop-shadow(0 0 0px ${starColor});
        }
        50% {
          opacity: ${starOpacity};
          transform: translate(-50%, -50%) scale(1) rotate(180deg);
          filter: drop-shadow(0 0 ${glowIntensity}px ${starColor});
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.3) rotate(360deg);
          filter: drop-shadow(0 0 0px ${starColor});
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [starColor, glowIntensity, starOpacity]);

  return <>{children}</>;
};