function start(input){
    let str = input.slice(0, 1).join('');
    let word = input.slice(-1).join('');
    console.log((str.lastIndexOf(word) === str.length - word.length)? 'true': 'false');
}

start(['howahow','how'])