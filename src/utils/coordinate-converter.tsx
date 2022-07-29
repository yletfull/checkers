export const getPosXByColumnIndex = ({size, columnIndex}: {size: number, columnIndex: number}): number => 
  size / 2 + columnIndex * size;

export const getColumnIndexByPosX = ({size, posX}: {size: number, posX: number}): number => 
  (posX - size / 2) / size

export const getPosYByRowIndex = ({size, rowIndex}: {size: number, rowIndex: number}): number => 
  size / 2 + rowIndex * size;

export const getRowIndexByPosY = ({size, posY}: {size: number, posY: number}): number => 
  (posY - size / 2) / size

export default {
  getPosXByColumnIndex,
  getColumnIndexByPosX,
  getPosYByRowIndex,
  getRowIndexByPosY,
}