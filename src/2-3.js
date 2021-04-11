// let [a, b, c] = [1, 2, [3, 4]];
// console.log([a, b, c]);

// const { LoaderOptionsPlugin } = require("webpack")

// let [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a,b,c,d)

// console.log(1)
// console.log(1)

// for (let i = 0; i < 2; i++)
// {
//     console.log(1)
// }

// let [a, b, c] = "imooc";
// console.log(a, b, c);

// let [a, b = "shit", c] = [1, 2, [3, 4]];
// console.log([a, b, c]);

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function (elem, index, arr)
// {
//     console.log(elem, index);
// })

// let all = arr.reduce(function (pre, now, index, array)
// {
//     return pre + now;
// }, 0)
// console.log(all)

// let arr = [1, 2, 3, 7, 4, 1, 2];
// let max = arr.reduce(function (pre, now)
// {
//     return Math.max(pre, now);
// })

// let newArr = arr.reduce(function (prev, cur)
// {
//     prev.indexOf(cur) == -1 && prev.push(cur);
//     return prev;
// }, [])
// console.log(max);
// console.log(newArr);

// let arr = [1, 2, 3, 7, 4, 1, 2];
// let res = arr.findIndex(function (value) {
//     return value == 3;
// })
// console.log(res);

// let rs = arr.find(function (value) {
//     return value == 7;
// })
// console.log(rs);

// [1, 2, 3, 4, 5].forEach(function(i) {
//     if (i === 2) {
//         return;
//     } else {
//         console.log(i)
//     }
// })

// let arr = [1, 2, 3, 7, 4, 1, 2];
// arr.forEach(function (value,index,a) {
//     console.log(value,index,a);
// })

// let newArr = arr.map(function (value) {
//     value += 1;
//     return value;
// })
// console.log(newArr);

// let newArr = arr.filter(function (value) {
//     return value <=4;
// })
// console.log(newArr);

// let newArr = arr.some(function (value) {
//     return value == 0;
// })
// console.log(newArr);

// let newArr = arr.every(function (value) {
//     console.log(value);
//     return value < 7;
// })
// console.log(newArr);

// for (let value of arr.keys()) {
//     console.log(value);
// }

// for (let [value, item] of arr.entries()) {
//     console.log(item, value);
// }

//类数组举例
// let doms_1 = document.getElementsByClassName('xx')
// let doms_2 = document.getElementsByTagName('xx')
// let doms_3 = document.querySelectorAll('.xx')
// console.log(doms_1)
// console.log(doms_2)
// console.log(doms_3)

//ES5将类数组转换为真数组
// let doms_1 = document.getElementsByClassName('xx')
// let array_1 = Array.prototype.slice.call(doms_1)
// console.log(array_1)

//伪数组举例 ES6方法转换为真数组
// let arrayLike = {
//     0: '1',
//     1: '2',
//     2: '3',
//     length: 3
// }
// let arr=Array.from(arrayLike)
// console.log(arr)

//ES5声明数组出现问题
// var arr_1 = new Array(1, 2, 3)
// console.log(arr_1)
// var arr_2 = new Array(3)
// console.log(arr_2)

//使用Array.of()就可以解决
// let arr = Array.of(3)
// console.log(arr)

//使用Array.of()合并不同数据类型
// let arr = Array.of(123, 'Faker', [1, 2, 3], { name: 'Faker' })
// console.log(arr);

//copyWithin练习
// let arr = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
// arr.copyWithin(2, 6, 8)
// console.log(arr)

//copyWithin练习
// let arr = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
// arr.copyWithin(2, 3, 8)
// console.log(arr)

//fill()练习
// let arr = new Array(3).fill(1)
// console.log(arr)

//fill()练习
// let arr = Array.of(1, 2, 3, 4, 5, 6, 7)
// arr.fill('777', 2, 4)
// console.log(arr)

//indexOf和include
// let arr = Array.of(1, 2, 3, NaN)
// if (arr.includes(NaN)) {
//     console.log('YES')
// }
// else if (!arr.includes(NaN)) {
//     console.log('NO')
// }

//设置默认参数
// function foo(x, y = '123') {
//     console.log(x, y)
// }
// foo('abc')

//错误 重复声明参数变量会报错
// function foo(x, y = '123') {
//     let x = 1
// }
// foo('abc')

//解构赋值
// function foo({ x, y = '123' } = {}) {
//     console.log(x, y)
// }
// foo({
//     x: '1',
// })

//length属性
// function foo(a, b, c = '123') {

