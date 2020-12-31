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

//###############################################################
//Zero Matrix Algorithm
//in N*N matric if we found 0 we need to replace the values by 0 in entaire row and column
//Ex:1      4 1 3               4 1 0
//      [   2 4 0   ] ==>   [   0 0 0   ]
//          5 9 2               5 9 0

const matrix1=[[4,1,3],[2,3,0],[5,9,2]];
const matrix2=[[5,2,0],[9,0,1],[2,9,3]];
const zeroMatricExample=(mat)=>{
    let n=mat.length;
    let row=0;
    let col=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]===0){
                mat[i][j]=true;
                row=i;
                col=j;
            }

        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]===true){
                for(let m=0;m<n;m++){
                    mat[row][m]=0;
                }
                for(let m=0;m<n;m++){
                    mat[m][col]=0;
                }
            }
            
        }
    }
    console.log(mat);
}
zeroMatricExample(matrix1);
//zeroMatricExample(matrix2); it will work only one occurance of 0;