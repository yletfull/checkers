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

  return (
    <React.Fragment>
      <div 
        className={`checker checker__${color}`} 
        style={{width: size - size / 3, height: size - size / 3, left: posX + (size / 3) / 2, top: posY + (size / 3) / 2}}
      />
      <div 
        className={` checker checker__filler`} 
        style={{width: size - size / 5, height: size - size / 5, left: posX + (size / 5) / 2, top: posY + (size / 5) / 2}}
      />
    </React.Fragment>
);
}