// }
// console.log(foo.length)

//作用域
// let a = 1
// function foo_1(a, b = a) {
//     console.log(b)
// }
// foo_1(2) // 2

// let x = 1
// function foo_2(y = x) {
//     x = 2
//     console.log(y)
// }
// foo_2() // 1

//练一下Function
// let a = new Function('alert("123")')
// a()

//name属性
// function foo() { }
// console.log(foo.name) // foo

// console.log((new Function).name)

// function foo() { }
// console.log(foo.bind().name) //bound foo
// console.log(function () { }.bind().name) //bound
// console.log((new Function).bind().name) //bound anonymous

//扩展运算符
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// console.log(...a)
// a.push(...b)
// console.log(a)

// let a = 'Faker'
// console.log(...a)

// function foo(a, ...b) {
//     console.log(a)
//     console.log(b)
// }
// foo(1, 2, 3)

//arguments
// function foo(a, b, c) {
//     console.log(arguments)
// }
// foo(1, 2, 3)

//变量提升
// console.log(foo)
// let foo = function (x, y) {
//     return x + y
// }

//箭头函数
// let foo = (x, y) => {
//     return x + y
// }
// console.log(foo(1, 2))

// let oBtn = document.querySelector('#btn')
// oBtn.addEventListener('click', function () {
//     setTimeout( () => {
//         console.log(this)
//     },1000)
// })

// let a = (...arr) => {
//     console.log(arr)
// }
// a(1, 2, 3)

// let a = new String('123')
// let b = '123'
// console.log(a == b)
// console.log(a === b)
// console.log(a)
// console.log(b)

// let a = '123'
// console.log(a.length)
// a.t = 1
// console.log(a.t)

// let a = '123'
// console.log(null == null)

// let person = new Object()
// person.name = 'Faker'
// person.age = 25
// person.job = 'T1.MID'
// person.sayName = function () {
//     console.log(person.name)
// }

// console.log(person)
// let person = {
//     name: 'Faker',
//     age: 25,
//     job: 'T1 MID',
//     sayName() {
//         console.log(this.name)
//     }
// }
// person.sayName()

// let person = {}
// Object.defineProperty(person, 'name', {
//     writable: false,
//     value: 'Faker'
// })
// person.name = 'Bang'
// console.log(person.name)

// let book = {
//     _year: 2004,
//     edition: 1
// }
// Object.defineProperty(book, 'year', {
//     get: function () {
//         return this._year
//     },
//     set: function (newData) {
//         if (newData > 2004) {
//             this._year = newData
//             this.edition += newData - 2004
//         }
//     }
// })
// book.year = 2005
// console.log(book.edition)

// let person = {}
// Object.defineProperties(person, {
//     _name: {
//         writable: true,
//         value:'Faker'
//     },
//     _age: {
//         writable: true,
//         value:25
//     },
//     age: {
//         get: function () {
//             return this._age
//         },
//         set: function (newAge) {
//             if (newAge > 0) {
//                 this._age = newAge
//             }
//         }
//     }
// })
// person.age = 26
// console.log(person.age)

// let person = {}
// Object.defineProperties(person, {
//     _name: {
//         writable: true,
//         value:'Faker'
//     },
//     _age: {
//         writable: true,
//         value:25
//     },
//     age: {
//         get: function () {
//             return this._age
//         },
//         set: function (newAge) {
//             if (newAge > 0) {
//                 this._age = newAge
//             }
//         }
//     }
// }) 

// let descriptor = Object.getOwnPropertyDescriptor(person, 'age')
// console.log(descriptor)

//工厂模式
// function createPerson(name, age, job) {
//     let person = new Object
//     person.name = name
//     person.age = age
//     person.job = job
//     person.sayName = function () {
//         console.log(this.name)
//     }
//     return person
// }
// let Faker = createPerson('Faker', 25, 'MID')
// let Bang = createPerson('Bang', 24, 'BOT')
// console.log(Faker)
// console.log(Bang)

//构造函数
// function Person(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
//     this.sayName = function () {
//         console.log(this.name)
//     }
// }
// let Faker =new Person('Faker', 25, 'MID')
// let Bang =new Person('Bang', 24, 'BOT')
// console.log(Faker)
// console.log(Bang)

//构造函数性质
// function Person(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
//     this.sayName = function () {
//         console.log(this.name)
//     }
// }
// let Faker = new Person('Faker', 25, 'MID')
// let Bang = new Person('Bang', 24, 'BOT')
// console.log(Faker.constructor == Person)
// console.log(Faker instanceof Object)
// console.log(Faker instanceof Person)

