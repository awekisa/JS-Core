function repeatString(input){
    let str = input.slice(0,1).join('');
    let num = Number(input.slice(-1).join(''));
    console.log(str.repeat(num));
}

repeatString(['repeat', '5'])