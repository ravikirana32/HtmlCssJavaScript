//https://www.youtube.com/watch?v=Tux1nhBPl_w
let p=new Promise((resolve,reject)=>{
    let i=3;
    if(i==2){
        resolve("SUccess")
    }else{
        reject("Failed")
    }
})

p.then((data)=>{
    console.log(" success message ",data);
})
.catch(data=>{
    console.log(" Failure message ",data);
})

//callback functions

const callbackExample=(success,error)=>{
    let i=3;
    if(i==2){
        success();
    }else{
        error();
    }

}

callbackExample(()=>{
    console.log("SUCCESS!!!!");
},()=>{
    console.log("FAILURE!!!!");
})

//Multiple functions promise calls

const promise1=new Promise((resolve,reject)=>{
    resolve("Promise1 success");
})
const promise2=new Promise((resolve,reject)=>{
    resolve("Promise2 success");
    //reject("Promise2 Failure"); Failure case
})
const promise3=new Promise((resolve,reject)=>{
    resolve("Promise3 success");
})
//if any promise compeleted first it will wait to complete all the calls
//then only it will send the response(Success/failure)
//Promise.race([ if we use Race it will send response after first success,
//so the input is 'Promise1 success'.
Promise.all([ // if we use all it will wait for all to complete then send response
    promise1,
    promise2,
    promise3
]).then(data=>{
    console.log(data);//if all are success it will come here
    //OUTPUT:  ["Promise1 success", "Promise2 success", "Promise3 success"]
})
.catch(data=>{
    console.log(data);//if any one is failure it will come here
    //OUTPUT:  Promise2 Failure.
})