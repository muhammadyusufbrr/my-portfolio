"use client";
import React, { useState, useEffect, useCallback } from "react";

type Position = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID_SIZE = 10;
const BOARD_SIZE = 20;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 5, y: 5 }]);
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameStatus, setGameStatus] = useState<"idle" | "playing" | "gameover" | "win">("idle");

  const moveSnake = useCallback(() => {
    setSnake(prev => {
      const head = { ...prev[0] };
      if (direction === "UP") head.y -= 1;
      if (direction === "DOWN") head.y += 1;
      if (direction === "LEFT") head.x -= 1;
      if (direction === "RIGHT") head.x += 1;

      const newSnake = [head, ...prev.slice(0, -1)];

      // collision check
      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= BOARD_SIZE ||
        head.y >= BOARD_SIZE ||
        prev.some(p => p.x === head.x && p.y === head.y)
      ) {
        setGameStatus("gameover");
        return prev;
      }

      // eat food
      if (head.x === food.x && head.y === food.y) {
        const newFood = {
          x: Math.floor(Math.random() * BOARD_SIZE),
          y: Math.floor(Math.random() * BOARD_SIZE),
        };
        setFood(newFood);
        if (prev.length >= 15) setGameStatus("win");
        return [head, ...prev];
      }

      return newSnake;
    });
  }, [direction, food]);

  // game loop
  useEffect(() => {
    if (gameStatus !== "playing") return;
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake, gameStatus]);

  // keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  const startGame = () => {
    setSnake([{ x: 5, y: 5 }]);
    setFood({ x: 10, y: 10 });
    setDirection("RIGHT");
    setGameStatus("playing");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0A1222] h-screen text-white">
      {gameStatus === "idle" && (
        <button onClick={startGame} className="bg-yellow-400 text-black px-6 py-2 rounded-lg">
          start-game
        </button>
      )}

      {gameStatus === "gameover" && (
        <div>
          <p className="text-2xl font-bold text-red-400">GAME OVER!</p>
          <button onClick={startGame} className="mt-2 px-4 py-1 bg-gray-200 text-black rounded">
            start-again
          </button>
        </div>
      )}

      {gameStatus === "win" && (
        <div>
          <p className="text-2xl font-bold text-green-400">WELL DONE!</p>
          <button onClick={startGame} className="mt-2 px-4 py-1 bg-gray-200 text-black rounded">
            play-again
          </button>
        </div>
      )}

      {gameStatus === "playing" && (
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
            gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`,
          }}
        >
          {[...Array(BOARD_SIZE * BOARD_SIZE)].map((_, i) => {
            const x = i % BOARD_SIZE;
            const y = Math.floor(i / BOARD_SIZE);
            const isSnake = snake.some(s => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={i}
                className={`w-5 h-5 ${
                  isSnake ? "bg-teal-400" : isFood ? "bg-yellow-400" : "bg-transparent"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
