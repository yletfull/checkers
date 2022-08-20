import { useRef, useState } from "react";
import { Checker as CheckerI } from "../../../../types/checkers";
import { getColumnIndexByPosX, getRowIndexByPosY } from "../../../../utils/coordinate-converter";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  size: number;
  selectedSquare: any,
  setMovedCheckers: Function,
  movedCheckers: Array<CheckerI>
};

export default function Checker(props: SquareProps) {
  const { color, size, posX, posY, selectedSquare, setMovedCheckers, movedCheckers } = props;

  const [currentXPosition, setCurrentXPosition] = useState(posX);
  const [currentYPosition, setCurrentYPosition] = useState(posY);
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
    const posX = Number(el.dataset.posX);
    const posY = Number(el.dataset.posY);
    const targetRow = getRowIndexByPosY({ size, posY })
    const targetColumn = getColumnIndexByPosX({ size, posX })

    const rowDelta = targetRow - row;
    const columnDelta = targetColumn - column;
    
    if((rowDelta === 1 || rowDelta === -1) && (columnDelta === 1 || columnDelta === -1) && !el.dataset.checkerId) {
      setCurrentXPosition(posX);
      setCurrentYPosition(posY);
      setMovedCheckers((prev: Array<CheckerI>) => prev.length ? [...prev, { domEl: currentChecker.current }] : [{ domEl: currentChecker.current }]);
      el.dataset.checkerId = movedCheckers.length === 0 ? 0 : movedCheckers.length;
    }

  }

  const handleDragLeave = (e: any) => {
    const el: any = selectedSquare.domEl;
    const findedElIndex = movedCheckers.findIndex((check: any) => el.dataset.posX === check.domEl.dataset.posX)
    setMovedCheckers((prev: any) => prev.map((_: HTMLElement, index: number) => index !== findedElIndex))
    el.removeAttribute('data-checker-id');
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
        ref={currentChecker}
      />
);
}
