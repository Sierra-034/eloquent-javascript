(function() {
    /**
     * Funciones que crean funciones
     */
    function greaterThan(n) {
        return m => m > n;
    }

    let greaterThan10 = greaterThan(10);    // Esta llamada a greaterThan crea una función que devuelve m > 10;
    let greaterThan13 = greaterThan(13);

    console.log('greaterThan10', greaterThan10(11));
    console.log('greaterThan13', greaterThan13(11));

    /**
     * Funciones que cambian a otra función:
     * 
     * Estas funciones normalmente son últiles en aquellos
     * lugares donde crearíamos una clase u objeto con un solo método.
     * 
     * Esto puede funcionar como una fábrica de 'verbos/acciones'
     */
    function noisy(f) {
        return (...args) => {
            console.log("Calling with", args);
            let result = f(...args);
            console.log("Called with", args, "returned", result);
        };
    }

    noisy(Math.min)(3,2,1);
    noisy(Math.min)(23,54,75);

    noisy(Math.max)(3,2,1);
    noisy(Math.max)(23,54,75);

    /**
     * Funciones que proveen otros tipos de control de flujo
     */
    function unless(test, then) {
        if(!test) then();   // Qué pasa si en la llamada se proporcionan argumentos
    }

    function repeat(n, action) {
        for(let i = 0; i < n; i++) action;
    }

    repeat(100, n => {
        unless(n % 2 == 1, () => {
            console.log(n, 'is even');  // n es visible para esta función debido al mecanismo de closures.
        })
    });
    
})()