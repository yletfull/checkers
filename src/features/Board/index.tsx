import "./styles.scss";
import Square from "./components/Square";

export default function Board() {
  type Letters = Array<string>;
  type Numbers = Array<number>;

  const letters: Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const numbers: Numbers = [1, 2, 3, 4, 5, 6, 7, 8];    

  const generateFieldMap = (letters: Letters, numbers: Numbers): Array<Array<any>> => {
    return numbers.map((number: number) => {
      return letters.map((letter: string) => ({letter, number}))
    })
  }

  const fieldMap = generateFieldMap(letters, numbers);

  return (
    <div className="board">
      {fieldMap.map((row) => (
        <div className="row">
          {row.map(({letter, number}) => 
            <Square 
              color="black" 
              letter={letter}
              number={number}
            />
          )}
        </div>
      ))}
    </div>
  );
}
