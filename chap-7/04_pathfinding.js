function findRoute(graph, from, to) {

    let work = [{at: from, route: []}];
    for(let i = 0; i < work.length; i++) {
        console.log("work list", work.length, work);

        let {at, route} = work[i];
        for(let place of graph[at]) {

            if(place == to) return route.concat(place);            
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

findRoute(roadGraph, "Cabin", "Farm");