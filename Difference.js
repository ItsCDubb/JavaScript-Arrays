function init() {

    numbers = [];

    for (var i = 1; i <= 100; i++) {
        numbers.push(Math.floor(Math.random() * 100)+1);
    }
    return numbers;
}

/* function findGreatest() {

  numbers = [10986, 1, 48, 72, 16];
  var large = numbers[0];
  var small = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > large) {
      large = numbers[i];
    } 
    if (numbers[i] < small) {
      small = numbers[i];
    }
  }

  return large; */

  // console.log(large);
  // console.log(small);
}
