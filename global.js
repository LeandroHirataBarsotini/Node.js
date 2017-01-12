console.log('filename: ' + __filename );
console.log('dirname: ' + __dirname );
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);
var t = setTimeout(printHello, 3000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 4 seconds
setInterval(printHello, 4000);