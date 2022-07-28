import "./styles.scss";

type SquareProps = {
  color: string;
  letter?: string;
  number?: number;
  size?: number;
};

export default function Square(props: SquareProps) {
  const { color, letter, number, size } = props;
  return (
    <div className="square__wrapper" >
      <div className="square__letter">{letter}</div>
      <div className="square__number">{number}</div>
      <div 
        className={`square square__${color}`} 
        style={{width: size, height: size}}
      />
    </div>
  );
}
