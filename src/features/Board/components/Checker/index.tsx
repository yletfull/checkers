import React from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { getColumnIndexByPosX, getRowIndexByPosY } from "../../../../utils/coordinate-converter";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  size: number;
};

export default function Checker(props: SquareProps) {
  const { color, size, posX, posY } = props;

  const row = getRowIndexByPosY({size, posY});
  const column = getColumnIndexByPosX({size, posX});

  const {
    setSelectedChecker,
  } = useActions();

  const {
    selectedChecker
  } = useTypeSelector((state) => state.checkers)


  const handleDragStart = (e: any) => {
    setSelectedChecker({ domEl: e.target })
    e.target.style.filter = 'opacity(.5)';
  }

  const handleDragEnd = (e: any) => {
    e.target.style.filter = 'opacity(1)';
    setSelectedChecker({
      domEl: null,
    });
  }

  const handleDragLeave = (e: any) => {
  }

  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log(e.target, 'over');
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
  }

  return (
      <div 
        onDragStart={(e) => handleDragStart(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnd={(e) => handleDragEnd(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
        draggable
        className={`checker checker__${color}`} 
        style={{ 
          left: posX + (size / 3) / 2 - size / 10, 
          top: posY + (size / 3) / 2 - size / 10, 
          width: size - size / 3, 
          height: size - size / 3, 
          border: `${size / 10}px solid #c7c7c7`
        }}
        data-pos-x={posX}
        data-pos-y={posY}
        data-row={row}
        data-column={column}
      />
);
}
