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
//
// const cc = a + ' ' + `${b}` + ' ' + c;
//
// console.log(cc);


/*
 * **********************************************************
 * 解构赋值
 * **********************************************************
 * */

// const arr = [1, 2, 3, 4];
// const username = {first: 'can', second: 'volcano'};
//
// const {first, second} = username;
//
// console.log(first + ' ' + second);

/*--------------------------------------------------*/
// good
// function getFullName(obj) {
//     const {first, second} = obj;
//     console.log(first + second);
// }

// best
// function getFullName({first, second}) {
//     console.log(first + ' ' + second);
// }
//
// getFullName(username);

/*--------------------------------------------------*/


// var input = {left: 'can', right: 'volcano'};
//
// function processInput(input) {
//     const {left, right} = input;
//     return {left: left, right: right};
// }
//
// console.log(processInput(input));

/*
 * **********************************************************
 * 对象
 * **********************************************************
 * */

// const a = {c1: 'k1', c2: 'k2'};
// const b = {
//     c1: 'k1',
//     c2: 'k2',
// };
//
// console.log(a.c1);

/*--------------------------------------------------*/

// if reshape unavoidable
// const a = {};
// Object.assign(a, { x: 3 });
//

// good
// const a = { x: null };
// a.x = 3;

// console.log(a);

/*--------------------------------------------------*/

// 属性名是动态修改
// const obj = {
//     id: 5,
//     name: 'San Francisco',
//     [getKey('enabled')]: true,
// };
//
// function getKey(k) {
//     return `a key named ${k}`;
// };
//
//
// console.log(obj);

//使用对象方法简写方式
// const atom = {
//     value: 1,
//
//     addValue(value) {
//         return atom.value + value;
//     },
// };

//使用对象属性简写方式
// const lukeSkywalker = 'Luke Skywalker';
// const obj = {
//     lukeSkywalker,
// };

//把简写风格的属性声明放置在你对象声明的开始部分
// const anakinSkywalker = 'Anakin Skywalker';
// const lukeSkywalker = 'Luke Skywalker';
//
// const obj = {
//     lukeSkywalker,
//     anakinSkywalker,
//     episodeOne: 1,
//     twoJediWalkIntoACantina: 2,
//     episodeThree: 3,
//     mayTheFourth: 4,
// };

//只有当属性名称非法的时候才用引号包裹起来
// const good = {
//     foo: 3,
//     bar: 4,
//     'data-blah': 5,
// };


/*
 * **********************************************************
 * 数组
 * **********************************************************
 * */

//声明数组时使用字面量语法
// const items = [];

//当需要给数组添加内容时使用，push方法代替直接分配
// const someStack = [];
// someStack.push('abracadabra');

//使用解构赋值来复制数组
// const items = ['a', 'b', 'c', 'd', 'e'];
// const itemsCopy = [...items];
// console.log(itemsCopy);

//转变一个类数组的对象为数组的时候，使用Array.from
// function f() {
//     return Array.from(arguments);
// };
//
// let r = f(1, 2, 3);
//
// console.log(r);

//立即执行函数可以写成箭头函数的形式
// (() => {
//     console.log('Welcome to the Internet.');
// })();

//函数表达式
// const arr = [1, 2, 3];
// let r = arr.map(x => x + 1);
// console.log(r);

//不再绑定this
// const boundMethod = (...params) => method.apply(this, params);

//布尔值不可以直接作为参数
// function divide(a, b, { option = false } = {}) {}

//使用默认值语法设置函数参数的默认值。
// function handleThings(opts = {}) {
//     // ...
// }


/*
 * **********************************************************
 * MAP
 * **********************************************************
 * */

// const numbers = [1, 2, 3, 4, 5];
//
// sum === 15;
//
// let sum = 0;
// numbers.forEach(num => sum += num);
// sum === 15;
//
// const sum = numbers.reduce((total, num) => total + num, 0);
// sum === 15;

// for (let value of map.values()) {
//     console.log(value);
// }
//
// for (let item of map.entries()) {
//     console.log(item[0], item[1]);
// }
