//Example 1 generic function
const memoize=func=>{
    let result={};
    return (...args)=>{
        const argkeys=JSON.stringify(args);
        if(!result[argkeys]){
            result[argkeys]=func(...args);
        }
        return result[argkeys];
    }

}
const calculateSquare=memoize(num=>{
    let total=0;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            total++
        }
    }
    return total;
});
let now1=new Date();
console.log(calculateSquare(40000));
console.log(new Date()-now1);

let now2=new Date();
console.log(calculateSquare(40000));
console.log(new Date()-now2);

//Example 2 specific function
let finalResult={};
const demonstrateMemoize=(num)=>{
    if(finalResult[num]){
        return finalResult[num];
    }
    let total=0;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            total++
        }
    }
    finalResult[num]=total;
    return total;
}
console.log("-----------------------------------");
let now3=new Date();
console.log(demonstrateMemoize(40000));
console.log(new Date()-now3);

let now4=new Date();
console.log(demonstrateMemoize(40000));
console.log(new Date()-now4);