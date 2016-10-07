function lowestPrices(input) {
    // update input by replacing repetitive values
    let removeUnneededElements = function (elements) {
        let count = 1;

        for (let line of elements) {
            let regex = /(.+\|.+)\| \d+/g;
            let townAndProduct = regex.exec(line);
            townAndProduct = townAndProduct[1];
            // comparing every line to the others

            for (let otherLine of elements.slice(count)){
                let regex2 = /(.+\|.+)\| \d+/g;
                let townAndProduct2 = regex2.exec(otherLine)
                townAndProduct2 = townAndProduct2[1];

                if (townAndProduct === townAndProduct2){
                    elements[count-1] = otherLine;
                    line = line.replace(line, otherLine)
                }
            }
            count++;
        }
        return elements;

        for (let line of input) {
            let arr = line.split(' | ');
            let town = arr[0];
            let product = arr[1];
            let price = Number(arr[2]);
        }
    }
    input = removeUnneededElements(input);

    let products = {};
    let sequence = [];
    // put values in data structure
    for (let line of input) {
        let arr = line.split(' | ');
        let town = arr[0];
        let product = arr[1];
        let price = Number(arr[2]);


        if (product in products) {
            if (price < products[product].price) {
                products[product].price = price;
                products[product].town = town;
            }
        }
        else {
            let obj = {};
            obj.price = price;
            obj.town = town;
            products[product] = obj;
            sequence.push(product);
        }
    }
    // print
    for (let pr of sequence) {
        console.log(pr + " -> " + products[pr].price + ' (' + products[pr].town + ')');
    }
}

lowestPrices([
    'Sofia City | Audi | 100000',
    '1 | 2 | 300',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
    '2 | 2 | 200',
    '2 | 2 | 300',
])