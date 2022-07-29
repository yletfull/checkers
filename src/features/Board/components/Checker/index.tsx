import React from "react";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  size: number;
};

export default function Checker(props: SquareProps) {
  const { color, size, posX, posY } = props;

  const handleDragStart = (e: any) => {
    // console.log(e.target, 'start');
  }

  const handleDragLeave = (e: any) => {
    // console.log(e.target, 'leave');
  }

  const handleDragEnd = (e: any) => {
    // console.log(e, 'end');
  }

  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget, 'over');
    // e.targer.styles.background = 'red'
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
    // console.log(e.target, 'drop');
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
        style={{ left: posX + (size / 3) / 2 - size / 10, top: posY + (size / 3) / 2 - size / 10, width: size - size / 3, height: size - size / 3, border: `${size / 10}px solid #c7c7c7`}}
      />
);
}
