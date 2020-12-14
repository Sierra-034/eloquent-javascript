(function() {
    /**
     * Dado un string, determinar cuál
     * es la dirección de escritura dominante.
     * 
     * A través de la propiedad 'direction'
     * podemos realizar esta operación.
     */
    
    function characterScript(code) {
        for(let script of SCRIPTS) {
            if(script.ranges.some(([from, to]) => code >= from && code < to)) 
            return script;
        }
    }

    function countBy(items, groupName) {
        let elements = [];
        for(let element of items) {
            let direction = groupName(element);
            let known = elements.findIndex(c => c.direction == direction);

            if(known == -1) elements.push({direction, count: 1});
            else elements[known].count++;
        }

        return elements;
    }

    function textScript(text) {
        let directionCount = countBy(text, char => {
            let script = characterScript(char.codePointAt(0));
            return script ? script.direction : 'none';
        }).filter(element => element.direction != 'none');

        
        // let total = directionCount.reduce((a, b) => a.count + b.count);
        let total = directionCount.reduce((n, {count}) => n + count, 0);

        if(total == 0) return 'No Scripts found';

        return directionCount.map(({direction, count}) => {
            return `${Math.round(count * 100 / total)}% ${direction}`;
        }).join(', ');
    }

    let result = textScript('英国的狗说"woof", 俄罗斯的狗说"тяв"');
    console.log(result);
    
    let {direction} = characterScript('"'.codePointAt(0));  // No existe un control cuando el objeto es null o undefined
    console.log(direction);
    
})()