import "./styles.scss";
import { useState } from "react";
import Board from "../Board";

export default function Display() {
  const [boardSize, setBorderSize] = useState(90);

  return (
    <div className="display">
      <Board 
        size={boardSize}
      />

      <div className="display__board-size">
        Размер доски: {boardSize}
        
        <input 
          type="range"
          min={30}
          max={90}
          value={boardSize}
          step={1}
          onChange={(e) => setBorderSize(Number(e.currentTarget.value))}
        />
      </div>
    </div>
  );
}
