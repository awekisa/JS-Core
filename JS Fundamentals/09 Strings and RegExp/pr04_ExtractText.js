function extract(input) {
    let str = input[0];
    let words = [];
    let rightPar = -1;
    while (true) {
        let leftPar = str.indexOf('\(', rightPar + 1);
        if (leftPar == -1) {
            break;
        }
        rightPar = str.indexOf('\)', leftPar + 1);
        if (rightPar == -1) {
            break;
        }
        let word = str.substring(leftPar + 1, rightPar);
    }
    console.log(words.join(', '));

}

// extract(['sdsfdfd(d) sd sd w (inat) sd (kole)sdsssa'])
extract(['fd(a) ssd ()s(asdasdasd) sd a(111)'])