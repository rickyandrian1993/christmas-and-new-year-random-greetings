// utils/snowflakes.ts
export const generateSnowflakes = (count: number) =>
  Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    delay: Math.random() * 5,
    scale: Math.random() * 0.8 + 0.4,
    duration: Math.random() * 6 + 6
  }));
