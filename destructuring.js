//array Destructuring
var arr=["salesforce",'Google']
//var company1=arr[0]
//var company2=arr[1]
var [company1,company2]=arr
console.log(company1)
console.log(company2)
////object Destructuring
var obj={
    name:'ammu',
    age:10,
    education:'Btech'
}
var {name,age,education}=obj
console.log(name)
console.log(age)
console.log(education)

//String Interpolation

var n='ammu'
//var str='My name is '+n
var str=`My name is ${n}`
console.log(str)
var a=10
var b=20
var add=`The addition of ${a} and ${b} is ${a+b}`
console.log(add)

//URL
var recordId='00Q5j000006oWKdEAM'
var url=`https://admincom134-dev-ed.lightning.force.com/lightning/r/Lead/${recordId}/view`
console.log(url)
