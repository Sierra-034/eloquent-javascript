(function() {
    let protoRabbit = {
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    };

    function makeRabbit(type) {
        let rabbit = Object.create(protoRabbit);
        rabbit.type = type;
        return rabbit;
    }

    let someKillerRabbit = makeRabbit("Killer");
    console.log("Before someKilleRabbit");
    console.log(someKillerRabbit);

    /**
     * Another way to create constructor functions
     * is by putting the 'new' keyword before de function call.
     * This way javascript will treate the function as a
     * constructor.
     * 
     * This means that any object created througth this function
     * will have a specific prototype wich is taken from the
     * function's prototype property (not confuse with the proper 
     * prototype of the actual function)
     * 
     * Asignar funciones dentro de la función constructora y no
     * exclusivamente desde el prototipo de la función tiene más
     * o menos el mismo efecto, sin embargo, todas las variables
     * y funciones declaradas dentro de la función constructora
     * no serán parte del protipo, sino que será parte integral 
     * del objeto que se retorne.
     * 
     * Este comportamiento a priori, significa que si cambiamos
     * el valor de la función en una instancia, éste no se modificará
     * en todas las demás instancias. A diferencia de modificarlo
     * desde el prototipo.
     * 
     * Cualquier modificación de un objeto hecha a nivel instancia
     * solo tiene efecto para dicha instancia. Si la moficiación
     * se realiza a nivel prototipo, entonces la modificación se verá
     * reflejada para todas las instancias;
     */
    function Rabbit(type) {
        this.type = type;
        this.sleep = function() {
            console.log(`The ${this.type} rabbit is asleept`);
        };

        console.log("Greetings from Rabbit as function");
    }

    Rabbit.prototype.speak = function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    };

    let weirdRabbit = new Rabbit("weird");
    let killerRabbit = new Rabbit("killer");
    console.log("Hello");
    console.log(weirdRabbit);
    console.log(Rabbit);
    weirdRabbit.speak("weird rabbit is weird");
    killerRabbit.speak("gonna kill you");
    console.log(killerRabbit instanceof Rabbit);

    /**
     * En realidad no modifica la función. 
     * Añade una nueva propiedad a nivel instancia
     */
    
    killerRabbit.sleep = () => { console.log("new sleep behavior") };
    killerRabbit.sleep();
    weirdRabbit.sleep();

    killerRabbit.speak = () => { console.log("new speak behavior") };
    killerRabbit.speak();
    weirdRabbit.speak();

    console.log(Object.getPrototypeOf(killerRabbit));


    console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
    console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
    
})()