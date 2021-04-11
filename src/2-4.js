// function oddEvenList(head) {
//     // write code here
//     let a = new ListNode(head.val)
//     head = head.next
//     if (!head) {
//         return a
//     }
//     let b = new ListNode(head.val)
//     head = head.next
//     if (!head) {
//         a.next = b
//         return a
//     }
//     let index = 3
//     let ji = a
//     let ou = b
//     while (head) {
//         if (index % 2) { // 奇数
//             ji.next = new ListNode(head.val)
//             ji = ji.next
//         } else { // 偶数
//             ou.next = new ListNode(head.val)
//             ou = ou.next
//         }
//         head = head.next
//         index++
//     }
//     let jiji = a
//     while (jiji.next) {
//         jiji = jiji.next
//     }
//     jiji.next = b
//     return a
// }

const { contains } = require("jquery")

// const { contains } = require("jquery")


// function oddEvenList(head) {
//     let newHead = new ListNode(head.val)
//     let a = newHead
//     while (head !== null) {
//         a.next = new ListNode(head.val)
//         head = head.next
//         a = a.next
//     }
//     return newHead
// }

// function solve(nums) {
//     // write code here
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = nums[i].toString()
//     }
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i].split(''))
//     }

//     nums.sort((a, b) => b - a)
//     console.log(nums)
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = nums[i].join('')
//     }
//     console.log(nums.join(''))
// }
// solve([1, 2, 30, 9])
// function* check() {
//     let i = 0
//     while (true) {
//         if (i % 7 === 0) {
//             yield i
//         }
//         i++
//     }
// }
// let a = check()
// setInterval(() => {
//     console.log(a.next())
// }, 1000)

// function debounce(fn, sec) {
//     let time = null
//     return () => {
//         if (time) {
//             clearTimeout(time)
//             time = setTimeout(fn, sec)
//         } else {
//             time = setTimeout(fn, sec)
//         }
//     }
// }
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

// let data = [[1, 2], [3, 4], [5, 6]]
// function res(data, a, b) {
//     let newData = []
//     for (let i = 0; i < b; i++) {
//         let item = []
//         for (let j = 0; j < a; j++) {
//             item.push(data[j][i])
//         }
//         newData.push(item)
//     }
//     console.log(newData)
// }
// res(data, 3, 2)

// let str = 'he15l154lo87wor7l87d'
// let arr = str.split('')
// let numstr = '' // NumberString
// let num = [] //FinalData
// for (let i = 0; i < arr.length; i++) {
//     let item = Number(arr[i])
//     if (isNaN(item)) {
//         if (numstr.length) {
//             num.push(Number(numstr))
//             numstr = ''
//         }
//     } else {
//         numstr += item
//     }
// }
// if (numstr.length) {
//     num.push(Number(numstr))
//     numstr = ''
// }
// num.sort((a, b) => { return a - b })
// console.log(num)

// let len = 5
// let time = 3
// let arr = [1, 2, 2, 1, 3]

// let data = []
// function most(arr) {
//     let len = arr.length
//     let newArr = arr.sort((a, b) => a - b)
//     let mySet = new Set(newArr)
//     if (mySet.size === newArr.length) {
//         return newArr[0]
//     }
//     let myMap = new Map()
//     for (let i = 0; i < newArr.length; i++) {
//         if (myMap.has(newArr[i])) {
//             let a = myMap.get(newArr[i])
//             myMap.set(newArr[i], ++a)
//         } else {
//             myMap.set(newArr[i], 1)
//         }
//     }
//     let myArr = []
//     for (let [key, value] of myMap) {
//         if (value > len / myMap.size) {
//             myArr.push([key, value])
//         }
//     }
// }
// most(arr)

// let length = 10
// function fn() {
//     console.log(this.length)
// }
// var obj = {
//     length: 5,
//     method: function (fn) {
//         fn()
//         arguments[0]()
//     }
// }
// obj.method(fn, 1)

// for ( i = 0; i < 5; i++) {
//     setTimeout(() => { console.log(i) }, 0)
// }
// console.log(i)
// "<div>好未来(TAL)</div>"

