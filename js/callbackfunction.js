function x(y){
    console.log("X");
    y();
}

x(()=>{
    console.log("Y");
});
//y is callback function we can pass functions as arguments to other functions called callback functions
//because of this we can call js functions as forst class function

setTimeout(()=>{
    console.log("Timer expired");
},5000);

//first argument of setTimeout function also call abck function