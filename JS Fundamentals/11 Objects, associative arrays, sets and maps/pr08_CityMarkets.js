function cityMarkets(input){
    let towns = new Map();

    for (let line of input){
        let arr = line.split(' -> ');
        let town = arr[0];
        let product = arr[1];
        let sum = arr[2].split(' : ').map(Number).reduce((a, b) => a * b);

        // CHECK TOWNS
        if (town in towns){
            // CHECK PRODUCTS
            if (product in towns[town]){
                towns[town][product] += sum;
            }
            else{

                towns[town][product] = sum;
            }
        }
        else{
            towns[town] = new Map();
            towns[town][product] = sum;
        }
    }
    for (let town in towns){
        console.log('Town - ' + town);
        for (let product in towns[town]){
            console.log('$$$' + product + ' : ' + towns[town][product]);
        }
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'

])