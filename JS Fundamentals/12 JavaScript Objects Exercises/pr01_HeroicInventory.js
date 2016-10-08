function heroicInventory(input){
    let heroData = [];
    for (let line of input){
        let arr = line.split('/').map(e => e.trim());
        let items = [];
        if (arr.length > 2){
            items = arr[2].split(',').map(e => e.trim());
        }

        let hero = {
            name:arr[0],
            level:Number(arr[1]),
            items:items
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'

])