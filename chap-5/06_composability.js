(function() {
    function characterCount(script) {
        return script.ranges.reduce((count, [from, to]) => count += (to - from), 0);
    }

    let maxLength= SCRIPTS.reduce((a, b) => characterCount(a) > characterCount(b) ? a : b);
    console.log('script con mayor número de caracteres', maxLength);
    console.log('con', maxLength.ranges.reduce((count, [from, to]) => count += (to - from), 0), 'caracteres');

    function average(array) {
        return array.reduce((a, b) => a + b) / array.length;
    }

    let averageLiving = average(SCRIPTS.filter(s => s.living).map(s => s.year));
    console.log(averageLiving);
})()