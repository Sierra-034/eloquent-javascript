(function() {
    function map(array, transform) {
        let mapped = [];
        for(let element of array) {
            mapped.push(transform(element));
        }

        return mapped;
    }

    let rtlScripts = SCRIPTS.filter(script => script.direction == 'rtl').map(script => script.name);
    console.log(rtlScripts);
})()