// let Bengi = new Person('Bengi', 25, 'JUG')
// console.log(Bengi)

// Person('Wolf', 23, 'SUP')
// window.sayName()

// let n = new Object()
// Person.call(n, 'Esayhoon', 25, 'MID')
// n.sayName()

// Line 61 in solution.js
//              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type ListNode");
//              ^
// TypeError: [] is not valid value for the expected return type ListNode
//     Line 61: Char 20 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 42: Char 26 in solution.js (Object.<anonymous>)
//     Line 1200: Char 30 in loader.js (Module._compile)
//     Line 1220: Char 10 in loader.js (Object.Module._extensions..js)
//     Line 1049: Char 32 in loader.js (Module.load)
//     Line 937: Char 14 in loader.js (Function.Module._load)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
//     Line 17: Char 47 in run_main_module.js


// let name = 'Faker'
// let age = '25'
// let area = 'LCK'
// let obj = {
//     name,
//     age,
//     area,
//     draw() {
//         console.log(area + ':' + name)
//     }
// }
// obj.draw()

// console.log(Object.is(NaN, NaN))
// console.log(Object.is(1, 2))
// console.log(Object.is(1, '1'))

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// let obj_2 = {
//     name: 'Faker',
//     age: 25
// }
// console.log(Object.is(obj_1,obj_2))

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// let obj_2 = obj_1
// console.log(Object.is(obj_1,obj_2))

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// let obj_2 = {
//     ...obj_1,
//     team: 'SKT T1'
// }
// console.log(obj_2)

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// let obj_2 = {
//     team: 'SKT T1'
// }
// console.log(Object.assign(obj_1, obj_2))

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// let obj_2 = {
//     name: 'Bang',
//     team: 'SKT T1'
// }
// console.log(Object.assign(obj_1, obj_2))

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// console.log('name' in obj_1)
// console.log('team' in obj_1)

// let a = [1, 2, 3]
// console.log(3 in a)
// console.log(1 in a)

// let obj_1 = {
//     name: 'Faker',
//     age: 25
// }
// // for (let key in obj_1) {
// //     console.log(key, obj_1[key])
// // }
// Object.getOwnPropertyNames(obj_1).forEach(key => {
//     console.log(key, obj_1[key])
// })

// let obj_1 = {
//     name: 'Faker',
//     age: 24,
//     food: {
//         vegetable: 'broccoli',
//         mainFood: 'poke',
//     }
// }
// let obj_2 = {
//     name: 'Bang',
//     age: 23,
//     food: {
//         vegetable: '1',
//         mainFood: '1',
//         coffee: 'Americano'
//     }
// }
// Object.assign(obj_2, obj_1)
// console.log(obj_2)

// let obj_1 = {
//     name: 'Faker',
//     age: 24,
//     food: {
//         vegetable: 'broccoli',
//         mainFood: 'poke',
//     }
// }
// let str = JSON.stringify(obj_1)
// let obj_2 = JSON.parse(str)
// console.log(obj_2)
// // {name: "Faker", age: 24, food: {vegetable: "broccoli", mainFood: "poke"}}


// 深拷贝
// 检查目标元素类型
// let checkType = data => {
//     return Object.prototype.toString.call(data).slice(8, -1)
// }

// let deepClone = target => {
//     let targetType = checkType(target)
//     let result
//     if (targetType === 'Object') {
//         result = {}
//     }
//     else if (targetType === 'Array') {
//         result = []
//     }
//     else {
//         return target
//     }
//     for (let i in target) {
//         let value = target[i]
//         if (checkType(value) === 'Object' || checkType(value) === 'Array') {
//             result[i] = deepClone(value)
//         } else {
//             result[i] = value
//         }
//     }
//     return result
// }
// let obj_1 = {
//     color: 'red',
//     name: {
//         a: 1,
//         b: 2
//     }
// }
// let obj_2 = deepClone(obj_1)
// console.log(obj_2)

// function Person(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
//     this.sayName = sayName
// }
// function sayName() {
//     console.log(this.name)
// }
// let a = 1
// console.log(window.a)
// let Faker = new Person('Faker', 24, 'T1 MID')
// Faker.sayName()

