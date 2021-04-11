// let list = []
// let element = []
// let combin = function (n, k, start) {
//     if (element.length === k) {
//         let a = JSON.parse(JSON.stringify(element))
//         console.log(a instanceof Array)
//         list.push(a)
//         return
//     }
//     for (let i = start; i <= n; i++) {
//         element.push(i)
//         combin(n, k, i + 1)
//         element.pop()
//     }
// }
// combin(4, 2, 1)
// console.log(typeof (list))

const { contains, cssNumber } = require("jquery")

// import { ajax } from "jquery"

// import { ajax } from "jquery";

// let combine = function (n, k) {
//     let list = []
//     let element = []
//     if (k === 0) {
//         return [[]]
//     }
//     function work(list, element, n, k, start) {
//         if (element.length === k) {
//             console.log(element instanceof Array)
//             list.push(element.slice(0))
//             return
//         }
//         for (let i = start; i <= n; i++) {
//             element.push(i)
//             work(list, element, n, k, i + 1)
//             element.pop()
//         }
//         return list
//     }
//     return work(list, element, n, k, 1)
// };
// combine(4, 2)

// var combine = function (n, k) {

//     var res = [];
//     var could = [];
//     if (k == 0) {
//         return [[]]
//     }
//     function dfs(start, n, k, res, could) {
//         if (could.length == k) {
//             console.log(could instanceof Array)
//             res.push(could.slice(0));
//             return;
//         }
//         for (var i = start; i < n + 1; i++) {
//             could.push(i);
//             dfs(i + 1, n, k, res, could);
//             could.pop()
//         }
//         return res;
//     }
//     return dfs(1, n, k, res, could)
// };
// combine(4, 2)


// class Tree {
//     constructor(value, right, left) {
//         value = this.value
//         right = this.right
//         left = this.left
//     }
// }

// function* iterTree(tree){
//     if(Array.isArray(tree)){
//         for(let i = 0 ;i<tree.length;i++){
//             yield* iterTree(tree[i]);
//         }
//     }else{
//         yield tree;
//     }
// }
// 　let arr1 = [1, 2,[3,4,4], ['a', 'b', ['中', '文', [1, 2, 3, [11, 21, 31]]]], 3];
// for (const x of iterTree(arr1)) {
//     console.log(x);
// }

// function showArray(arr) {
//     if (Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             return showArray(arr[i])
//         }
//     } else {
//         return arr
//     }
// }

// for (let a of showArray(arr1)) {
//     arr2.push(a)
// }
// console.log(arr1.flat(1))
// console.log(JSON.stringify(arr1))

// function showArray(arr) {

//         arr = [].concat(...arr)

//     return arr
// }


// function* showArray(arr) {
//     if (Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             yield* showArray(arr[i])
//         }
//     } else {
//         yield arr
//     }
// }
// let arr1 = [1, 2, [3, 4, 4], ['a', 'b', ['中', '文', [1, 2, 3, [11, 21, 31]]]], 3];
// let arr2=[]
// for (let a of showArray(arr1)) {
//     arr2.push(a)
// }
// console.log(arr2)

// let checkType = (data) => {
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
//         result = target
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
// // let a = {
//     Faker: {
//         age: 23,
//         play: 'mid'
//     },
//     Bang: {
//         age: 23,
//         play: 'bot'
//     }
// }
// // let b = JSON.parse(JSON.stringify(a))
// let b = deepClone(a)
// b.Faker.age = 24
// console.log(b)
// console.log(a)

// async function async1() {
//     console.log( 'async1 start' )
//     await async2()
//     console.log( 'async1 end' )
// }
// async function async2() {
//     console.log( 'async2' )
// }
// console.log('script start')
// setTimeout( function () {
//     console.log( 'setTimeout' )
// }, 0 )
// async1();
// new Promise( function ( resolve ) {
//     console.log( 'promise1' )
//     resolve();
// } ).then( function () {
//     console.log( 'promise2' ) 
// } )
// console.log('script end')


// 'script start'
// 'async1 start'
// 'async2'
// 'promise1'
// 'script end'
// 'async1 end'
// 'promise2'
// 'setTimeout'
// setTimeout(function () {
//     console.log('setTimeout');
//     console.log('setTimeout1');
//     setTimeout(function () {
//         console.log('setTimeout2');
//     }, 0);
//     async function a() {
//         let b = await console.log('123');
//         let c = await console.log('456');
//         let d = await console.log('456');
//     }
//     a()
//     console.log('setTimeout3');
// }, 0);
// setTimeout(function () {
//     console.log('setTimeout4');
//     setTimeout(function () {
//         console.log('setTimeout5');
//     }, 0);
//     Promise.resolve().then(function () {
//         console.log('promise2');
//     })
//     console.log('setTimeout6');
// }, 0);

