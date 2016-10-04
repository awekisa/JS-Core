function extractWords(input){
    let str = input[0];
    let words = str.match(/\w+/g);
    console.log(words.join('|'));
}

extractWords(['sdsd sds d_s ds wqw rw '])