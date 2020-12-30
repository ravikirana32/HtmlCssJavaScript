console.log("String Reverse Eaxmples");
let stringData="Ravi Kirana from Ankanahalli";

//Example 1
const RevereseString=(str)=>{
    const array=str.split('');
    let newArray=array.reverse();

    return newArray.join('');
}

console.log("Example 1: ",RevereseString(stringData));//illahanaknA morf anariK ivaR

//Example 2 without reverse

const reverseWithoutReaverse=(str)=>{
    let newArray=[]
    for(let i=str.length;i>=0;i--){
        newArray.push(str.charAt(i));
    }
    return newArray.join('');
}

console.log("Example 2: ",reverseWithoutReaverse(stringData));//illahanaknA morf anariK ivaR

//Example 3 Empty string

const reverseEmptyString=(str)=>{
    let reversed="";
    for(let char of str){
        reversed= char+reversed;
    }
    return reversed;
}

console.log("Example 3: ",reverseEmptyString(stringData));//illahanaknA morf anariK ivaR

//Example 4 word Reverse in a string 

const reverseWord=(str)=>{
    let newString=str.split(' ').reverse().join(" ");
    return newString;
}

console.log("Example 4: ",reverseWord(stringData));//Ankanahalli from Kirana Ravi

//Example 5 words in same place and reverse the letters

const reverseWordInSamePlace=(str)=>{
    let newString=str.split(' ').reverse().join(" ");
    let finalString=newString.split('').reverse().join("");
    return finalString;
}

console.log("Example 5: ",reverseWordInSamePlace(stringData));//ivaR anariK morf illahanaknA

//Example 6 finding height length and lowest world length in string

const findMinMaxWordLength=(str)=>{
    let newarray=str.split(' ');
    let minLength;
    let maxLength=0;
    for(let word of newarray){
        maxLength=word.length >maxLength?word.length:maxLength;
        minLength=(minLength && (word.length >minLength))?minLength:word.length;
    }
    console.log("Example 6: Max Length: ",maxLength," Min Length ",minLength);// returns last occurance of min max word length
}
findMinMaxWordLength(stringData);

//Example 7 return min and max word

const findMinMaxWords=(str)=>{
    let newarray=str.split(' ');
    let minLength;
    let maxLength=0;
    let minword="";
    let Maxword="";
    for(let word of newarray){
        maxLength=word.length >maxLength?word.length:maxLength;
        minLength=(minLength && (word.length >minLength))?minLength:word.length;
        minword=(minLength==word.length )?word:minword;
        Maxword=(maxLength==word.length) ?word:Maxword;
    }
    console.log("Example 7: Max Word: ",Maxword," Min Word ",minword);// returns last occurance of min max word
}
findMinMaxWords(stringData);

//TODO

//Example 8 return min length words more then one and max words
//Output : min word[ravi , from] max word [Ankanahalli,...]