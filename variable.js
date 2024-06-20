function place(){
    console.log("Place is hasan")
}
place();

(function(){
    console.log("Eshan")
}())

var reference = () =>{
    console.log("Hello")

}
reference();


var bulb  = (thing) =>{
    console.log(thing)
}
bulb("Wipro");