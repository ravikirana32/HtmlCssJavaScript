//find letter counts in a string and returns max letter with count 
//also returns if multiple char has same number it will return array of data

const findCharCount=(string)=>{
    let result={}
    let maxCharArray=[];
    for(let ch of string){
        result[ch]=parseInt(result[ch]?result[ch]+1:1);
    }
    console.log(result);//"{"r":2,"a":3,"v":1,"i":2,"k":1,"n":1}"
    let maxNum=0;
    let maxChar='';

    for(let key in result){
        //solution 1
        //maxNum=maxNum > result[key]?maxNum:result[key];
        //maxChar=(maxNum==result[key])?key:maxChar;
        //solution 2
        if(result[key] >= maxNum){
            maxNum=result[key];
            //maxChar=key;
        }
    }
    for(let key in result){
        if(result[key]===maxNum){
            let newobj={};
            newobj[key]=result[key];
            maxCharArray.push(newobj);
        }
    }
    console.log("Max char is "+maxChar+" : "+maxNum);
    console.log("Max chars is ",maxCharArray);
}

//findCharCount("ravi kiranair");

//##############################################################################
//FIZZBUZZ 
//multiples of 3 must print FIZZ
//multiples of 5 must print BUZZ
//multiples of 3 and multiples of 5 must print FIZZBUZZ

const fizzbuzz=(num)=>{
    for(let i=1;i<=num;i++){

        if(i%3==0 && i%5==0){
            console.log("FIZZBUZZ");
        }
        if(i%5==0 && i%3!=0){
            console.log("BUZZ");
        }
        if(i%3==0 && i%5!=0){
            console.log("FIZZ");
        }
        if(i%3!=0&&i%5!=0){
            console.log(i);
        }
        
    }
}

fizzbuzz(15);