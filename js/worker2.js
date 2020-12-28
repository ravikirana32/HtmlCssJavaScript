addEventListener('message',({data})=>{
    let count=0;
    if(data.action =='worker2'){
        for(let i=0;i<5000000000;i++){
            count++;
        }
        //console.log(count);
        postMessage({action:'resFromWorker2',status:'done',count:count});
    }
})