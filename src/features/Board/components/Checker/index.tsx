import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { getColumnIndexByPosX, getPosXByColumnIndex, getPosYByRowIndex, getRowIndexByPosY } from "../../../../utils/coordinate-converter";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  size: number;
};

export default function Checker(props: SquareProps) {
  const { color, size, posX, posY } = props;

  const [currentXPosition, setCurrentXPosition] = useState(posX);
  const [currentYPosition, setCurrentYPosition] = useState(posY);

  const row = getRowIndexByPosY({size, posY: currentYPosition});
  const column = getColumnIndexByPosX({size, posX: currentXPosition});
  const width = size / 3;
  const height = size / 3;
  const border = size / 10; 

  const {
    setSelectedChecker,
  } = useActions();

  const {
    selectedSquare,
  } = useTypeSelector((state) => state.checkers);

  const handleDragStart = (e: any) => {
    setSelectedChecker({ domEl: e.target })
    e.target.style.filter = 'opacity(.5)';
  }

  const handleDragEnd = (e: any) => {
    e.target.style.filter = 'opacity(1)';

    const el: any = selectedSquare.domEl;
    const posX = Number(el.dataset.posX);
    const posY = Number(el.dataset.posY);
    const targetRow = getRowIndexByPosY({ size, posY })
    const targetColumn = getColumnIndexByPosX({ size, posX })

    const rowDelta = targetRow - row;
    const columnDelta = targetColumn - column;
    
    if((rowDelta === 1 || rowDelta === -1) && (columnDelta === 1 || columnDelta === -1)) {
      setCurrentXPosition(posX);
      setCurrentYPosition(posY);
    }

    setSelectedChecker({
      domEl: null,
    });
  }

  const handleDragLeave = (e: any) => {
  }

  const handleDragOver = (e: any) => {
    e.preventDefault();
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
          left: currentXPosition + width / 2 - border, 
          top: currentYPosition + height / 2 - border, 
          width: size - width, 
          height: size - height, 
          border: `${border}px solid #c7c7c7`
        }}
        data-pos-x={currentXPosition}
        data-pos-y={currentYPosition}
        data-row={row}
        data-column={column}
      />
);
}
