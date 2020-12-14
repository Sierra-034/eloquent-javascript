(function() {
    function filter(array, test) {
        let passed = [];
        for(let element of array) {
            if(test(element)) passed.push(element);
        }

        return passed;
    }

    let filtered = filter(SCRIPTS, script => script.ranges.length == 1 && script.year <= 1500);
    console.log(filtered);
})()