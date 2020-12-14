(function() {
    function reduce(array, combine, start = 0) {
        let reduced = array[start];
        for(let i = start + 1; i < array.length; i++) {
            reduced = combine(reduced, array[i]);
        }

        return reduced;
    }

    let maxYear = reduce(SCRIPTS, (a, b) => a.year > b.year ? a : b);
    console.log(maxYear);
})()