function wordOccurance(input){
    let str = input[0];
    let word = input[1];
    let regex = new RegExp("\\b" + word + "\\b" , 'gi');
    let arr = str.match(regex);
    (arr === null)? console.log(0) : console.log(arr.length);
}

wordOccurance(['thedf Theh dfdf', 'the'])