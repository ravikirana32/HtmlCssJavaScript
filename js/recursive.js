let user={
    name:"ravi kirana",
    address:{
        personal:{
            city:"Ramanagara",
            area:"562159"
        },
        office:{
            city:"Bangalore",
            area:{
                pin:"560040",
                landmark:"Maramma Temple"
            }
        }
    }
}
let finalObj={};
function getFinalObject(data,parent){
    console.log(data);
        for(let key in data){
            console.log(key);
            if(typeof(data[key])==="object"){
                getFinalObject(data[key],parent+"_"+key);
            }else{
                finalObj[parent+'_'+key]=data[key];
            }
        }
    
}
function reverseObject(src, separator) {

    var obj = {};

    for (var key in src) {
        if (key.includes(separator)) {
            var activeObj = obj;
            var keys = key.split(separator);
            keys.forEach((item, i) => {
                if (i == keys.length - 1) {
                    activeObj[item] = src[key];
                }
                else {
                    if (!activeObj[item])
                        activeObj[item] = {};

                    activeObj = activeObj[item]
                }
            })
        } else {
            obj[key] = src[key]
        }
    }
  
    return obj;
}
getFinalObject(user,'user');
console.log(finalObj);
console.log(reverseObject(finalObj,'_'));