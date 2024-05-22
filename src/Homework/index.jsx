function Homework() {
  let arr = [22, 0, -45, 1001, 8, -6, 0.1, 101, 2.5, -55555];

  let arr2 = arr.filter((item) => {
    if (item > 0) {
      return item;
    }
  });
  const massages = [
    {
      massage: "hello",
      error: false,
    },
    {
      massage: "hello",
      error: true,
    },
    {
      massage: "hello",
      error: false,
    },
    {
      massage: "hello",
      error: true,
    },
    {
      massage: "hello",
      error: false,
    },
    {
      massage: "hello",
      error: true,
    },
  ];

  let falos = massages.filter((item) => {
    if (!item.error) {
      return true;
    }
  });
  console.log(falos);

  let kek = ["expo", "js", "react", "css", "angular", "vue", "html"];

  let lol = kek.map(item => item.length < 5 ? '*' : item )
   console.log(lol)
    

  const sendMassage = (massage) => {
    return massage;
  };

  const phonk = (number) => number / 2;
  const showConsole = () => console.log("text");
  const phunkyPop = (first, second) => second + first;

  function justText() {
    return "expo";
  }

  function logging(text) {
    console.log("text");
  }

  function add(x, y) {
    const z = 3;
    return x * z * y;
  }

  function onlyNegative(number) {
    if (number < 0) {
      return false;
    } else {
      return true;
    }
  }

  return;
}

export default Homework;
