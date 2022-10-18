//1.Expanding String
var n='sukanya maddipatla'
var name1=[...n]
console.log(name1)
//2.adding values to array
var arr=[1,2,3,4]
console.log(arr)
var arr1=[...arr,15]
console.log(arr1)
//3.combining to array
let arr2=['ammu']
let arr3=['ammu']
var arr4=[...arr2,...arr3]
console.log(arr4)
//4.combning to object
//in that combination only right side value replace to left side value
// if there is same values but it is not applicable to combining of arrays
//Example:console.log(arr4) output is [ammu,ammu]
//Example:console.log(obj3) output is ['name':'Google','age':20]

var obj1={'name':'salesforce','age':20}
var obj2={'name':'Google'}
var obj3={...obj1,...obj2}
console.log(obj3)
//5.shallow copy
var arr5=[1,2,3,0]
var arr6=[...arr5]
arr6.push(7)
console.log(arr5)
console.log(arr6)
//6.nested copy
var arrobj=[
    {'name':'salesforce'},
    {'name':'Google'}
]
var arrobj1=[...arrobj]
/*console.log(arrobj)
console.log(arrobj1)
arrobj[0].name='facebook'
console.log(arrobj)
console.log(arrobj1)*/
//7.hack of nested copy
var arrobj2=JSON.parse(JSON.stringify(arrobj))
arrobj[0].name='facebook'
console.log(arrobj)
console.log(arrobj2)


//array and objects
//arrays
var arr=[1,2,3,4,5]
//assign value
arr[0]=3
console.log(arr)
//accesing value
console.log(arr[2])
//adding value
arr.push(6)
console.log(arr)
//objects
var obj={'name':'sukanya','full name':'Maddipatla Sukanya','age':30}
//assign value
obj.age=22
console.log(obj)
//accesing value
console.log(obj.name)
console.log(obj["name"])
console.log(obj["full name"])
//adding value
obj.Education='BTECh'
obj['College Name']='SSITS'
console.log(obj)






