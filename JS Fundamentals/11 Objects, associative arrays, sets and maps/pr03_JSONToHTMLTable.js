function createTable(input){
    let escapeWord = function (word) {
        let esc = '';
        for (let i = 0; i < word.length; i++) {
            if (word[[i]] == '<') {
                esc += '&lt;';
            }
            else if (word[i] == '>') {
                esc += '&gt;';
            }
            else if (word[i] == '&') {
                esc += '&amp;';
            }
            else if (word[i] == '"') {
                esc += '&quot;';
            }
            else if (word[i] == '\'') {
                esc += '&#39;';
            }
            else {
                esc += word[i];
            }
        }
        return esc;
    }
    let html = '<table>\n   <tr>';
    let arr = JSON.parse(input);
    for (let col of Object.keys(arr[0])){
        html += `<th>${escapeWord(col)}</th>`;
    }
    html += '</tr>\n';
    for (let obj of arr){
        html += `   <tr>`;
        for (let prop of Object.keys(obj)){
            let value = (typeof(obj[prop]) === 'number')? obj[prop]: escapeWord(obj[prop]);
            html += `<td>${value}</td>`;
        }
        html += '</tr>\n';
    }
    html +=  '</table>';
    return html;
}

console.log(createTable([
    '[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
]))