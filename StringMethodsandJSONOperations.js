//String Methods

//1.Includes()
var greeting='Hey Friends Good Morning I hope your doing well'
console.log(greeting.includes('Good')) //true
console.log(greeting.includes('good')) //false

//2.indexof()
console.log(greeting.indexOf('Friends')) //4
console.log(greeting.indexOf('friends')) //-1 means this character not contains in specified string

//3.startsWith()
console.log(greeting.startsWith('hope')) //false
console.log(greeting.startsWith('Hey')) //true
console.log(greeting.startsWith('hey')) //false

//4.slice()
console.log(greeting.slice(0,4)) //Hey

//5.toLowerCase()
 
console.log(greeting.toLowerCase())//hey friends good morning i hope your doing well

//6.toUpperCase()
console.log(greeting.toUpperCase()) //HEY FRIENDS GOOD MORNING I HOPE YOUR DOING WELL

//7.trim()

var str='   Salesforce Course'
 
console.log(str.trim())//Salesforce course
console.log(str)//   Salesforce Course

//Object Methods and JSON Operations

var obj={
    "name":"ammu",
    "age":6,
    "DOB":'10/9/2018'
}

//Object.Keys()

console.log(Object.keys(obj)) // ['name', 'age', 'DOB']

//Object.values()

console.log(Object.values(obj)) //['ammu', 6, '10/9/2018']

//JSON Operations

//JSON.stringify it is convert the object into string
var str=JSON.stringify(obj)

console.log(str) //{"name":"ammu","age":6,"DOB":"10/9/2018"}

//JSON.parse() it is convert the string into object

console.log(JSON.parse(str))//{name: 'ammu', age: 6, DOB: '10/9/2018'}


