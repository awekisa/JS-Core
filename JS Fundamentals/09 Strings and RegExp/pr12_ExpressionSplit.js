function split(input){
    let str = input[0];
    let arr = str.split(/[ ,.;()]/)
    arr.filter(e => e != "").forEach(e => console.log(e))
}

split(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'])