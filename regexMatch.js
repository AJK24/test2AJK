//Andrew Klump
//CMP237
//regexMatch.js


var arrayString = ["hey", "hello", "howdy", "goodbye", "goodmorrow"];
var greeting  = /he/;

for(var i = 0; i < arrayString.length; i++){
	if(greeting.test(arrayString[i])){ //should be return true for two words
		print(arrayString[i]);
	}
	


}