// function type(data) {
//     return Object.prototype.toString.call(data).slice(8, -1)
// }
// function deepClone(data) {
//     let dataType = type(data)
//     let newData = null
//     if (dataType === 'Object') {
//         newData = {}
//     } else if (dataType === 'Array') {
//         newData = []
//     } else {
//         newData = data
//     }
//     for (let i in data) {
//         let value = data[i]
//         if(type(value)==='')
//     }
// }



// function Average(arr){
//     let data=[]
//     let len=arr.length
//     let max=0
//     let item=0
//     let index=0
//     for(let i=0;i<len;i++){
//         if(arr[i].length>max){
//             max=arr[i].length
//         }
//     }
//     for(let i=0;i<max;i++){
//         for(let j=0;j<len;j++){
//             if(arr[j][i]!=undefined){
//                 item+=arr[j][i]
//                 index++
//             }
//         }
//         data.push(item/=index)
//         item=0
//         index=0
//     }
//     return data
// }
// const arrays = [
//     [1, 2, 3, 4, 5, 6],
//     [3, 3, 4, 5, 6, 7, 8],
//     [6, 7, 7, 7, 8],
//     [4, 6, 7, 10, 11, 5, 6]
// ];
// console.log(Average(arrays));


// function instanceOf(L, R) {
//     let Lpro = L.__proto__
//     let Rpro = R.prototype
//     while (true) {
//         if (Lpro === null) {
//             return false
//         } else if (Lpro === Rpro) {
//             return true
//         }
//         Lpro = Lpro.__proto__
//     }
// }
// class a { }

// class b extends a {

// }

// console.log(b instanceof a)



// function debounce(fn, sec) {
//     let time = false
//     console.log('111')
//     return () => {
//         if (time) {
//             return false
//         } else {
//             time = true
//             setTimeout(() => {
//                 fn()
//                 time = false
//             }, sec)
//         }
//     }
// }
// function showTop() {
//     let showScroll = document.body.scrollTop || document.documentElement.scrollTop
//     console.log(showScroll)
// }
// window.onscroll = debounce(showTop, 1000)



// function father(name) {
//     this.name = name
//     this.sayName = function () {
//         console.log(this.name)
//     }
// }

// function myNew(obj, ...etc) {
//     // 新建一个对象
//     let newObj = new Object()
//     // 为对象连接原型
//     newObj.__proto__ = obj.proptotype
//     // 使用构造函数创建对象，并将this绑定到当前对象
//     let res = obj.call(newObj, ...etc)
//     // 如果构造函数有返回值，那么返回我们构造的对象。如果构造函数没有返回值，就返回最初新建的对象。
//     return res instanceof Object ? res : newObj
// }

// let Faker = myNew(father, 'Faker')
// Faker.sayName() // Faker


// function Person() {
//     Person.prototype.name = 'Faker'
//     Person.prototype.age = 24
//     Person.prototype.champion = [3, 5, 6]
//     Person.prototype.showName = function () {
//         console.log(this.name)
//     }
//     Person.prototype.showChampion = function () {
//         console.log(this.champion)
//     }
// }

// let Faker = new Person()
// let Bang = new Person()
// Bang.name += 'hahah'
// Bang.champion.push(7)
// Faker.showName() // Faker
// Bang.showName() // Fakerhahah
// Faker.showChampion() // [3, 5, 6, 7]
// Bang.showChampion() // [3, 5, 6, 7]


