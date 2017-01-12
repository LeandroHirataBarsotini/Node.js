buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

buf2 = new Buffer('Áá');
console.log(buf2.toString('utf8', 0,2));
console.log(buf2.toString('ascii', 0,2));

var buf3 = new Buffer('Simply Easy Learning');
var json = buf3.toJSON(buf3);

console.log(json);

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

buffer1 = new Buffer('ABC');
buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

//copy a buffer
buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//length of the buffer
console.log("buffer length: " + buffer1.length);