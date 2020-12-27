//prototype change 
//let arr=[];
//obj = {}

//function fun(){}

//FOR ARRAY PROTOTYPAL CHAIN
// Array.prototype == arr.__proto__ 
//Object.prototype == Array.__proto__.__proto__
//arr.__proto__.__proto__.__proto__ = null

//FOR ARRAY PROTOTYPAL CHAIN
//Object.prototype==obj.__proto__
//obj.__proto__.__proto__ == null

//FOR ARRAY PROTOTYPAL CHAIN
//Function.prototype==fun.__proto__
//fun.__proto__.__proto__ == Object.prototype
//fun.__proto__.__proto__.__proto__=null

/* 
    Because of this concept everything in Javascript is a Object
    Araay has Object prototype
    Function also has Objcet prototype
*/

let object={
    name:"ravi",
    city:"Ankanahalli",
    getIntro:function(){
        console.log(this.name+" From "+this.city);
    }
}

let object2={
    name:"SUNRAY"
}

//never do this it cause perpormance issue
object2.__proto__=object; //This is called prototypal inheritance

console.log(object2.name);// SUNRAY
console.log(object2.city);// Ankanahalli
console.log(object.name);// ravi
console.log(object.getIntro());// ravi From Ankanahalli
console.log(object2.getIntro());// SUNRAY From Ankanahalli
console.log(object2.__proto__);//{name:"ravi",city:"Ankanahalli",getIntro:function(){console.log(this.name+" From "+this.city);}}

//// ADDING CUSTUM FUNCTION TO Function prototype so we can access in all functions __proto__
Function.prototype.mybind=function(){
    console.log("My custom function");
}

function fun2(){

}
function fun3(){
    
}

console.log(fun2.__proto__.mybind());//My custom function
console.log(fun3.__proto__.mybind());//My custom function