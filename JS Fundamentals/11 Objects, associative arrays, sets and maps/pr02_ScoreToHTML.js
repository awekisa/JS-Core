function scoreToHTML(input){
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
    let html = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    let json = JSON.parse(input);

    json.forEach(function(e){
        html += `  <tr><td>${escapeWord(e.name)}</td><td>${e.score}</td></tr>\n`;
    })
    html += '</table>';
    return html;
}

console.log(scoreToHTML(['[{"name":"Pesho & Viki","score":479},{"name":"Gosho","score":205}]']))