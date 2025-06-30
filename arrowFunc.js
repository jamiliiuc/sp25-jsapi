function add(a, b)
{
    return a + b; 
}

function addEventListener(eventType, cb){
    if(eventISTriggered == eventType) {
        cb();
    }
}


Component.addEventListener("click", () => {

})


const cb = (a, b) => {
    // one line
    return a + b;
}

console.log(cb(5, 7))