// function Person() { }
// Person.prototype.name = 'Faker'
// Person.prototype.age = 24
// Person.prototype.job = 'SKT MID'
// Person.prototype.sayName = function () {
//     console.log(this.name)
// }
// let Faker = new Person()
// let Bang = new Person()
// Bang.name = 'Bang'
// Bang.job = 'SKT BOT'
// Faker.sayName() // Faker
// Bang.sayName() // Bang

// function Person() { }
// Person.prototype.name = 'Faker'
// Person.prototype.age = 24
// console.log(Person.prototype.name)

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this._sex = -1
//     }
//     showName() {
//         console.log(this.name)
//     }
//     get sex() {
//         return this._sex
//     }
//     set sex(value) {
//         this._sex = value
//     }
// }
// let clozer = new Person('clozer', '19')
// clozer.showName()
// clozer.sex = 'fff'
// clozer.sex = 'abc'
// console.log(clozer.sex)
// class SKT extends Person {
//     constructor(name, age, id, job) {
//         super(name, age)
//         this.id = id
//         this.job = job
//     }
//     showWork() {
//         console.log(this.name + ' ' + this.age + ' ' + this.id + ' ' + this.job)
//     }
// }
// let faker = new SKT('이상혁', '24', 'Faker', 'SKT T1 MID')
// faker.showWork()
// faker.showName()

// // 父类
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this._sex = -1
//     }
//     showName() {
//         console.log(this.name)
//     }
//     // get方法获取属性
//     get sex() {
//         if (this._sex === 1) {
//             return 'male'
//         } else if (this._sex === 0) {
//             return 'female'
//         } else {
//             return 'error'
//         }
//     }
//     // set方法设置属性
//     set sex(value) {
//         if (value === 1 || value === 0) {
//             this._sex = value
//         }
//     }
// }
// // 子类继承父类
// class Player extends Person {
//     constructor(name, age, team) {
//         super(name, age)
//         this.team = team
//     }
//     showTeam() {
//         console.log(this.team)
//     }
// }

// // 父类测试
// let faker = new Person('Faker', 24)
// faker.sex = 1
// console.log(faker.sex)

