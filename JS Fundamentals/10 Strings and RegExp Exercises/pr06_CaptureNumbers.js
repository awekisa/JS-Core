function captureNumbers(input){
    let arr = [];
    let regex = /\d+/g;
    for (let str of input){
        let match = regex.exec(str);
        while(match){
            arr.push(match[0]);
            match = regex.exec(str);
        }
    }
    console.log(arr.join(' '));
}

captureNumbers(['sdf f3000', '1','123:34'])