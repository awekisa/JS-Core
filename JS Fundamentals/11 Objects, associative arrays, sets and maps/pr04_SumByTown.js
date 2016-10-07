function sumByTown(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        if (input[i] in towns) {
            towns[input[i]] += Number(input[i + 1]);
        }
        else {
            towns[input[i]] = Number(input[i + 1]);
        }
    }
    return JSON.stringify(towns);
}

console.log(sumByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
    'sofia',
    '111111111111'
]))