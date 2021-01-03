console.log("Start");
setTimeout(()=>{
    console.log("Timer cllback function");
},5000)
document.getElementById('myId').addEventListener('click',()=>{
    console.log("Add click event lisetiner");
})

// fetch('www.google.co.in')
// .then(()=>{
//     console.log("Fetch API call success");
// })
.catch(()=>{
    console.log("Fetch API call Failure");
})
console.log("End");