// // 子类测试，可以继承父类的set和get方法
// let Wolf = new Player('Wolf', 24, 'SK Telecom T1')
// Wolf.sex = 1
// console.log(Wolf.sex)

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     static test() {
//         console.log('Static Test')
//     }
// }
// Person.sex = 'female'
// Person.test()
// console.log(Person.sex)

// let a = Symbol()
// let b = Symbol()
// console.log(a === b)

// let a = Symbol('Faker')
// let b = Symbol('Faker')
// console.log(a === b)

// let obj = {
//     name: 'Faker',
//     toString() {
//         return this.name
//     }
// }
// let a = Symbol(obj)
// console.log(a.toString())

// let a = Symbol('Faker')
// console.log(a)

// let a = Symbol.for('Faker')
// console.log(Symbol.keyFor(a))

// let SKT = {
//     Faker: { name: 'Faker', age: 24, play: 'Mid' },
//     Faker: { name: 'Faker', age: 24, play: 'Bot' }
// }
// console.log(SKT) // {Faker: {…}}

// let mid = Symbol('Faker')
// let bot = Symbol('Faker')
// let SKT = {
//     [mid]: { name: 'Faker', age: 24, play: 'Mid' },
//     [bot]: { name: 'Faker', age: 24, play: 'Bot' }
// }
// console.log(SKT) // {Symbol(Faker): {…}, Symbol(Faker): {…}}
// console.log(SKT[mid]) // {name: "Faker", age: 24, play: "Mid"}
// console.log(SKT[bot]) // {name: "Faker", age: 24, play: "Bot"}
// for (let a in SKT) {
//     console.log(a)
// }

// let mid = Symbol('Faker')
// let SKT = {
//     [mid]: { name: 'Faker', age: 24, play: 'Mid' },
//     Bang: { name: 'Bang', age: 24, play: 'Bot' }
// }

// // 普通遍历 只能遍历普通属性
// for (let a in SKT) {
//     console.log(a, SKT[a]) // Bang {name: "Bang", age: 24, play: "Bot"}
// }

// // Object.keys() 只能遍历普通属性
// for (let key of Object.keys(SKT)) {
//     console.log(key, SKT[key])
//     // Bang {name: "Bang", age: 24, play: "Bot"}
// }

// // Object.getOwnPropertyNames() 指定遍历普通属性
// for (let key of Object.getOwnPropertyNames(SKT)) {
//     console.log(key, SKT[key])
//     // Bang {name: "Bang", age: 24, play: "Bot"}
// }

// // Object.getOwnPropertySymbols() 指定遍历Symbol作为Key的属性
// for (let key of Object.getOwnPropertySymbols(SKT)) {
//     console.log(key, SKT[key])
//     // Symbol(Faker) {name: "Faker", age: 24, play: "Mid"}
// }

// // 所有属性形式均可遍历
// for (let key of Reflect.ownKeys(SKT)) {
//     console.log(key, SKT[key])
//     // Bang {name: "Bang", age: 24, play: "Bot"}
//     // Symbol(Faker) {name: "Faker", age: 24, play: "Mid"}
// }

// let a = new Set([1, 2, 3])
// a.add('Faker').add('Bang')
// console.log(a)


// let a = new Set(['Faker', 'Bengi', 'Wolf'])
// a.forEach(item => {
//     console.log(item)
//     // Faker
//     // Bengi
//     // Wolf
// });

// let a = new Set(['Faker', 'Bengi', 'Wolf'])
// for (let item of a.values()) {
//     console.log(item)
//     // Faker
//     // Bengi
//     // Wolf
// }
// for (let item of a.keys()) {
//     console.log(item)
//     // Faker
//     // Bengi
//     // Wolf
// }
// for (let item of a.entries()) {
//     console.log(item[0], item[1])
//     // Faker Faker
//     // Bengi Bengi
//     // Wolf Wolf
// }

// let arr_1 = [1, 2, 2, 3, 4, 5, 2]
// let arr_2 = [2, 3, 4, 4, 5, 6]
// // let s = new Set([...arr_1, ...arr_2])
// // console.log([...s]) // (6) [1, 2, 3, 4, 5, 6]

// let s1 = new Set(arr_1)
// let s2 = new Set(arr_2)
// let result = new Set(arr_1.filter(item => s2.has(item)))
// console.log([...result])

// let arr_1 = [1, 2, 2, 3, 4, 5, 2]
// let arr_2 = [2, 3, 4, 4, 5, 6]
// let s1 = new Set(arr_1)
// let s2 = new Set(arr_2)
// let result1 = new Set(arr_1.filter(item => !s2.has(item)))
// let result2 = new Set(arr_2.filter(item => !s1.has(item)))
// console.log([...result1, ...result2])

// let a = new WeakSet()
// a.add({
//     name: 'Faker'
// })
// a.add({
//     name: 'Bang'
// })
// a.delete({
//     name: 'Faker'
// })

// let a = new Map()
// let obj = {
//     name: 'Faker'
// }
// // set()
// a.set(obj, 'SKT T1')
// console.log(a) // Map(1) {{…} => "SKT T1"}
// // get()
// console.log(a.get(obj)) // SKT T1
// // has()
// console.log(a.has(obj)) // true
// // delete()
// a.delete(obj)
// console.log(a) // Map(0) {}
// console.log(a.has(obj)) // false



// let a = new Map(
//     [
//         ['Faker', 'MID', 24],
//         ['Bang', 'BOT']
//     ]
// )
// let b = new Set([1, 2, 3, 4, 5])
// a.forEach((value, key) => {
//     console.log(key, value)
//     // Faker MID
//     // Bang BOT
// });
// for (let [key, value] of a) {
//     console.log(key, value)
//     // Faker MID
//     // Bang BOT
// }
// for (let value of a.values()) {
//     console.log(value)
//     // MID
//     // BOT
// }
// for (let key of a.keys()) {
//     console.log(key)
//     // Faker
//     // Bang
// }
// for (let [key, value] of a.entries()) {
//     console.log(key, value)
//     // Faker MID
//     // Bang BOT
// }


// let a = 5
// console.log(a.toString(2)) // 101

// let a = 101
// console.log(parseInt(a, 2)) // 5


// let a = 0O1010
// console.log(a) // 520
// let b = 0B0101
// console.log(b) // 5

// console.log(isFinite(1))
// console.log(isFinite('Faker'))

// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(3)
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(4)
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(4)


// function ajax(url, callback) {
//     //创建 XMLHttpRequest 对象
//     var xhr
//     if (window.XMLHttpRequest) {
//         //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//         xhr = new XMLHttpRequest();
//     }
//     else {
//         // IE6, IE5 浏览器执行代码
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 向服务器发送请求
//     xhr.open('GET', url, true)
//     xhr.send()
//     // 服务器 响应
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var obj = JSON.parse(xhr.responseText)
//             callback(obj)
//         }
//     }
// }

// var url = 'http://jsonplaceholder.typicode.com/users'
// ajax(url, res => {
//     console.log(res)
// })
// ajax('static/a.json', res => {
//     console.log(res)
//     ajax('static/b.json', res => {
//         console.log(res)
//         ajax('static/c.json', res => {
//             console.log(res)
//         })
//     })
// })


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Faker')
//         //传递参数
//         resolve('Good')
//     }, 1000)
// }).then((res) => { // 成功时调用
//     console.log(res)
// }, (err) => { // 失败时调用
//     console.log(err)
// })


// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
// })

// console.log(2)

// let a = new Promise((resolve, reject) => {
// 	resolve(1)
// })
// let b = new Promise((resolve, reject) => {
// 	console.log('Start')
// 	setTimeout(() => {
// 		resolve(2)
// 	}, 1000)
// })
// let c = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject(3)
// 	}, 1000)
// })
// console.log(a)
// console.log(b)
// console.log(c)

// a.then((arr) => {
// 	console.log(arr)
// })
// b.then((arr) => {
// 	console.log(arr)
// })
// // c.then((arr) => {
// // 	console.log(arr)
// // }, (arr) => {
// // 	console.log(arr)
// // })
// c.catch((arr) => {
// 	console.log(arr)
// })

// setTimeout(() => {
// 	console.log(b)
// }, 2000)
// setTimeout(() => {
// 	console.log(c)
// }, 2000)


// function ajax(url, callback, nocallback) {
// 	//创建 XMLHttpRequest 对象
// 	var xhr
// 	if (window.XMLHttpRequest) {
// 		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
// 		xhr = new XMLHttpRequest();
// 	}
// 	else {
// 		// IE6, IE5 浏览器执行代码
// 		xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	// 向服务器发送请求
// 	xhr.open('GET', url, true)
// 	xhr.send()
// 	// 服务器 响应
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			var obj = JSON.parse(xhr.responseText)
// 			callback && callback(obj)
// 		} else if (xhr.status === 404) {
// 			nocallback && nocallback(xhr.statusText)
// 		}
// 	}
// }

// new Promise((resolve, reject) => {
// 	ajax('static/a.json', res => {
// 		console.log(res)
// 		resolve()
// 	})
// }).then(() => {
// 	console.log('A Ready')
// 	return new Promise((resolve, reject) => {
// 		ajax('static/b.json', res => {
// 			console.log(res)
// 			resolve()
// 		})
// 	})
// }).then(() => {
// 	console.log('B Ready')
// 	return new Promise((resolve, reject) => {
// 		ajax('static/c.json', res => {
// 			console.log(res)
// 			resolve()
// 		})
// 	})
// }).then(() => {
// 	console.log('C Ready')
// })





// function ajax(url, callback, nocallback) {
// 	//创建 XMLHttpRequest 对象
// 	var xhr
// 	if (window.XMLHttpRequest) {
// 		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
// 		xhr = new XMLHttpRequest();
// 	}
// 	else {
// 		// IE6, IE5 浏览器执行代码
// 		xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	// 向服务器发送请求
// 	xhr.open('GET', url, true)
// 	xhr.send()
// 	// 服务器 响应
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			var obj = JSON.parse(xhr.responseText)
// 			callback && callback(obj)
// 		} else if (xhr.status === 404) {
// 			nocallback && nocallback(xhr.statusText)
// 		}
// 	}
// }

// let newPromise = function (url) {
// 	return new Promise((resolve, reject) => {
// 		ajax(url, res => {
// 			resolve(res)
// 		}, (err) => {
// 			reject(err)
// 		})
// 	})
// }

// newPromise('static/a.json')
// 	.then((res) => {
// 		console.log(res)
// 		return newPromise('static/b.json') //这里不写return
// 	}).then((res) => {
// 		console.log(res)
// 		return newPromise('static/ca.json') // 这里不写return
// 	}).then(res => {
// 		console.log(res)
// 	}).catch((err) => {
// 		console.log(err)
// 	})

// function A() {
// 	this.a = 'A'
// }
// A.prototype.showA = function () {
// 	console.log(this.a)
// }

// let newA = new A()
// newA.showA() // "A"

// function B() {
// 	this.b = 'B'
// }

// B.prototype = new A()
// let newB = new B()
// newB.showA() // "A"

// console.log(newB instanceof Object) // true
// console.log(newB instanceof A) // true
// console.log(newB instanceof B) // true

// console.log(Object.prototype.isPrototypeOf(newB)) // true
// console.log(A.prototype.isPrototypeOf(newB)) // true
// console.log(B.prototype.isPrototypeOf(newB)) // true

// let a = {
// 	name: 'Faker',
// 	age: 24
// }
// let b = JSON.stringify(a)
// let c = JSON.parse(b)
// console.log(c)

// let checkType = (data) => {
// 	return Object.prototype.toString.call(data).slice(8, - 1)
// }

// let deepClone = (data) => {
// 	let type = checkType(data)
// 	let newType
// 	if (type === 'Array') {
// 		newType = []
// 	} else if (type === 'Object') {
// 		newType = {}
// 	} else {
// 		return data
// 	}
// 	for (let i in data) {
// 		let value = data[i]
// 		if (checkType(value) === 'Array' || checkType(value) === 'Object') {
// 			newType[i] = deepClone(value)
// 		} else {
// 			newType[i] = value
// 		}
// 	}
// 	return newType
// }

// function checkType(data) {
// 	return Object.prototype.toString.call(data).slice(8, -1)
// }

// function deepClone(data) {
// 	let value = checkType(data)
// 	let newData
// 	if (value === 'object') {
// 		newData = {}
// 	} else if (value === 'array') {
// 		newData = []
// 	} else {
// 		return data
// 	}
// 	for (let i in data) {
// 		if (checkType(data[i]) === 'object' || checkType(data[i]) === 'array') {
// 			newData[i] = deepClone(data[i])
// 		} else {
// 			newData[i] = data[i]
// 		}
// 	}
// 	return newData
// }

// function checkType(data) {
// 	return Object.prototype.toString.call(data).slice(8. - 1)
// }

// function deepClone(data) {
// 	let type = checkType(data)
// 	let newData
// 	if (type === 'object') {
// 		newData = {}
// 	} else if (type === 'array') {
// 		newData = []
// 	} else {
// 		return data
// 	}
// 	for (let i in data) {
// 		let value = data[i]
// 		if (checkType(data[i]) === 'object' || checkType(data[i]) === 'array') {
// 			newData[i] = deepClone(data[i])
// 		} else {
// 			newData[i] = data[i]
// 		}
// 	}
// 	return newData
// }


// let a = {
// 	name: 'Faker',
// 	age: '24',
// 	team: {
// 		name: ['SKT T1', 'T1'],
// 		num: 2
// 	}
// }
// let b = deepClone(a)

// console.log(b)


// for (var i = 0; i < 6; i++) {
// 	setTimeout(
// 		(function () {
// 			console.log(i)
// 		})()
// 		, 1000)
// }


// function test(a) {
// 	var a = 1
// }
// console.log(a)


// try {
// 	undefined()
// } catch (arr) {
// 	console.log(arr)
// }
// console.log(arr)


// let a
// for (let i = 0; i < 6; i++) {
//     a = document.createElement('a')
//     a.innerHTML = i + '<br />'
//     a.addEventListener('click', (e) => {
//         e.preventDefault()
//         alert(i)
//     })
//     document.body.appendChild(a)
// }


// for (var i = 0; i < 6; i++) {
//     (function (j) {
//         // var j = i
//         setTimeout(() => {
//             console.log(j)
//         }, 1000)
//     })(i)
// }

// var foo = true, baz = 10
// if (foo) {
//     var bar = 3
// }
// if (baz > bar) {
//     console.log(bar)
// }

// for (let i = 0; i < 10; i++) {
//     var a = 1
// }
// console.log(a)

// let arr = []

// function sort(arr) {
//     let len = arr.length
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     console.log(arr)
// }

// sort(arr)


// let arr = []
// function sort(arr) {
//     let item = 0, len = arr.length
//     for (let i = 0; i < len - 1; i++) {
//         item = i
//         for (let j = i; j < len; j++) {
//             if (arr[item] > arr[j]) {
//                 item = j
//             }
//         }
//         [arr[i], arr[item]] = [arr[item], arr[i]]
//     }
//     console.log(arr)
// }
// sort(arr)

// let arr = [1]

// function sort(arr) {
//     let now, nowValue
//     let len = arr.length
//     for (let i = 1; i < len; i++) {
//         now = i - 1
//         nowValue = arr[i]
//         while (now >= 0 && nowValue < arr[now]) {
//             arr[now + 1] = arr[now]
//             now--
//         }
//         arr[now + 1] = nowValue
//     }
//     console.log(arr)
// }

// sort(arr)

// let arr = []

// function sort(arr) {
//     let len = arr.length
//     if (len < 2) {
//         return arr
//     }
//     let left = []
//     let right = []
//     let middle = 0
//     middle = Math.floor(len / 2)
//     left = arr.slice(0, middle)
//     right = arr.slice(middle)
//     return merge(sort(left), sort(right))
// }
// function merge(left, right) {
//     let result = []
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }
//     while (left.length) {
//         result.push(left.shift())
//     }
//     while (right.length) {
//         result.push(right.shift())
//     }
//     return result
// }

