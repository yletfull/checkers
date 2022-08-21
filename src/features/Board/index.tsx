import "./styles.scss";
import Square from "./components/Square";
import React, { useEffect, useRef, useState } from "react";
import { getPosXByColumnIndex, getPosYByRowIndex } from "../../utils/coordinate-converter";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { OptionsState } from "../../types/options";
import { Checker as CheckerI, Square as SquareI, CheckersColors, CheckersMapItemI } from "../../types/checkers";
import Checker from "./components/Checker";

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
      let color = CheckersColors.White;

      if(isEvenColumn) {
        if(isEvenRow) {
          color = CheckersColors.White;
        } else {
          color = CheckersColors.Black;
        }
      } else {
        if(isEvenRow) {
          color = CheckersColors.Black;
        } else {
          color = CheckersColors.White;
        }
      }

      rows[rowIndex][columnIndex] = {
        posX: getPosXByColumnIndex({size, columnIndex}),
        posY: getPosYByRowIndex({size, rowIndex}),
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
    [0, 1, CheckersColors.Black],
    [0, 3, CheckersColors.Black],
    [0, 5, CheckersColors.Black],
    [0, 7, CheckersColors.Black],
    [1, 0, CheckersColors.Black],
    [1, 2, CheckersColors.Black],
    [1, 4, CheckersColors.Black],
    [1, 6, CheckersColors.Black],
    [2, 1, CheckersColors.Black],
    [2, 3, CheckersColors.Black],
    [2, 5, CheckersColors.Black],
    [2, 7, CheckersColors.Black],

    [5, 0, CheckersColors.White],
    [5, 2, CheckersColors.White],
    [5, 4, CheckersColors.White],
    [5, 6, CheckersColors.White],
    [6, 1, CheckersColors.White],
    [6, 3, CheckersColors.White],
    [6, 5, CheckersColors.White],
    [6, 7, CheckersColors.White],
    [7, 0, CheckersColors.White],
    [7, 2, CheckersColors.White],
    [7, 4, CheckersColors.White],
    [7, 6, CheckersColors.White],
  ]
  const initialCheckersPosition: Array<CheckersMapItemI> = initialCheckersSquares.map(([row, column, color]: any) => {
    const {posX, posY} = tmp[row][column];
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const result: CheckersMapItemI = { posX, posY, color, id };
    return result;
  })
  return initialCheckersPosition;
}

export default function Board() {
  const { size = 0 }: OptionsState = useTypeSelector((state) => state.options)

  const [fieldMap, setFieldMap] = useState<FieldMap>([[]]);
  const [checkersMap, setCheckersMap] = useState<CheckersMap>([[]]);
  const [selectedSquare, setSelectedSquare] = useState<SquareI>({});


  const handleCheckerMove = (args: { posX: number, posY: number, id: string }) => {
    const { posX, posY, id } = args;
    const checkerIndex = checkersMap
      .findIndex((checker: any) => checker.id === id);
    const { color }: any = checkersMap[checkerIndex];
    setCheckersMap((prev) => {
      const resultMap = JSON.parse(JSON.stringify(prev));
      resultMap[checkerIndex] = { posX, posY, color, id };
      return resultMap;
    })
  }

  useEffect(() => {
    const fieldMap: FieldMap = generateFieldMap(8, 8, size);
    setFieldMap(fieldMap);
    const checkersMap: CheckersMap = generateCheckersMap(fieldMap);
    setCheckersMap(checkersMap);
  }, [size])

  return (
    <div 
      className="board"
      style={{height: size * 9, width: size * 9}}
    >
      {fieldMap.map((row) => (
        <React.Fragment>
          {row.map(({color, posX, posY}: any) => 
            <Square 
              posX={posX}
              posY={posY}
              color={color}
              size={size}
              key={`${posX}_${posY}`}
              setSelectedSquare={setSelectedSquare}
            />
          )}
        </React.Fragment>
      ))}
      {checkersMap.map(({color, posX, posY, id}: any) => (
        <Checker 
          posX={posX}
          posY={posY}
          id={id}
          color={color}
          size={size}
          key={id}
          selectedSquare={selectedSquare}
          onCheckerMove={handleCheckerMove}
        />
      ))}
    </div>
  );
}
