import "./styles.scss";
import Square from "./components/Square";
import { useEffect, useState } from "react";
import Checker from "./components/Checker";

enum Colors {
  White = 'white',
  Black = 'black',
}

type FieldMap = Array<Array<any>>;
type CheckersMap = Array<object>;

const generateFieldMap = (height: number, width: number, size: number): FieldMap => {
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

      rows[rowIndex][columnIndex] = {
        posX: size / 2 + columnIndex * size,
        posY: size / 2 + rowIndex * size,
        row: rowIndex + 1,
        column: columnIndex + 1,
        color 
      }; 
    }
  }
  return rows;
}

const generateCheckersMap = (fieldMap: FieldMap): CheckersMap => {
  const tmp = fieldMap;
  const initialCheckersSquares = [
    [0, 1, Colors.Black],
    [0, 3, Colors.Black],
    [0, 5, Colors.Black],
    [0, 7, Colors.Black],
    [1, 0, Colors.Black],
    [1, 2, Colors.Black],
    [1, 4, Colors.Black],
    [1, 6, Colors.Black],
    [2, 1, Colors.Black],
    [2, 3, Colors.Black],
    [2, 5, Colors.Black],
    [2, 7, Colors.Black],
  ]
  const initialCheckersPosition = initialCheckersSquares.map(([row, column, color]: any) => {
    const {posX, posY} = tmp[row][column];
    return {posX, posY, color};
  })
  return initialCheckersPosition;
}

interface BoardProps {
  size: number,
}

export default function Board(props: BoardProps) {
  const { size } = props;
  const [fieldMap, setFieldMap] = useState<FieldMap>([[]]);
  const [checkersMap, setCheckersMap] = useState<CheckersMap>([[]]);

  useEffect(() => {
    const fieldMap: FieldMap = generateFieldMap(8, 8, size);
    setFieldMap(fieldMap);
    const checkersMap: CheckersMap = generateCheckersMap(fieldMap);
    setCheckersMap(checkersMap);
  }, [size])

  return (
    <div className="board">
      {fieldMap.map((row) => (
        <div className="row">
          {row.map(({color, posX, posY}: any) => 
            <Square 
              posX={posX}
              posY={posY}
              color={color}
              size={size}
              key={`${posX}_${posY}`}
            />
          )}
        </div>
      ))}
      {checkersMap.map(({color, posX, posY}: any) => (
        <Checker 
          posX={posX}
          posY={posY}
          color={color}
          size={size}
          key={`${posX}_${posY}`}
        />
      ))}
    </div>
  );
}
