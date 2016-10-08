function bottleJuice(input){
    let juices = {};
    let result = [];
    for (let j of input){
        let arr = j.split(' => ');
        let juiceType = arr[0];
        let amount = Number(arr[1])

        if (juiceType in juices){
            juices[`${juiceType}`] += amount;
        }
        else{
            juices[`${juiceType}`] = amount;
        }
        if (juices[`${juiceType}`] >= 1000 && !result.includes(juiceType)){
            result.push(juiceType);
        }
    }
    for (let key of result){
        let bottle = Math.floor(juices[key] / 1000);
        if (bottle > 0){
            console.log(key + ' => ' + bottle);
        }
    }
}

bottleJuice([
    'Orange => 300',
    'Peach => 1432',
    'Banana => 450',
    'Orange => 2000',
    'Peach => 600',
    'Strawberry => 549'

])