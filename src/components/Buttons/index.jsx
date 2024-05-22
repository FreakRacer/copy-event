import reset from "../../assets/icons/reset.png";

function Buttons({ num, setNum }) {
  function plus() {
    return setNum(num + 3);
  }

  function minus() {
    if (num <= 1) {
      return setNum(0);
    } else {
      return setNum(num - 2);
    }
  }

  function numReset() {
    return setNum(0);
  }
  return (
    <div className="buttons">
      <div className="button" onClick={plus}>
        +
      </div>
      <div className="button" onClick={numReset}>
        <img src={reset} alt="reset" />
      </div>
      <div className="button" onClick={minus}>
        -
      </div>
    </div>
  );
}

export default Buttons;
