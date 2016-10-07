function capitalize(input){
    let str = input[0];
    let regex = /\w+/g;
    let match = regex.exec(str);
    while (match){
        let word = '';
        let toReplace = match[0];
        for (let i = 0; i < toReplace.length; i++){
            if(i === 0){
                word += toReplace[i].toUpperCase();
            }
            else{
                word += toReplace[i].toLowerCase();
            }
        }
        str = str.replace(toReplace, word);
        match = regex.exec(str);
    }
    console.log(str);
}

capitalize(['Capitalize! these4 words'])