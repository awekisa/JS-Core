function findName(input){
    let str = input[0];
    let regex = /\b_([A-Za-z0-9]+)\b/g;
    let match = regex.exec(str);
    let result = [];
    while(match){
        result.push(match[1]);
        match = regex.exec(str);
    }
    console.log(result.join());
}

findName(['__invalidVariable _evenMoreInvalidVariable_ _validVariable'])