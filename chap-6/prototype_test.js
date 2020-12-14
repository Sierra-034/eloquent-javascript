(function() {
    function Rabbit(type) {
        this.type = type;
        this.sleep = function() {
            console.log(`The ${this.type} rabbit is asleept`);
        };

        console.log("Greetings from Rabbit as function");
    }

    Rabbit.prototype.age = 2;
    
    Rabbit.prototype.speak = function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    };

    let weirdRabbit = new Rabbit("weird");
    let killerRabbit = new Rabbit("killer");

    console.log(weirdRabbit.age);
    console.log(killerRabbit.age);
    
    weirdRabbit.age += 3;
    
    console.log(weirdRabbit.age);
    console.log(killerRabbit.age);

    console.log(weirdRabbit);


})()