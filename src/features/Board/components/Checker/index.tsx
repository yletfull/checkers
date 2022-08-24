import { useRef, } from "react";
import { CheckersMap } from "../../../../types/checkers";
import { getColumnIndexByPosX, getRowIndexByPosY } from "../../../../utils/coordinate-converter";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  id: string,
  size: number;
  selectedSquare: any,
  checkersMap: CheckersMap,
  onCheckerMove: Function,
};

export default function Checker(props: SquareProps) {
  const { 
    color,
    size,
    posX,
    posY,
    id,
    selectedSquare,
    checkersMap,
    onCheckerMove
  } = props;


  const currentXPosition = posX;
  const currentYPosition = posY;
  const currentChecker = useRef(null);

  const row = getRowIndexByPosY({size, posY: currentYPosition});
  const column = getColumnIndexByPosX({size, posX: currentXPosition});
  const width = size / 3;
  const height = size / 3;
  const border = size / 10; 

  const handleDragStart = (e: any) => {
    e.target.style.filter = 'opacity(.5)';
  }

  const handleDragEnd = (e: any) => {
    e.target.style.filter = 'opacity(1)';

    const el: any = selectedSquare.domEl;
    const targetPosX = Number(el.dataset.posX);
    const targetPosY = Number(el.dataset.posY);

    const targetRow = getRowIndexByPosY({ size, posY: targetPosY })
    const targetColumn = getColumnIndexByPosX({ size, posX: targetPosX })

    const rowDelta = targetRow - row;
    const columnDelta = targetColumn - column;

    const gameMovedRules = [
      (rowDelta === 2 || rowDelta === -2) && (columnDelta === 2 || columnDelta === -2),
      (rowDelta === 1 || rowDelta === -1) && (columnDelta === 1 || columnDelta === -1)
    ]

    const selectedSquareHasChecker = checkersMap
      .find((checker) => checker.row === targetRow && checker.column === targetColumn && checker.id !== id);

    const sorroundingAvailableToEatCheckers = checkersMap
      .map((sorroundingChecker) => 
      ((sorroundingChecker.row === targetRow - 1 || sorroundingChecker.row === targetRow + 1) 
        || (sorroundingChecker.column === targetColumn - 1 || sorroundingChecker.column === targetColumn + 1))
          && sorroundingChecker.color !== color)

    console.log(sorroundingAvailableToEatCheckers);

    if(gameMovedRules.some((isSuccess) => isSuccess)) {
      if(!selectedSquareHasChecker) {
        if(
          true
        ) {
          onCheckerMove({ posX: targetPosX, posY: targetPosY, row: targetRow, column: targetColumn, color, id });
        }
      }
    }
  }

  const handleDragLeave = (e: any) => {
    e.preventDefault();
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
        data-id={id}
        ref={currentChecker}
      />
);
}
