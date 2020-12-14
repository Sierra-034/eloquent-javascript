function runRobot(state, robot, memory) {
    for(let turn = 0;; turn++) {
        if(state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }

        let action = robot(state, memory);  // Ejecuta el algoritmo para determinar el siguiente destino
        state = state.move(action.direction);   // Se mueve en una dirección aleatoria válida desde donde se encuentra
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

/**
 * Escoge una dirección aleatoria
 * basado en lugar en el que se encuentra
 * el robot
 * 
 * @param {VillageState} state 
 */
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

function randomPick(places) {
    let choice = Math.floor(Math.random() * places.length);
    return places[choice];
}

/**
 * Crea un conjunto de paquetes aleatorios, la
 * cantidad de paquetes por defecto es 5
 * 
 * @param {number} parcelCount 
 */
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for(let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while(place == address);
        
        parcels.push({place, address});
    }
    
    return new VillageState("Post Office", parcels);
}

runRobot(VillageState.random(), randomRobot);