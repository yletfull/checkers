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

  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget, 'over');
  }

  return (
    <div 
      className="square__wrapper" 
      onDragOver={handleDragOver}
      style={{left: posX, top: posY}}
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
