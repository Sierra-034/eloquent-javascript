(function() {
    function characterScript(code) {
        for(let script of SCRIPTS) {
            if(script.ranges.some(([from, to]) => code >= from && code < to)) return script;
        }
    }

    const code = 4667;
    let some = SCRIPTS.filter(s => s.ranges.some(([from, to]) => code >= from && code < to)).map(s => s.name);
    console.log(some);

    let otherSome = [1,2,3,4,5,6,7,8,9].some(e => e > 5);
    console.log(otherSome);
})()