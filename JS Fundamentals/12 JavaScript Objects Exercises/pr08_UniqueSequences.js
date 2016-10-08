function uniqueSequences(input) {
    let set = new Set();

    input.forEach(e => {
        // extracting the numbers from the input sting, sorting
        // and JSON stringifying to be able to use set for unique values
        let arr = e.match(/([-\d.]+)/g).map(Number).sort((e1, e2) => sortArrayOfNumbers(e1, e2));
        set.add(JSON.stringify(arr));
    });

    // set -> array, JSON parse for length comparison and printing
    [...set].map(e => JSON.parse(e)).sort((e1, e2) => {
        return e1.length - e2.length;
    }).forEach(e => console.log('[' + e.join(', ') + ']'));

    function sortArrayOfNumbers(e1, e2) {
        return e2 - e1;
    }
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17.5, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
    '[112, 113 , -114.1 -114.1]',
    '[1, 1, 1]',
    '[1, 1.0, 1]',
    '[1, 1, 1]'
])