// let newArr = sort(arr)
// console.log(newArr)


// let s = ''

// function maxUr(s) {
//     let arr = []
//     let index = 0
//     let maxLength = 0
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === s[i]) {
//                 index = j + 1
//                 while (index) {
//                     arr.shift()
//                     index--
//                 }
//             }
//         }
//         arr.push(s[i])
//         if (arr.length > maxLength) {
//             maxLength = arr.length
//         }
//     }
//     console.log(maxLength)
// }
// let nums1 = [1, 5, 8, 9]
// let nums2 = [2, 6, 8]

// function midNum(nums1, nums2) {
//     let f1 = 0, f2 = 0, a = 0, b = 0
//     let len = nums1.length + nums2.length
//     let midLen = (Math.floor(len / 2)) + 1
//     for (let i = 0; i < midLen; i++) {
//         if (nums1[f1] <= nums2[f2] || nums2[f2] === undefined) {
//             if (i === midLen - 2) {
//                 a = nums1[f1]
//             }
//             if (i === midLen - 1) {
//                 b = nums1[f1]
//             }
//             f1++
//         } else if (nums1[f1] > nums2[f2] || nums1[f1] === undefined) {
//             if (i === midLen - 2) {
//                 a = nums2[f2]
//             }
//             if (i === midLen - 1) {
//                 b = nums2[f2]
//             }
//             f2++
//         }
//     }
//     console.log(a, b)
//     if (len % 2 === 1) {
//         return b
//     } else {
//         return (a + b) / 2
//     }
// }
// console.log(midNum(nums1, nums2))

// 节点的辅助类
// class Node {
//     constructor(element) {
//         this.element = element
//         this.next = null
//     }
// }

// //链表基本骨架
// class LinkedList {
//     constructor() {
//         this.length = 0
//         this.head = null
//     }

//     getElementAt(position) { // 获取第position节点的元素
//         if (position < 0 || position >= this.length) {
//             return null
//         }
//         let current = this.head
//         for (let i = 0; i < position; i++) {
//             current = current.next
//         }
//         return current
//     }

//     show() {
//         let current = this.head
//         let arr = ''
//         for (let i = 0; i < this.length; i++) {
//             arr += (current.element + ((i === this.length - 1) ? '' : '->'))
//             current = current.next
//         }
//         console.log(arr)
//     }

//     append(element) { // 添加元素
//         let node = new Node(element)
//         // 链表为空 直接作为头结点
//         if (this.head === null) {
//             this.head = node
//         } else {
//             // 否则找到尾元素，插入
//             let current = this.getElementAt(this.length - 1)
//             current.next = node
//         }
//         this.length++
//     }

//     insert(position, element) { // 插入元素
//         // position不符
//         if (position < 0 || position > this.length) {
//             console.log('无法插入')
//             return false
//         }
//         //插入
//         let node = new Node(element)
//         if (position === 0) {
//             node.next = this.head
//             this.head = node
//         } else {
//             let previous = this.getElementAt(position - 1)
//             node.next = previous.next
//             previous.next = node
//         }
//         this.length++
//         console.log('插入成功')
//         return true
//     }

//     remove(position) {
//         if (position >= this.length || position < 0) {
//             console.log('无法删除')
//             return false
//         }
//         let current = this.head
//         if (position === 0) {
//             head = head.next
//         } else {
//             current = this.getElementAt(position - 1)
//             current.next = current.next.next
//         }
//         this.length--
//         this.show()
//         return true
//     }

//     indexOf(element) { // 查找元素所在位置
//         let current = this.head
//         let index = 0
//         while (current) {
//             if (current.element === element) {
//                 return index
//             }
//             current = current.next
//             index++
//         }
//     }

//     clear() { // 清空链表
//         this.head = null
//     }

//     getHead() { // 返回链表头元素
//         return this.head.element
//     }

//     size() { // 返回链表长度
//         return this.length
//     }

//     isEmpty() { // 判断链表是否为空
//         return this.head ? true : false
//     }
// }


// let list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// console.log(list.indexOf(3))


