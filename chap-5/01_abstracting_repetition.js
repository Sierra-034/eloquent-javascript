(function() {
    /* 
        Diferentes maneras de repetir
        una acción.
    */
    for(let i = 0; i < 10; i++) {
        console.log(i); //   Ésta línea representa la acción/es que queremos abstraer
    }

    /*
        Con las herramientas que contamos hasta ahora
        podemos abstraer de cierto modo esta tarea.

        La idea es no tener que escribir todas
        las instrucciones cada vez que queramos ejecutar
        ésta tarea.
    */
    function repeatLog(n) {
        for(let i = 0; i < n; i++) {
            console.log(i);
        }
    }

    function repaetPow(n) {
        for(let i = 0; i < n; i++) {
            console.log(Math.pow(i, 2));
        }
    }

    /**
     * De esta manera tenemos el inconveniente de
     * tener que escribir una función diferente por
     * cada acción que queramos realizar en el ciclo.
     * 
     * Si quisieramos imprimir el cuadrado de los números
     * del 0 a n - 1 entonces tendriamos que escribir una función 
     * tipo 'repeatPow' y así si quisieramos realizar alguna otra acción.
     */

    /**
     * Un enfoque diferente consiste en abstraer las acciones precisamente
     * envolviéndolas en funciones de la siguiente manera.
     */
    function repeat(n, action) {
        console.log(action);    // Opcional
        for(let i = 0; i < n; i++) {
            action(i);
        }
    }

    /**
     * Es claro que el argumento 'action' definirá
     * lo que va a ocurrir dentro del loop.
     * 
     * En la llamada a la función 'repeat' debemos
     * especificar el argumento 'action' en forma de función
     * ya sea como una función de flecha anónima, 
     * una función definida por expresión 
     * o una variable que contenga como valor, una función.
     */
    function print(n) {
        console.log(n);
    }
    repeat(10, print);

    function pow(n) {
        console.log(Math.pow(n, 2));
    }
    repeat(10, pow);


    repeat(10, n => console.log(n));    // Esta repite la acción 'console.log()'
    repeat(10, n => console.log(Math.pow(n, 2)));   // Repite la acción 'console.log(Math.pow())'
    repeat(10, print = function(n) { console.log(n); });
    repeat(10, pow = function(n) { console.log(Math.pow(n, 2)); } );


    
})()