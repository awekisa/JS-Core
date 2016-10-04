function aggregate(input) {
    let sum = 0;
    let towns = [];
    for (let line of input) {
        let right = 0;
        let left = line.indexOf('|', right);
        right = line.indexOf('|', left+1);
        let town = line.substring(left+1, right).trim();
        towns.push(town)
        let value = Number(line.substring(right+1).trim());
        sum += value;
    }
    console.log(towns.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
])