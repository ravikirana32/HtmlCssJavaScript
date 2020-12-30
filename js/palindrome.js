let str="KANAK";
let str2="MAYANK";
let number1=12321;
let number2=123456;


//Example 1 string Palindrome
const isPalindrome=(str)=>{
    let newarry=str.split('').reverse().join('');
    if(newarry===str){
        console.log("Example 1: The String "+str+" is Palindrome");
    }else{
        console.log("Example 1: The String "+str+" is Not aPalindrome");
    }
}

isPalindrome(str);
isPalindrome(str2);

//Example 2 number Palindrome
    //solution 1
const isNumberPalindrome=(number)=>{
    let reminder,final=0;
    let temp=number;
    while(number>0){
        reminder=number%10;
        number=parseInt(number/10);
        final=final*10+reminder;
    }
    if(final===temp){
        console.log("Example 2: Solution1: The Number "+temp+" is Palindrome");
    }else{
        console.log("Example 2: Solution1: The Number "+temp+" is Not a Palindrome");
    }
}
isNumberPalindrome(number1);
isNumberPalindrome(number2);

    //solution 1

const numberUsingAsSting=(num)=>{
    let str=num.toString();
    let reversedNum=parseInt(str.split('').reverse().join(''));
    if(reversedNum===num){
        console.log("Example 2: Solution2: The Number "+num+" is Palindrome");
    }else{
        console.log("Example 2: Solution2: The Number "+num+" is Not a Palindrome");
    }
}

numberUsingAsSting(number1);
numberUsingAsSting(number2);


