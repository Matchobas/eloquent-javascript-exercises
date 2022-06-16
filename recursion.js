function isEven(n) {
  if (n === 0) {
    return true;
  }

  if (n === (1 || -1)) {
    return false;
  }

  if (n < 0) {
    return isEven(n + 2);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-67));
console.log(isEven(-1294));