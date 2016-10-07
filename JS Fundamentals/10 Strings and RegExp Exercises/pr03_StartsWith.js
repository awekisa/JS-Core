function start(input){
    let str = input.slice(0, 1).join('');
    let word = input.slice(-1).join('');
    console.log((str.indexOf(word) === 0)? 'true': 'false');
}

start(['how asdas','how'])