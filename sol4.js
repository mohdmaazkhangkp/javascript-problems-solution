//Throttling implementation

const throttle = (func, limit)=>{
    let flag=true;

    return function(...args){
        if(flag){
            return func(...args);
            flag = false;
            setTimeout(()=>{
                flag=true;
            }, limit);
        } 
    }

}



//
const expensive = ()=>{}

const throttledFunction = throttle(expensive, 500);