// function reletive_7(digit) {
//     // write code here
//     let len = digit.length
//     let data = []
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {

//         }
//     }
// }


// let shoeObj = {}
// shoeObj.list = []
// shoeObj.listen = (fn) => {
//     shoeObj.list.push(fn)
// }
// shoeObj.trigger = () => {
//     for (let i = 0, fn; i < shoeObj.list.length; i++) {
//         fn = shoeObj.list[i]
//         fn(arguments)
//     }
// }
// shoeObj.listen((color, size) => {
//     console.log('the color is' + color)
//     console.log('the size is' + size)
// })
// shoeObj.listen((color, size) => {
//     console.log('Look!the color is' + color)
//     console.log('Look!the size is' + size)
// })
// shoeObj.trigger('red', 13)
// shoeObj.trigger('green', 15)

// //发布对象
// let shoeObj = {}
// //回调队列
// shoeObj.list = []
//

// let type = function (obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1)
// }
// let a = {
//     name: 'Faker',
//     age: 24,
//     team: {
//         name: 'SKT T1'
//     }
// }
// let deepClone = function (obj) {
//     let objType = type(obj)
//     let b = null
//     if (objType === 'Array') {
//         b = []
//     } else if (objType === 'Object') {
//         b = {}
//     } else {
//         return obj
//     }
//     for (i in obj) {
//         if (type(obj[i]) === 'Array' || type(obj[i]) === 'Object') {
//             b[i] = deepClone(obj[i])
//         } else {
//             b[i] = obj[i]
//         }
//     }
//     return b
// }

// let b = deepClone(a)
// b.name = 'Bang'
// b.team.name = 'AFS'
// console.log(a)
// console.log(b)


// function AJAX(url, callback) {
//     let xhr
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest()
//     } else {
//         xhr = new ActiveXObject('Microsoft XMLHTTP')
//     }
//     xhr.open('GET', url, true)
//     xhr.send()
//     xhr.onreadystatechange = () => {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             callback(JSON.parse(xhr.responseText))
//         }
//     }
// }

// AJAX('static/a.json', (res) => {
//     for (let i in res) {
//         console.log(i + '的介绍是' + res[i])
//     }
// })



// var value1 = 2
// function aaa() {
//     console.log(this.value1)
// }
// aaa()
// let obj = {
//     value: 1,
//     show: function () {
//         console.log(this.value) // 1
//     },
//     // showshow: function () {
//     //     const that = this
//     //     function a() {
//     //         console.log(this) // Window
//     //         console.log(this.value1) // undefined
//     //     }
//     //     a()
//     // }
// }
// obj.show()
// // obj.showshow()
// aaa()


// for (var i = 0; i < 2; i++) {
//     console.log('a')
// }
// console.log(i)

// function a() {

// }
// console.log(a)

// function getType(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1)
// }
// let a = {}
// console.log(getType(a))

// function deepClone(obj) {
//     let type = getType(obj)
//     let result = null
//     if (type === 'Object') {
//         result = {}
//     } else if (type === 'Array') {
//         result = []
//     } else {
//         return obj
//     }
//     for (let i in obj) {
//         if(type==={}||)
//     }
// }


// class MyClass {
//     constructor() {
//         this.name = 'Faker'
//     }
// }
// let a = new MyClass()
// console.log(a.name)

// class Stack {
//     constructor(arr) {
//         this.data = [...arr]
//     }
//     push(item) {
//         this.data.push(item)
//     }
//     pop() {
//         this.data.pop()
//     }
//     showStack() {
//         console.log(this.data)
//     }
// }
// let a = new Stack([1, 2, 3])
// a.showStack()
// a.push(1)
// a.showStack()
// a.pop()
// a.showStack()
// let b = new Stack([4, 5, 6])
// b.showStack()


// let myClass = function () {
//     this.name = 'Faker'
//     this.showName = function () {
//         console.log(this.name)
//     }
// }
// let a = new myClass()
// a.showName()


// class myClass {
//     constructor(name = 'Faker', age = 24) {
//         this.name = name
//         this.age = age
//     }
//     showData() {
//         console.log(this.name + ' ' + this.age)
//     }
// }

// let Bang = new myClass('Bang', 22)
// Bang.showData()
// let Faker = new myClass()
// Faker.showData()


// let string = 'abcdefg'
// console.log(string.charAt(1))

// class myClass {
//     constructor() {
//         this.name = 'Faker'
//     }
//     static className = 'Faker'
//     static showName() {
//         console.log(this.className)
//     }
// }
// console.log(myClass.className)


// let myClass = function (name, age) {
//     this.name = name
//     this.age = age
//     this.showName = function () {
//         console.log(this.name, this.age, this.play)
//     }
// }

// let a = new myClass('Faker', 24)
// Object.defineProperty(a, 'play', {
//     writable: true,
//     configurable: false,
//     enumerable: true,
//     value: 'MID'
// })
// a.showName()
// a.play = 'BOT'
// a.showName()
// delete a.play

// a.showName()

// let classA = function () {

// }
// classA.prototype.name = 'Faker'
// classA.prototype.showName = function () {
//     console.log(this.name)
// }

// let classB = function () {
//     this.name = 'Faker'
//     this.showName = function () {
//         console.log(this.name)
//     }
// }

// let A = new classA()
// let B = new classB()
// console.log(A)
// console.log(B)

// function replaceString(oldS, newS, fullS) {
//     // Replaces oldS with newS in the string fullS
//     for (var i = 0; i < fullS.length; i++) {
//         if (fullS.substring(i, i + oldS.length) == oldS) {
//             fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
//         }
//     }
//     return fullS;
// }

// console.log(replaceString("World", "Web", "Brave New World"))

// function firstUpper(str) {
//     let arr = str.split('.')
//     arr.forEach(index => {
//         console.log(index[0])
//         index[0] = String.fromCharCode(index.charCodeAt(0) - 1)
//     });
//     return arr.join('.')
// }

// let newStr = firstUpper('asd.fasdfs,asdfasas.asdfasdf.asdfa,asdf.')
// console.log(newStr)
// let a = [1, 2, 3]
// a.forEach((item) => {
//     console.log(item)
// })
// console.log(a)

// let arr = [1, 2, 8, 6, 8, 5, 9]
// let name = function () {
//     this.mid = 5
// }
// let a = [5]

// let newArr = arr.filter(function (item, index, arr) {
//     return (item > a[0] && index > 2)
// }, a)
// console.log(newArr)

// let a = [1, 2, 3, 4]
// let b = a.values()
// console.log(b.next())
// while (true) {
//     let value = b.next()
//     if (value.done) {
//         break
//     }
//     console.log(value.value)
// }

// let Player = function () {
// }
// Player.prototype.name = 'Faker'

// let Faker = new Player()

// console.log(Faker.__proto__ === Player.prototype)


// let NewPlayer = function () {
// }

// let Faker = new NewPlayer('Faker', 'MID')
// console.log(Faker.constructor)


// class Player {
//     constructor(name, play) {
//         this.name = name
//         this.play = play
//     }
// }
// let Faker = new Player('Faker', 'MID')
// let Bang = new Faker.constructor('Bang', 'BOT')
// console.log(Bang.name)

// let MyClass = function () {
// }

// MyClass.prototype = {
//     name: 'Faker',
//     age: 23,
//     winner: ['S3', 'S5', 'S6'],
//     sayName() {
//         console.log(this.name, this.age)
//     }
// }
// let Faker = new MyClass()
// let Bang = new MyClass()
// // Faker.__proto__ = MyClass.prototype
// Bang.name = 'Bang'
// console.log(Faker.name)
// console.log(Bang.name)

// Bang.winner.shift()
// console.log(Faker.winner)
// console.log(Bang.winner)


// let myClass = function (name, age) {
//     this.name = name
//     this.age = age
//     console.log(this)
//     if (typeof this.sayName != 'function') {
//         console.log(this)
//         myClass.prototype.sayName = function () {
//             console.log(this.name)
//         }
//     }
// }
// let faker = new myClass('Faker', 23)
// faker.sayName()

// let a = []
// a.push(1, 2, 3)
// console.log(a)

// class List {
//     constructor(name) {
//         this.name = name
//         this.data = []
//     }
//     show() {
//         console.log(`List name is ${this.name}`)
//         console.log(`list data is ${this.data}`)
//     }
//     add(item) {
//         this.data.push(item)
//     }
//     delete(item) {
//         this.data.forEach((value, index) => {
//             if (value === item) {
//                 this.data.splice(item, 1)
//                 return
//             }
//         })
//     }
// }

// let myList = new List('myList')

// let buttonSubmit = document.getElementById('submit')
// buttonSubmit.addEventListener('click', submit)

// function submit() {
//     let input = document.getElementById('input')
//     myList.add(input.value)
//     console.log(`${input.value} has been submit!`)
//     input.value = ''
// }

// let buttonShow = document.getElementById('show')
// buttonShow.addEventListener('click', show)
// function show() {
//     myList.show()
// }

// let MyList = {}
// MyList.list = {} // 方法队列
// MyList.add = function (key, fn) { // 订阅函数
//     if (!this.list[key]) {
//         this.list[key] = []
//     }
//     this.list[key].push(fn)
// }
// MyList.trigger = function (...argu) { // 发布触发器
//     let arg = argu
//     let fnList = this.list[arg.shift()]
//     fnList.forEach(fn => {
//         fn(...arg)
//     });
// }

// let showMid = function (name) { // 用户函数
//     console.log(name)
// }
// let showBot = function (name) {
//     console.log(name)
// }

// MyList.add('Mid', showMid) // 订阅
// MyList.add('Bot', showBot)
// MyList.trigger('Mid', '程世煜')  // 发布
// MyList.trigger('Bot', '孟圆')


// let MyList = {}
// MyList.FnList = {}

// MyList.add = function (key, fn) {
//     if (!this.FnList[key]) {
//         this.FnList[key] = []
//     }
//     this.FnList[key].push(fn)
// }

// MyList.trigger = function (...argu) {
//     let arg = argu
//     let key = arg.shift()
//     if (!this.FnList[key]) {
//         console.log('User error!')
//         return false
//     }
//     this.FnList[key].forEach(fn => {
//         fn(...arg)
//     })
// }

// let mid = function (name, age) {
//     console.log(`Name is ${name}`)
//     console.log(`Age is ${age}`)
// }

// let bot = function (name, championNum) {
//     console.log(`Name is ${name}`)
//     console.log(`ChampionNum is ${championNum}`)
// }

// MyList.add('mid', mid)
// MyList.add('bot', bot)

// MyList.trigger('mid', 'Faker', 24)
// MyList.trigger('bot', 'Bang', 2)


// let MyList = {}
// MyList.List = {}

// MyList.listen = function (key, fn) {
//     if (!this.List[key]) {
//         this.List[key] = []
//     }
//     this.List[key].push(fn)
// }

// MyList.trigger = function (...argu) {
//     this.List[argu.shift()].forEach(fn => {
//         fn(...argu)
//     });
// }

// let mid = function (name, age) {
//     console.log(`Name is ${name}\nAge is ${age}`)
// }

// let bot = function (name, cham) {
//     console.log(`Name is ${name}\nCham is ${cham}`)
// }

// MyList.listen('midmid!', mid)
// MyList.listen('botbot!', bot)

// MyList.trigger('midmid!', 'Faker', 24)
// MyList.trigger('botbot!', 'Gumayusi', 0)

// let isFaker = true
// let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (isFaker) {
//             resolve('Faker YES!')
//         } else {
//             reject('Fuck T1!')
//         }
//     }, 3000);
// })
// console.log(myPromise)

// var momsPromise = new Promise(function (resolve, reject) {
//     momsSavings = 70000;
//     priceOfPhone = 60000;
//     if (momsSavings > priceOfPhone) {
//         resolve({
//             brand: "iphone",
//             model: "6s"
//         });
//     } else {
//         reject("我们没有足够的储蓄，让我们多存点钱吧。");
//     }
// });
// momsPromise.catch(function (reason) {
//     console.log("妈妈不能给我买电话，因为 ", reason);
// }).then(function (value) {
//     console.log("哇，我得到这个电话作为礼物 ", JSON.stringify(value));
// })

// var obj = {
//     name: "小明",
//     say: function () {
//         console.log(this.name);
//     },
//     think: function () {
//         var arr = [1, 2, 3, 4];
//         console.log('---------')
//         arr.forEach(function (value, index, arr) {
//             value++
//             console.log(value)
//             setTimeout(() => {
//                 console.log(arr[index])
//             })

//         }, this)
//     }
// }

// obj.say();
// obj.think();

// let text = 'Show me the code'
// text = text.toLowerCase()
// function mySort(text) {
//     let arr = text.split(' ')
//     arr.sort(lengthDiff)
//     arr[0] = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1)
//     let newText = arr.join(' ')
//     return newText
// }

// function lengthDiff(item1, item2) {
//     return item1.length - item2.length
// }

// console.log(mySort(text))

// let text = 'aaa'

// function quChong(text) {
//     let newText = ''
//     for (let i = 0; i < text.length - 1;) {
//         if (text[i] === text[i + 1]) {
//             text = text.slice(0, i) + text.slice(i + 1)
//         } else {
//             i++
//         }
//     }
//     return text
// }

// console.log(quChong(text))

// let str1 = '12'
// let str2 = '56'

// function bigCheng(str1, str2) {
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')
//     arr1 = arr1.map((item) => {
//         return parseInt(item)
//     })
//     arr2 = arr2.map((item) => {
//         return parseInt(item)
//     })
//     if (arr1[0] === 0 || arr2[0] === 0) return 0
//     let res = []
//     for (let i = arr1.length - 1; i >= 0; i--) {
//         for (let j = arr2.length - 1; j >= 0; j--) {
//             let a1 = i + j
//             let a2 = i + j + 1
//             let m = arr1[i] * arr2[j] + (res[a2] || 0)
//             res[a1] = Math.floor(m / 10) + (res[a1] || 0)
//             res[a2] = m % 10
//         }
//     }
//     for (let i = 0; ;) {
//         if (res[i]) {
//             break
//         }
//         res.shift()
//     }
//     return res.join()
// }

// var foo = new Boolean(false)
// if (foo) {
//     console.log('foo')
// }
// var bar = Boolean(0)
// if (bar) {
//     console.log('bar')
// }

// let a = new Set([NaN, NaN])
// console.log(a)


function isHave(a, b) {
    for (let i = 0; i < a.length; i++) {
        let index = b.indexOf(a[i])
        if (!index) return false
        b = b.slice(0, index) + b.slice(index)
    }
    return true
}