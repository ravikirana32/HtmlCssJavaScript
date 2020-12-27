//it is usefull when user clicking button multiple times will call multiple APIS
//to avoid it and call only after pause will imporoove perpormance

const loggerFunc = () => {
    console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }

//   const throttleNew=(callFun,limit)=>{
//       let flag=true;
//       return function(){
//           if(flag){
//             callFun();
//             flag=false;
//             setTimeout(()=>{
//                 flag=true;
//             },limit)
//           }
//       }

//   }
  
  //const betterLoggerFunction = throttleNew(loggerFunc, 5000);
  
  window.addEventListener("resize",throttle(loggerFunc, 3000));
  
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 

//     const normalFunc = () => {
//     console.count("Normal Function");
//   }
  
//   window.addEventListener("resize",normalFunc);
  
  