/**739
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  //Initialize stack with last index
  let stack = [temperatures.length - 1]; 
  let res = new Array(temperatures.length);

  //push 0 to last index
  res[temperatures.length - 1] = 0;
  for (let i = temperatures.length - 2; i >= 0; i--) {
    while (stack.length) {// if temp[top] < temp[i], pop it 
      if (temperatures[stack[stack.length - 1]] < temperatures[i]) {
        stack.pop();
      } else break;
    }

    if (stack.length == 0) res[i] = 0;
    else res[i] = stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};


var dailyTemperatures = function (temperatures) {
  let stack = [];  // monotonic decreasing stack
  let res = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }
  return res;
};

temperatures= [89,62,70,58,47,47,46,76,100,70]
console.log(dailyTemperatures(temperatures));
