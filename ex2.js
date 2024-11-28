//callback esimerkki

/*setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");*/

// Callback funktio anonyymina

setTimeout(function(){
    console.log("Demonstrating the callbacks");
}, 2000);
console.log("The application is started");

//Voidaan käyttää myös nuolifunktiota

setTimeout(()=>{
    console.log("Demonstrating the callbacks");
}, 2000);
console.log("The application is started");