import "./styles.scss";

type SquareProps = {
  color: string;
  letter?: string;
  number?: number;
};

export default function Square(props: SquareProps) {
  const { color, letter, number } = props;
  return (
    <div className="square__wrapper">
      <div className="square__letter">{letter}</div>
      <div className="square__number">{number}</div>
      <div className={`square square__${color}`} />
    </div>
  );
}
