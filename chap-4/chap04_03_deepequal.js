(function() {
    function deepEqual(val1, val2) {
        let properties = [];

        if(evaluables(val1, val2)) {
            properties = Object.keys(val1);

            for(let prop of Object.keys(val2)) {
                if(!samePropertie(prop)) {
                    return false;
                }
            }

            return true;
        } else {
            return val1 === val2;
        }

        function evaluables(val1, val2) {
            const sameProps = Object.keys(val1).length === Object.keys(val2).length;
            return (typeof val1 === 'object' && typeof val2 === 'object' && sameProps)
        }
        
        function samePropertie(prop) {
            return (properties.indexOf(prop) != -1 && deepEqual(val1[prop], val2[prop]));
        }
    }

    const obj1 = {
        name: 'Samuel',
        apellidos: 'Gómez Balderas',
        artistas: ['solar fields', 'tony anderson', 'hans zimmer'],
        albumes: [
            {
                name: 'be the one',
                tracks: ['be the one'],
            },
            {
                name: 'gaia',
                tracks: ['Amor', 'Collide', 'Omni', 'Fire away']
            }
        ]
    }

    const obj2 = {
        name: 'Samuel',
        apellidos: 'Gómez Balderas',
        artistas: ['solar fields', 'tony anderson', 'hans zimmer'],
        albumes: [
            {
                name: 'be the one',
                tracks: ['be the one'],
            },
            {
                name: 'gaia',
                tracks: ['Amor', 'Collide', 'Omni', 'Fire away']
            }
        ]
    }

    console.log('objects deepEqual', deepEqual(obj1, obj2));
})()