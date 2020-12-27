function printData(event){
    console.log(event.target.id);
}

/*
if we bind multiple event listiner for dynamic content it will 
remove the function from call stack but variables memory will be allocated only as clusre

to avoid this we can add the event listiner to the parent element and get id from the target
and perform the required action 
this we can do it because of event bubbling

*/