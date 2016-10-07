function split(input){
    let str = input.slice(0, 1).join('');
    let delimiter = input.slice(-1).join('');
    str.split(delimiter).forEach(e => console.log(e));
}

split([
    'One-Two-Three-Four-Five',
    '-'
])