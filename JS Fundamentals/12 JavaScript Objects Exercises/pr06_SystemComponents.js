function sortComponents(input) {
    let database = new Map();

    for (let line of input) {
        [system, component, subcomp] = line.split(' | ');


        if (!database.has(system)) {
            database.set(system, new Map());
        }
        if (!(database.get(system).has(component))) {
            database.get(system).set(component, [])
        }
        database.get(system).get(component).push(subcomp);
    }

    let sortedData = [...database].sort((e1, e2) => sortAlphabetical(e1, e2)).sort((e1, e2) => sortByComponents(e1, e2))

    // PRINT
    for (let system of sortedData) {
        console.log(system[[0]]);
        let sortedComponents = [...system[1]].sort((e1, e2) => sortByComponents(e1, e2));
        for (let component of sortedComponents) {
            console.log('|||' + component[0]);
            for (let subComponent of component[1]) {

                console.log('||||||' + subComponent);
            }
        }
    }

    function sortByComponents(sys1, sys2) {
        let a = [...sys1[1]].length;
        let b = [...sys2[1]].length;
        return b - a
    }

    function sortAlphabetical(e1, e2) {
        let a = e1[0];
        let b = e2[0];

        return a.localeCompare(b)
    }

}

sortComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session1 | Default Security',
    'Indice | Session1 | Default Security',


])

