function countWords(input){
    let regex = /\w+/g;
    let arr = input[0].match(regex);
    let result = {};
    arr.forEach(e => {
        if (e in result){
            result[e] += 1;
        }
        else{
            result[e] = 1;
        }
    });
    return JSON.stringify(result);
}

 console.log(countWords([
    'Far too slow, you\'re far too slow.'
]))