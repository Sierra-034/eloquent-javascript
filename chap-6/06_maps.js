(function() {
    /**
     * Simple way to create a map.
     * But this could have some torubles.
     */
    let ages = {
        Boris: 39,
        Liang: 22,
        Julia: 62
    };

    console.log(`Júlia is ${ages["Julia"]}`);
    console.log(`Júlia is ${ages.Julia}`);
    console.log("Is Jack's age known?", "Jack" in ages);
    console.log("Is toString's ages known?", "toString" in ages);

    /**
     * Creating an object with no prototype
     * is posible in order to avoid the previus
     * trouble.
     */
    console.log("toString" in {});
    console.log("toString" in Object.create(null));

    let newAges = Object.create(null);
    newAges.Boris = 39;
    newAges["Liang"] = 22;
    newAges.Julia = 62;

    console.log(newAges);
    console.log("toString" in newAges);

    /**
     * Another way to create standard maps
     * is through the Map class which is intended
     * to manage this kind of data structures.
     */
    let agesMap = new Map();
    agesMap.set("Boris", 39);
    agesMap.set("Liang", 22);
    agesMap.set("Júlia", 62);
    agesMap.set(43 + 2, 2);

    console.log(agesMap.get(45));

    /**
     * Si por alguna razón se requiere
     * usar un objeto plano, cuyo prototipo
     * sea Object.prototype podemos usar el
     * método Object.keys que retorn solamente
     * las propiedades del objeto y no incluye
     * las propiedades del prototipo.
     * 
     * Una alternativa al operador 'in' para
     * determinar si una propiedad pertenece
     * o se encuentra en un objeto, ignorando 
     * las propiedades de su prototipo es el
     * método 'hasOwnProperty' que puede usarse
     * de la siguiente manera.
     */
    console.log({x: 1}.hasOwnProperty("x"));
    console.log({x: 1}.hasOwnProperty("toString"));

    console.log(Object.keys(ages)); // Solo devuelve las propiedades del objeto
    
})()