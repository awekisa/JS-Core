function count(input) {
    let word = input[0];
    let str = input[1];
    let count = 0;
    let p = -1;
    while (true) {
        p = str.indexOf(word, p + 1);
        if (p != -1) {
            count++;
        }
        else {
            return count;
        }
    }
}

count(['str', 'str igstr, strtr'])