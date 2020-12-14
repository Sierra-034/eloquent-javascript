(function() {
    let protoRabbit = {
        name: 'sam',
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    };

    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "Killer";
    killerRabbit.speak("SKREEEE!");
    console.log(killerRabbit.name);

    let otherRabbit = Object.create(protoRabbit);
    console.log(otherRabbit);

    function SomeConstructor() {
        this.name = "Samuel";
    }

    let obj = new SomeConstructor();
    console.log(obj.name);

    console.log(SomeConstructor.prototype);

})()