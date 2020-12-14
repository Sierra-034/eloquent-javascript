(function() {

    let hasOwnPropertySymbol = Symbol("hasOwnProperty");
    
    let obj = {
        prop1: "value 1",
        prop2: "value 2",
        prop3: "value 3",

        [hasOwnPropertySymbol]: function(value) {
            return `Doing unexpected things with ${value}`;
        }
    };

    console.log(obj[hasOwnPropertySymbol]("prop1"));
    console.log(obj.hasOwnProperty("prop1"));

    console.log(obj);
    
})()