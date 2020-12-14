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
    console.log(String(killerRabbit));
    console.log(killerRabbit);
    
    Rabbit.prototype.toString = function() {
        return `a ${this.type} rabbit`;
    }
    
    console.log(String(killerRabbit));
    console.log(killerRabbit.toString());
    console.log(killerRabbit);
})()