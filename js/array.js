//return chunked arry as passed as num
//ex: if ar=[1,2,3,4,5,6,7,8,9] and num=4
//output: [[1,2,3,4],[5,6,7,8],[9]]
let arr=[1,2,3,4,5,6,7,8,9,0];
const getChunkedarry=(array,num)=>{
    // let chunkedArry=[];
    
    // for(let ele of array){
    //     let last=chunkedArry[chunkedArry.length-1];
    //     if(!last || last.length===num){
    //         chunkedArry.push([ele]);
    //     }else{
    //         chunkedArry.push(ele);
    //     }
    // }
    
    // console.log(chunkedArry);
    let finalArry=[];
    let chunks=Math.ceil(array.length/num);
    let offset=0;
    for(let i=0;i<chunks;i++){
        let chunkArray=[];
        for(let j=offset;j<(num+offset);j++){
            if(array[j] !=undefined){
                chunkArray.push(array[j]);
            }else{
                console.log(array[j]);
            }
            
        }
        offset=parseInt(offset+num);
        finalArry.push(chunkArray);
    }
    console.log(finalArry);
}
getChunkedarry(arr,4);//OUTPUT : [[1,2,3,4],[5,6,7,8],[9,0]]
getChunkedarry(arr,3);//OUTPUT : [[1,2,3],[4,5,6],[7,8,9],[0]]
getChunkedarry(arr,2);//OUTPUT : [[1,2],[3,4],[5,6],[7,8],[9,0]]