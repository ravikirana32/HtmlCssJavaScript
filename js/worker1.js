addEventListener('message',({data})=>{
    let count=0;
    if(data.action =='worker1'){
        for(let i=0;i<7000000000;i++){
            count++;
        }
        //console.log(count);
        postMessage({action:'resFromWorker1',status:'done',count:count});
    }
})