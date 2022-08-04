import "./styles.scss";
import Board from "../Board";
import Settings from "./components/Settings";

export default function Display() {
  return (
    <div className="display">
      <Board />
      <Settings />
    </div>
  );
}
