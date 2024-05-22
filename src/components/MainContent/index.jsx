import Buttons from "../Buttons";
import Number from "../Number";
import { useState } from "react";

function MainContent() {
  const [num, setNum] = useState(0);

  return (
    <main>
      <Number num={num} />
      <Buttons num={num} setNum={setNum} />
    </main>
  );
}

export default MainContent;