// let templateStr = "<div>({{$0}}({{$1}}))</div>"
// let arr = ["好未来", "TAL"]
// function tpl(templateStr, arr) {
//     // write code here
//     for (let i = 0; i < arr.length; i++) {
//         let pos1 = templateStr.indexOf('{{')
//         let pos2 = templateStr.indexOf('}}')
//         templateStr = templateStr.slice(0, pos1) + arr[i] + templateStr.slice(pos2 + 2, templateStr.length)
//     }
//     console.log(templateStr)
// }
// tpl(templateStr, arr)

// let arr =
//     [[0], [0], [0]]


// function spin(arr) {
//     // write code here
//     arr[arr.length] = []
//     let newArr = []
//     let x = 0, y = 0
//     while (true) {
//         while (typeof (arr[x][y]) === 'number') {
//             newArr.push(arr[x][y])
//             arr[x][y] = null
//             y++
//         }
//         y--
//         if (!typeof (arr[x + 1][y]) === 'number') {
//             return newArr
//         }
//         x++

//         while (typeof (arr[x][y]) === 'number') {

//             newArr.push(arr[x][y])
//             arr[x][y] = null
//             x++
//         }
//         x--
//         console.log(x)
//         if (!typeof (arr[x][y - 1]) === 'number') {
//             return newArr
//         }
//         y--

//         while (typeof (arr[x][y]) === 'number') {
//             newArr.push(arr[x][y])
//             arr[x][y] = null
//             y--
//         }
//         y++
//         if (!typeof (arr[x-1][y]) === 'number') {
//             return newArr
//         }
//         x--

//         while (typeof (arr[x][y]) === 'number') {
//             newArr.push(arr[x][y])
//             arr[x][y] = null
//             x--
//         }
//         x++
//         if (!typeof (arr[x][y+1]) === 'number') {
//             return newArr
//         }
//         y++
//     }
// }
// console.log(spin(arr))

// console.log(a)
// console.log(b)
// var a = function foo() { }
// var b = 1

// function debounce(fn, sec) {
//     let time = null
//     return () => {
//         if (time) {
//             clearTimeout(time)
//             time = setTimeout(fn, sec)
//         } else {
//             time = setTimeout(fn, sec)
//         }
//     }
// }

// function a(fn, sec) {
//     let time = false
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


// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// function Promise(executor) {
//     var _this = this
//     this.onFulfilled = [] //事件订阅数组
//     this.onRejected = [] //事件订阅数组
//     this.state = PENDING
//     this.value = undefined
//     this.reason = undefined
//     function resolve(value) {
//         if (_this.state === PENDING) {
//             _this.state = FULFILLED
//             _this.value = value
//             _this.onFulfilled.forEach(fn => fn(value))
//         }
//     }
//     function reject(reason) {
//         if (_this.state === PENDING) {
//             _this.state = REJECTED
//             _this.value = reason
//             _this.onRejected.forEach(fn => fn(reason))
//         }
//     }
//     executor(resolve, reject)
// }
// Promise.prototype.then = function (onFulfilled, onRejected) {
//     let _this = this

//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => { return value }
//     onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }

//     let promise2 = new Promise((resolve, reject) => {
//         if (_this.state === FULFILLED) {
//             setTimeout(() => {
//                 try {
//                     let x = onFulfilled(_this.value)
//                     resolvePromise(promise2, x, resolve, reject)
//                 } catch (error) {
//                     reject(error)
//                 }
//             })
//         } else if (_this.state === REJECTED) {
//             setTimeout(() => {
//                 try {
//                     let x = onRejected(_this.value)
//                     resolvePromise(promise2, x, resolve, reject)
//                 } catch (error) {
//                     reject(error)
//                 }
//             })

//         } else if (_this.state === PENDING) {
//             _this.onFulfilled.push(
//                 setTimeout(() => {
//                     try {
//                         () => {
//                             let x = onFulfilled(_this.value)
//                             resolvePromise(promise2, x, resolve, reject)
//                         }
//                     } catch (error) {
//                         reject(error)
//                     }
//                 })
//             )
//             _this.onRejected.push(
//                 setTimeout(() => {
//                     try {
//                         () => {
//                             let x = onRejected(_this.value)
//                             resolvePromise(promise2, x, resolve, reject)
//                         }
//                     } catch (error) {
//                         reject(error)
//                     }
//                 })
//             )
//         }
//     })
// }

// let a = new Promise((resolve, reject) => {
//     console.log('Promise YES!')
//     setTimeout(() => {
//         resolve('Promise over!')
//     }, 1000)
// })

