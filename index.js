{
  // 1. Binary addition

  function addBinary(a, b) {
    return (a + b).toString(2);
  }

  console.log(addBinary(14, 2));

  // output 10000
}

{
  // 2. string converting

  function convert(text) {
    return text.split("").map(loginMethode).join("");
  }
  function loginMethode(data) {
    return data.toUpperCase() === data
      ? data.toLowerCase()
      : data.toUpperCase();
  }

  console.log(convert("HELLO world"));

  // output hello WORLD
}

{
  // 3. credit card masking
  function takeCreditCardNumber(number) {
    return number
      .split("")
      .map((value, index) => {
        if (index < number.length - 4) {
          return "#";
        }
        return value;
      })
      .join("");
  }

  console.log(takeCreditCardNumber("0133132012302303"));

  //  output  ############2303
}

{
  // 4. filter doublicate numbers
  const numbersUnique = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(makeFilter(numbersUnique));

  function makeFilter(numbers) {
    return numbers.filter((value, index, arr) => arr.indexOf(value) === index);
  }

  // output   [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
}

{
  //5. remove elements
  function remove(elements) {
    return elements.filter((_, indx) => indx % 2 === 0);
  }

  console.log(
    remove([
      "keep",
      "remove",
      "keep",
      "remove",
      "keep",
      "remove",
      "keep",
      "remove",
      "keep",
      "remove",
      "keep",
      "remove",
      "keep",
      "remove",
    ])
  );

  // output [ 'keep', 'keep', 'keep', 'keep', 'keep', 'keep', 'keep' ]
}



