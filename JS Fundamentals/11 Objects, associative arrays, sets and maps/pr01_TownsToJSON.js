function townsToJSON(input) {
    let arr = [];
    for (let item of input.slice(1)) {
        let line = item.split(/\s*\|\s*/).filter(e => e != "");
        let obj = {
            Town: line[0], Latitude: Number(line[1]), Longitude: Number(line[2])
        }
        arr.push(obj);
    }
    console.log(JSON.stringify(arr));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])