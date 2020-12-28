const worker1=new Worker('../js/worker1.js');
const worker2=new Worker('../js/worker2.js');
const now=performance.now();

worker1.addEventListener('message',({data})=>{
    if(data.action =='resFromWorker1'){
        console.log('we\n ran with out blocking UI worker 1',data.count);
        console.log(`Time taken is ${performance.now() - now}`);
    }
})

worker2.addEventListener('message',({data})=>{
    if(data.action =='resFromWorker2'){
        console.log('we\n ran with out blocking UI worker 1',data.count);
        console.log(`Time taken is ${performance.now() - now}`);
    }
})

let count=0;


worker1.postMessage({action:'worker1',type:'cmd'});
worker2.postMessage({action:'worker2',type:'cmd'});
console.log(`Time taken is ${performance.now() - now}`);