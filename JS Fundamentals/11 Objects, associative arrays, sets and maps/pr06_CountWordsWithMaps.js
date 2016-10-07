function countWords(input){
    let map = new Map();
    let regex = /\w+/g;
    let arr = input[0].match(regex);
    arr.forEach(e => {
        e = e.toLowerCase();
        if (e in map){
            map[e] += 1;
        }
        else{
            map[e] = 1;
        }
    });
    let sorter = Object.keys(map).sort().forEach(e => {
        console.log(`\'${e}\' -> ${map[e]} times`)
    });
}

countWords([
    'JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'
])