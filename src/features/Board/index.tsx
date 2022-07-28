import "./styles.scss";
import Square from "./components/Square";
import { useState } from "react";

enum Colors {
  White = 'white',
  Black = 'black',
}

const generateFieldMap = (height: number, width: number): Array<Array<any>> => {
  const rows: Array<any> = [];
  let isEvenRow: boolean = false;
  let isEvenColumn: boolean = false;

  for(let rowIndex = 0; rowIndex < height; rowIndex++) {
    isEvenRow = !isEvenRow;
    rows[rowIndex] = [];

    for(let columnIndex = 0; columnIndex < width; columnIndex++) {
      isEvenColumn = !isEvenColumn;
      let color = Colors.White;

      if(isEvenColumn) {
        if(isEvenRow) {
          color = Colors.White;
        } else {
          color = Colors.Black;
        }
      } else {
        if(isEvenRow) {
          color = Colors.Black;
        } else {
          color = Colors.White;
        }
      }

      rows[rowIndex][columnIndex] = { row: rowIndex + 1, column: columnIndex + 1, color }; 
    }
  }
  return rows;
}

interface BoardProps {
  boardSize: number,
}

export default function Board(props: BoardProps) {
  const { boardSize } = props;
  const fieldMap = generateFieldMap(8, 8);

  return (
    <div className="board">
      {fieldMap.map((row) => (
        <div className="row">
          {row.map(({color}) => 
            <Square 
              color={color}
              size={boardSize}
            />
          )}
        </div>
      ))}
    </div>
  );
}
