function isValidSubsequence(array, sequence) {
    let isSubSequence=false;
      
      for(let i=0;i<sequence.length;i++){
          if(array.indexOf(sequence[i]) != -1){
              isSubSequence=true;
          }else{
              return false;
              break;
          }
          let fdata=sequence.filter((data)=>{return data==sequence[i]});
				let adata=array.filter((data)=>{return data==sequence[i]});
          if(fdata.length>adata.length){
            return false;
            break;
          }
      }
      
      
      if((sequence.length >= array.length && JSON.stringify(sequence) !==JSON.stringify(array))){
          return false;
      }
      return isSubSequence;
  }
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, -1];
  console.log(isValidSubsequence(array,sequence));