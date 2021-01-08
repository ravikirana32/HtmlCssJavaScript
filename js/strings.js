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
    return result;
}

findCharCount("ravi kiranair");

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

//#############################################################################
//find is string contains unique chars?

const isStringHasUniqueChar=(str)=>{
    let res={}
    for(let ch of str){
        res[ch]=parseInt(res[ch]?res[ch]+1:1);
    }
    for(let key in res){
        if(res[key] >1){
            console.log(str+" : String Don't have unique chars");
            return true;
            break;
        }
    }
    console.log(str+" : String has all unique keys");
    return false;
}

isStringHasUniqueChar('abcdefghi');
isStringHasUniqueChar('ravikirana');

//###########################################################################
//find string permutations
//strings equal/strings length equal / char counts are equal return true else false

const getCharCounts=(str)=>{
    let obj={}
    for(let item of str){
        obj[item]=parseInt((!obj[item])?1:obj[item]++);
        
    }
    return obj;
}

const findPermutations=(str1,str2)=>{
    if(str1===str2){
        return true;
    }else{
        if(str1.length !== str2.length){
            return false;
        }else{
            const obj1=getCharCounts(str1);
            const obj2=getCharCounts(str2);
            for(let key in obj1){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(findPermutations('ravi','vira'));
console.log(findPermutations('kirans','kirana'));

//####################################################################
//string encription replace space by %20
//and dont replace if space is there at the end

//solution 1
const stringEncryptionS1=(str)=>{
    let ar=str.trim().split('');
    for(let i=0;i<ar.length;i++){
        if(ar[i]==' '){
            ar[i]='%20'
        }
    }
    console.log("Encption string Solution1 : ",ar.join(""));
}

const stringEncryptionS2=(str,delimiter)=>{
    let ar=str.trim();
    let newStr="";
    for(let item of ar){
        if(item==' '){
            newStr=newStr+delimiter;
        }else{
            newStr=newStr+item;
        }
    }
    console.log("Encption string Solution2 :  ",newStr);
}
stringEncryptionS1("   Ravi kirana ankanahalli   ","%20");
stringEncryptionS2("   Ravi kirana ankanahalli   ","#54336");

//####################################################################
//One way algorithm 
//get 2 string both stringd should be same in one edit
//a. insert a char, b.remove a char,  c.replace a char
//if it is return true else if it take more then one edit return false
//Ref: https://www.youtube.com/watch?v=fpciHe0FAgk&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=11

const oneAwayString=(str1,str2)=>{
    if(str1===str2){return false}
    const obj1=getCharCounts(str1);
    const obj2=getCharCounts(str2);
    let counter=0;
    for(let i in obj1){
        if(obj1[i]!==obj2[i]){
            counter++;
        }else if(counter >=2){
            return false;
        }
    }
    return true;
}

console.log(oneAwayString("ravi","kmvi"));

//#######################################################################
//string Compression if 1. aabcccccaaa => a2b1c5a3
//                      2. abcd => abcd  if unique letters must return same

const getCompressedString=(str)=>{
    let count=1,output="",uniqCount=0;
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            output +=str[i]+count;
            count=1;
            uniqCount++;
        }
        if(uniqCount == str.length){
            output=str;
        }
    }
    
    console.log(output);
}
getCompressedString('aabcccccaaa');
getCompressedString('abcd');


//############################################################################
//finding max min word count and max min words in a string
let prototypeArray=["ravi","kirana","ravi kirana",'sun','ray','sun ray'];
console.log(
    prototypeArray.reduce((a,b)=>{
    return a.length<b.length?a:b;
    //return a.length>b.length?a:b;
    //return a.length<b.length?a.length:b.length;
}))