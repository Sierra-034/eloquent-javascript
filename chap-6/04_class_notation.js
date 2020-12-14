(function() {
    class Rabbit {
        constructor(type) {
            this.type = type;
        }

        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    }

    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");

    console.log(killerRabbit);
    console.log(blackRabbit);

    /**
     * Classes as expressions
     */

    let object = new class { getWord() { return "Hello"; } };
    console.log(object.getWord());
    
})()