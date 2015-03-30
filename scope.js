//Andrew Klump
////CMP237
////Differentiaing between local and global scope
//


var globalName = "Andrew";

function printBoth(){
	var localName = "A-dog";
		
		print("Both inside of a function");
		print(globalName);
		print(localName);
					print("");

}
printBoth();
print("Outside of local scope, only global ");
print(globalName);
//Cannot print localName because it is out of scope.
//print(localName);
//
