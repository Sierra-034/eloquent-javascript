(function() {
    function characterScript(code) {
        for(let script of SCRIPTS) {
            if(script.ranges.some(([from, to]) => code >= from && code < to)) 
                return script;
        }
    }
    
    function countBy(items, groupName) {
        let counts = [];
        for(let item of items) {
            let name = groupName(item);
            let known = counts.findIndex(c => c.name == name);

            if(known == -1) {
                counts.push({name, count: 1});
            } else {
                counts[known].count++;
            }
        }

        return counts;
    }

    console.log(countBy([1,2,3,4,5], n => n > 2));

    let [event, squirrel] = ['click', 'transform'];
    let obj = {event, squirrel};
    // console.log(obj);

    function textScript(text) {
        let scripts = countBy(text, char => {
            let script = characterScript(char.codePointAt(0));
            return script ? script.name : 'none';
        }).filter(({name}) => name != 'none');

        let total = scripts.reduce((n, {count}) => n + count, 0);
        
        if(total == 0) return 'No scripts found';

        return scripts.map(({name, count}) => {
            return `${Math.round(count * 100 / total)}% ${name}`;
        }).join(', ');
    }

    let result = textScript('英国的狗说"woof", 俄罗斯的狗说"тяв"');
    console.log(result);
    console.log(characterScript('"'.codePointAt(0)));
    
})()