/**
 * Created by Administrator on 2016/10/17.
 */

'use strict';

/*
 * **********************************************************
 * 字符串
 * **********************************************************
 * */

// const [a,b,c] = ['apple', 'orange', 'banner'];

// const cc = a+`--${b}--`;

// console.log(cc);


/*
 * **********************************************************
 * 解构赋值
 * **********************************************************
 * */

var arr = [1, 2, 3, 4];
var username = { first: 'can', second: 'volcano' };

var first = arr[0];
var second = arr[1];

console.log(second);

// good
// function getFullName(obj) {
//     const {first, second} = obj;
//     console.log(first + second);
// }

// best
function getFullName(_ref) {
  var first = _ref.first;
  var second = _ref.second;

  console.log(first + second);
}

getFullName(username);

var input = { left: 'can', right: 'volcano' };

function processInput(input) {
  var left = input.left;
  var right = input.right;

  return { left: left, right: right };
}

console.log(processInput(input));

/*
 * **********************************************************
 * 解构赋值
 * **********************************************************
 * */

//# sourceMappingURL=test-compiled.js.map