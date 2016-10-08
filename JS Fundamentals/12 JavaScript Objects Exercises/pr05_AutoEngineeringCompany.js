function sortCars(input){
    let carBrands = new Map();

    for (let line of input){
        let arr = line.split(' | ');
        let brand = arr[0];
        let model = arr[1];
        let amount = Number(arr[2]);

        // CHECK IF BRAND EXIST
        if (carBrands.has(brand)){

            // CHECK IF MODEL EXIST
            if (carBrands.get(brand).has(model)){
                // UPDATE MODEL
                let currentAmount = carBrands.get(brand).get(model);
                carBrands.get(brand).set(model, currentAmount + amount);
            }

            else{
                // ADD NEW MODEL
                carBrands.get(brand).set(model, amount);
            }
        }
        // NEW BRAND
        else{
            carBrands.set(brand, new Map());
            carBrands.get(brand).set(model, amount);
        }
    }

    // Print
    for (let key of carBrands.keys()){
        console.log(key);
        let models = carBrands.get(key);
        for (let [model, value] of models){
            console.log('###' + model + ' -> ' + value);
        }
    }
}



sortCars([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 100',
    'Lada | Niva | 100000',
    'Lada | Jigula | 1000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

])