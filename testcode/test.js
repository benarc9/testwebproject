var prom = new Promise(() => {
    waitTwoSeconds();
}).then(onResolved, onRejected);

var waitTwoSeconds = function wait (){
    setTimeout(() => {console.log("Timer complete..."), 200});
}

function onResolved () {
    console.log("resolved");
}

function onRejected () {
    console.log("rejcted");
}
