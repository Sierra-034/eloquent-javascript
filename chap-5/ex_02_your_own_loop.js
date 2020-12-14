(function() {
    /**
     * Construir una función de orden superior
     * que proporcione un comportamiento similar 
     * a un 'for loop'. 
     * 
     * La función deberá tomar un valor como argumento, 
     * una función de testeo, una funcón para actualizar
     * y una función cuerpo.
     * 
     * En cada iteración, primero ejecuta la función de testeo
     * y si ésta función retorna 'false' se detiene la ejecución 
     * del ciclo. Luego dentro del ciclo
     * se ejecuta la función body que tomará como argumento
     * el valor actual de la iteración. Finalmente, llama
     * a la función de actualizar para crear un nuevo
     * valor y empezar el ciclo.
     */

    function forLike(value, testFunction, updateFunction, bodyFunction) {
        for(let i = value; testFunction(i); i = updateFunction(i)) {
            bodyFunction(i);
        }
    }

    forLike(0, n => n <= 10, n => ++n, console.log);

})()