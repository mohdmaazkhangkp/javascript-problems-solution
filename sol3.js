function serializeDeserialize(obj) {
    const cache = new Map();

    // Serializing object to a string
    // stringify means to convert object into string
    const serialized = JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
                // If i already encountered this object then replace it with a reference
                return { circularReference: cache.get(value) };
            }
            
            const index = cache.size;
            cache.set(value, index);
        }
        return value;
    });

    // Deserialize the string into the orig. obj
    // parse means to convert string into js object
    const deserialized = JSON.parse(serialized, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if ('circularReference' in value) {
                // If circular reference get then retrieve the orig. obj
                const circularReferenceIndex = value.circularReference;
                const circularReference = Array.from(cache.keys())[circularReferenceIndex];
                return circularReference;
            }
        }
        return value;
    });

    return deserialized;
}






const obj = { name: 'John' };
obj.self = obj;
console.log("original object is", obj);


const deserializedObj = serializeDeserialize(obj);
console.log("deserialize object is", deserializedObj);






