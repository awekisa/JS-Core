function match(input){
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.?\d{0,2})/;
    let items = input[0].split(';');

    console.log(items.map(e => {
        let match = e.match(regex);
        let count = match[1];
        let price = match[2];
        let total = Number(count) * Number(price);
        e = e.replace(match[0], total);
        return e;
    }).join(';'));
}

match(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'])