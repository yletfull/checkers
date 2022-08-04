import { useActions } from "../../../../hooks/useActions";
import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  letter?: string;
  number?: number;
  size?: number;
};

export default function Square(props: SquareProps) {
  const { color, letter, number, size, posX, posY } = props;

  const {
    setSelectedSquare,
  } = useActions();

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setSelectedSquare({ domEl: e.currentTarget })
  }

  return (
    <div 
      className="square__wrapper" 
      onDragOver={handleDragOver}
      style={{left: posX, top: posY}}
      data-pos-x={posX}
      data-pos-y={posY}
    >
      <div className="square__letter">{letter}</div>
      <div className="square__number">{number}</div>
      <div 
        className={`square square__${color}`} 
        style={{width: size, height: size}}
      />
    </div>
  );
}
