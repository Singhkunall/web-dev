function createGreeting(name) {
    return function() {
        console.log("Hello, " + name);
    }

}
let greet = createGreeting("Kunal");
greet();

