function population(input){
    let regex = /\s<->\s/;
    let towns = new Map();
    for (let line of input){
        let arr = line.split(regex);
        let town = arr[0];
        let pop = Number(arr[1]);
        if (town in towns){
            towns[town] += pop;
        }
        else{
            towns[town] = pop;
        }
    }
    for (let t in towns){
        console.log(t + ' : ' + towns[t]);
    }
}

population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1'

])