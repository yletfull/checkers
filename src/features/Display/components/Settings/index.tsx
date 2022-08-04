import "./styles.scss";
import { useState } from "react";
import Board from "../../../Board";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { useActions } from "../../../../hooks/useActions";
import { Options } from "../../../../types/options";

export default function Display() {
  const {
    setOptions,
  } = useActions();

  const {
    size: boardSize
  } = useTypeSelector((state) => state.options)

  const handleSizeSet = (size: number) => {
    localStorage.setItem(
      Options.Size,
      size.toString()
    );
    setOptions({
      name: Options.Size,
      value: size,
    });
  }

  useState(() => {
    setOptions({
      name: Options.Size,
      value: Number(localStorage.getItem(Options.Size)),
    });
  })

  return (
      <div className="display__board-size">
        Размер доски: {boardSize}
        
        <input 
          type="range"
          min={30}
          max={90}
          value={boardSize}
          step={1}
          onChange={(e) => handleSizeSet(Number(e.currentTarget.value))}
        />
      </div>
  );
}
