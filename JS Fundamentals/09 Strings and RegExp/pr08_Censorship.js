function censor (input){
    let str = input[0];
    let badWords = input.slice(1, input.length);
    for (let word of badWords){
        while(true){
            if (str.indexOf(word) != -1){
                str = str.replace(word, '-'.repeat(word.length));
            }
            else{
                break;
            }
        }
    }
    console.log(str);
}

censor(['roses are red, violets are red', 'red', ', violets are red'])