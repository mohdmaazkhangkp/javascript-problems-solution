function serializeDeserialize(obj) {
    let selfObj = {}

    // Serializing object to a string
    // stringify means to convert object into string
    const serialized = JSON.stringify(obj, (key, value) => {
        if(key === "self"){
            selfObj=value;
            return ;
        }
        return value;
    });

    console.log(serialized);
    // Deserialize the string into the orig. obj
    // parse means to convert string into js object
    const deserialized = JSON.parse(serialized);

    deserialized.self=deserialized;

    return deserialized;
}






const obj = { name: 'Maaz' };
obj.self = obj;
console.log("original object is", obj);


const deserializedObj = serializeDeserialize(obj);
console.log("deserialize object is", deserializedObj);