// a.then((res) => { console.log(res) }, (err) => { console.log(err) })

// let str = 'abcdefghijk'

// function work(str) {
//     if (str.length === 1) {
//         return str
//     }
//     let small = str.length - 1
//     let big = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) > str.charCodeAt(big)) {
//             big = i
//         }
//     }
//     for (let i = str.length - 1; i > 0; i--) {
//         if (str.charCodeAt(i) < str.charCodeAt(small)) {
//             small = i
//         }
//     }
//     if (small > big) {
//         [small, big] = [big, small]
//     }
//     if (small === big) {
//         return str
//     }
//     return str.slice(0, small) + str[big] + str.slice(small + 1, big) + str[small] + str.slice(big + 1)
// }
// let small = 3, big = 6
// console.log(str.slice(0, small) + str.slice(small + 1, big) + str.slice(big + 1))

// let mySet = new Set([1, 2, 3, 4])
// mySet.add(NaN)
// let arr = mySet.entries()
// console.log(arr)
// console.log(typeof arr)
// while (!arr.next().done) {
//     console.log(arr.next().value)
// }

// let arr = [1, 1, 5, 5, 8, 9, 6, 8, 7, 5, 8, 9, 6, 3, 2, 4, 5, 2, 3, 6, 5, 8, 7, 4, 1, 2, 5, 8, 9, 6]
// console.log([...new Set(arr)])

// let mySet = new Set([3, 4, 5, 6])
// console.log(mySet.keys())
// console.log(mySet.entries().next())
// console.log(mySet.values())

// let myMap = new Map([['Faker', 24], ['Bang', 23], ['Bengi', 25]])
// console.log(myMap.clear())
// console.log(myMap.has('Faker'))
// console.log(myMap.get('Faker'))

// let myClass = {
//     'Faker': 24,
//     'Bang': 23,
//     'Bengi': 25
// }
// for (let a in myClass) {
//     myClass[a]++
// }
// console.log(myClass)

// let Faker = {
//     name: 'Faker',
//     play: 'Mid',
//     champion: {
//         list: ['S3', 'S5', 'S6']
//     }
// }
// let NewFaker = Object.assign({}, Faker)
// NewFaker.champion.list = ['otto']
// console.log(NewFaker)
// console.log(Faker)


// let Obj = function () {
//     this.i = 10
// }
// Obj.prototype.paint = () => {
//     console.log(this)
// }
// let a = new Obj()
// a.paint();
// console.log(a.i)
// foo.count = 0
// bar.count = 1000
// function foo(num) {
//     console.log(num)
//     this.count++
// }
// function bar() {
//     foo(123)
// }
// var count = 1
// for (let i = 0; i < 1; i++) {
//     this.count = 2
//     bar()
//     console.log(this.count)
// }
// console.log(foo.count)
// console.log(bar.count)
// console.log(count)
// let num = 1
// let a = new Promise((resolve, reject) => {
//     if (num) {
//         resolve(num)
//     } else {
//         reject(num)
//     }
// })
// a.then(()=>{console.log('OK')},()=>{console.log('NO')})
// let minute = 150
// let timeChange = function (minute) {
//     let hour = Math.floor(minute / 60)
//     hour %= 24
//     let min = minute % 60
//     if (hour < 10) hour = '0' + hour
//     return hour + ':' + min
// }
// console.log(timeChange(minute))

// let str = "SS"

// function compressString(str) {
//     // write code here
//     // str += ' '
//     let myArr = []
//     let num = 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1]) {
//             myArr.push(str[i])
//             myArr.push(num)
//             num = 1
//         } else {
//             num++
//         }
//     }
//     let newStr = myArr.join('')
//     return newStr.length >= str.length ? str : newStr
// }
// console.log(compressString(str))

// function sort(array) {
//     // write code here
//     let a = 0, b = 0, c = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             a++
//         }
//         if (array[i] === 1) {
//             b++
//         }
//         if (array[i] === 2) {
//             c++
//         }
//     }
//     let newArr = []
//     for (let i = 0; i < a; i++) {
//         newArr.push(0)
//     }
//     for (let i = 0; i < b; i++) {
//         newArr.push(1)
//     }
//     for (let i = 0; i < c; i++) {
//         newArr.push(2)
//     }
//     return newArr
// }
let num = 5738
let myNum = new Intl.NumberFormat('hanidec').format(num)
console.log(myNum)