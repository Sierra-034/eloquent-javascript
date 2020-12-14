(function() {
    class Rabbit {
        constructor(type) {
            this.type = type;
        }

        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'.`);
        }
    }

    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");

    Rabbit.prototype.teeth = "small";
    console.log(killerRabbit.teeth);

    killerRabbit.teeth = "log, sharp, and bloody";
    console.log(killerRabbit.teeth);

    console.log(blackRabbit.teeth);
    console.log(Rabbit.prototype.teeth);

    /**
     * Sobre escribir propieades también sirve
     * para dar un comportamiento excepcional 
     * a un objeto creado a partir de una clase
     * genérica. De esta manera podemos tratar 
     * casos específicos y los casos genéricos.
     * 
     * Un ejemplo pude ser el método 'toString()'
     * de los arreglos y las funciones.
     */
    console.log(Array.prototype.toString == Object.prototype.toString); // false
    console.log([1, 2].toString());

    /**
     * Si los arreglos tuviesen el comportamiento
     * estandar que se asigna a todos los objetos
     * al ejecutar el método 'toString()' sobre
     * un arreglo. Veríamos algo como lo siguiente.
     */
    console.log(Object.prototype.toString.call([1, 2]));
    
})()