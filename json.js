const student = 
{name: "Labib", trait: "Chul"};

const strStudwent = JSON.stringify(student);

console.log(typeof(strStudwent))

const obj = JSON.parse(strStudwent)

console.log(typeof(obj))
