//<p>Var variable can be updated and redeclared and it supports the functional level and global 
//level scope it is not support block level scope  </p>
var a=10;
var a=20;//redeclare
 a=30;//update value
console.log(a)
//global level
console.log(window.a)
//functional level
function abc()
{
var c=a*2
console.log(c)
}
abc()
//console.log(c)
//not support block level 
if(2==2)
{
    var c=a*3
    console.log(c)
}
console.log(c)
//<p>Let variable can be updated but not redeclared and it supports the functional level 
//and block level scope it is not support global level scope  </p>
let l=40;
//Cannot redeclare block-scoped variable 'l'.
//let l=50;
l=60;
console.log(l)
//console.log(window.l)
function def()
{
    let g=l*3
    console.log(g)
}
def()
//console.log(g)
if(2===2)
{
    let f=l*3
    console.log(f)
}
//console.log(f)

//<p>const  variable cannt be updated and can not be redeclared and 
//it supports the functional level and block level scope it is not 
//support global level scope  </p>
const con=10
//con=20;
console.log(con)
//const con=30;
//console.log(window.con)
function ghi()
{
    const con1=con*10
    console.log(con1)
}
ghi()

//console.log(con1)
if(2===2)
{
    const g=con+40
    console.log(g)
}
//console.log(g)


