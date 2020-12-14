(function() {
    class Rabbit {
        constructor(type) {
            this.type = type;
        }

        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'.`);
        }
    }
    
    let sym = Symbol("name");
    let otherSym = Symbol("other");
    let sym2 = sym;
    console.log(sym == Symbol("name")); // false
    console.log(sym == sym2);   // true

    let propertyName = "name";
    let secondPropertyName = "color";
    
    Rabbit.prototype[sym] = 55;
    Rabbit.prototype[otherSym] = "other symbol created";
    Rabbit.prototype[propertyName] = "Richie";

    let blackRabbit = new Rabbit("black");
    blackRabbit[otherSym] = "Unique and special";
    blackRabbit[secondPropertyName] = "Blue";
    
    console.log(blackRabbit[sym]);  // La notación punto no está disponible para los Symbols
    console.log(blackRabbit[otherSym]);
    console.log(blackRabbit.name);
    console.log(blackRabbit["name"]);
    console.log(blackRabbit[propertyName]);

    console.log("blackRabbit", blackRabbit);

    console.log("keys from blacRabbit", Object.keys(blackRabbit));
    console.log(blackRabbit.hasOwnProperty(otherSym));  // true
    console.log(blackRabbit.hasOwnProperty(secondPropertyName));    // true

    /**
     * Los Symbols son útiles para definir
     * interface libres de conflictos co
     * propiedades del mismo nombre.
     */
    const toStringSymbol = Symbol("toString");
    Array.prototype[toStringSymbol] = function() {
        return `${this.length} cm of blue yarn`;
    }

    console.log([1, 2]);
    console.log(String([1, 2]));
    console.log("arreglo toString()", [1, 2].toString());
    console.log("arreglo toStringSymbol", [1, 2][toStringSymbol]());

    /**
     * Los Symbols también sirven para
     * incluir propiedades en object expressions and classes
     * usando corchetes al rededor de la propiedad (variable que almacena el Symbol)
     */
    let stringObject = {
        [sym]: "some value",
        otherFunction: function() { console.log("otherFunction()"); },
        [toStringSymbol]() { return "a jute rope"; }
    };

    let functionName = "otherFunction";
    
    console.log(stringObject[sym]);
    console.log(stringObject[toStringSymbol]());
    stringObject.otherFunction();
    stringObject[functionName]();
    stringObject["otherFunction"]();    // Sí jala
    
})()