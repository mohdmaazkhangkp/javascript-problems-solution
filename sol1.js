function groupObjectsBy(inputArray, key) {
    var groupedObjects = {};

    
    for (var i = 0; i < inputArray.length; i++) {
        var obj = inputArray[i];
        var value = obj[key];

        //  checking if key value not exist in groupedObjects then creating an empty array
        if (!groupedObjects[value]) {
            groupedObjects[value] = [];
        }

        // Pushing current obj. into array
        groupedObjects[value].push(obj);
    }

  
    return groupedObjects;
}

var inputArray = [
    { name: "Alice", age: 20, occupation: "student" },
    { name: "Bob", age: 20, occupation: "engineer" },
    { name: "Charlie", age: 25, occupation: "teacher" },
    { name: "Dave", age: 25, occupation: "student" }
];

console.log(groupObjectsBy(inputArray, "age"));
