(function() {
    /**
     * Dado un array bidimensional. Usar el método reduce
     * junto con el método concat para 'aplanar' el arreglo
     * bidimensional y convertirlo en arreglo unidimensional.
     */
    
    let bidArray = [[1,2,3], [9,8], [5,6,7]];
    let uniArray = bidArray.reduce((a, b) => a.concat(b));
    console.log(bidArray);
    console.log(uniArray);
})()