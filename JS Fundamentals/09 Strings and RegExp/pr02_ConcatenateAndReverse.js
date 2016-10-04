function concatAndReverse(input){
    let str = input.join('');
    str = str.split('').reverse().join('');
    console.log(str);
}

concatAndReverse(['I', 'am', 'student'])