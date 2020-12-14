(function() { 
    /**
     * Crear una función similar a 'some'
     * en la que dado un array y una función 
     * predicado, la función devuelva cierto
     * en todos los elementos.
     */

    function every(array, test) {
        for(let element of array) {
            if(!test(element)) return false;
        }

        return true;
    }

    function everyWithSome(array, test) {
        return array.some(test)
    }

    let isEvery = every([1,2,3,45,5], n => n < 10);
    console.log(isEvery);

})()