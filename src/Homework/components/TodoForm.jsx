import { useState } from "react";
function TodoForm({ addText }) {
  const [userInput, setUserInput] = useState("");

  const holder = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addText(userInput);
    setUserInput("")
  };




  return (
    <form>
      <button onClick={onSubmit}>+
      </button>
      <input
        type="text"
        placeholder="new dos"
        value={userInput}
        onChange={holder}
      />
    </form>
  );
}
export default TodoForm;
