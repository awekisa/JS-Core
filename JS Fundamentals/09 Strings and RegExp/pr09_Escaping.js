function escape(input) {
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
    console.log('<ul>');
    for (let item of input) {
        console.log(`  <li>${escapeWord(item)}</li>`);
    }
    console.log('</ul>');
}

escape(['<b>unescaped text</b>', 'normal& text'])