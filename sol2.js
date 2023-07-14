const deepClone = (obj)=>{
    let newObj = {};

    for(let key in obj){
        if (typeof (obj[key]) !== "object"){
            newObj = {...newObj, [key]: obj[key]}
        }
        else{
            if (Array.isArray(obj[key])) newObj[key] = [...obj[key]]
            else newObj[key] = {...obj[key]};
           
        }
    }

    return newObj;
    
}

let obj = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4,
        e: 5
    },
    f: "hello"
};


let copy = deepClone(obj)
obj.c.d=12
obj.b=[44,55]
obj.a=1222
console.log("copy object is",copy);
console.log("original object is",obj);
