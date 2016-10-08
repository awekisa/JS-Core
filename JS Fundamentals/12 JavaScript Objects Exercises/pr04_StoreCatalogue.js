function storeCatalogue(input) {
    let set = new Set();
    for (let line of input) {
        let firstChar = line[0];
        set.add(firstChar);
    }
    set = [...set].sort().filter(e => e != null)
    let items = input.sort()
    set.forEach(e => {
        console.log(e);
        items.forEach(function (l) {
            if (l[0] === e) {
                let arr = l.split(' : ');
                console.log('  ' + arr.join(': '));
            }
        });
    });
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    '',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    'BBB : 12'

])