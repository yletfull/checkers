import "./styles.scss";

type SquareProps = {
  color: string;
  posX: number,
  posY: number,
  letter?: string;
  number?: number;
  size?: number;
  setSelectedSquare: Function,
};

export default function Square(props: SquareProps) {
  const { 
    color,
    letter,
    number,
    size,
    posX,
    posY,
    setSelectedSquare 
  } = props;

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setSelectedSquare({ domEl: e.currentTarget })
  }

  const handleDragEnd = (e: any) => {
    e.preventDefault();
    setSelectedSquare({ domEl: null })
  }

  return (
    <div 
      className="square__wrapper" 
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
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
