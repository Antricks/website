window.onload = function() {
    
    syntax_highlight_list = document.getElementsByClassName("syntax-highlight")

    var strReg1 = /"(.*?)"/g,
        strReg2 = /'(.*?)'/g,
        specialReg = /\b(new|var|if|do|function|while|switch|for|foreach|in|continue|break|case)(?=[^\w])/g,
        specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$|this)(?=[^\w])/g,
        specialJsReg = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)(?=[^\w])/g,
        specialMethReg = /\b(indexOf|match|replace|toString|length)(?=[^\w])/g,
        specialCommentReg = /(\/\*.*\*\/)/g,
        inlineCommentReg = /(\/\/.*)/g;

    var htmlTagReg = /(&lt;[^\&]*&gt;)/g;

    var sqlReg = /\b(CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|ORDER|BY|GROUP|LIMIT|INNER|OUTER|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR)(?=[^\w])/g;

    function codeHighlight(text) {
        var parsed = text.replace(strReg1, '<span class="green">"$1"</span>');
        parsed = parsed.replace(strReg2, '<span class="green">\'$1\'</span>');
        parsed = parsed.replace(specialReg, '<span class="orange">$1</span>');
        parsed = parsed.replace(specialJsGlobReg, '<span class="blue">$1</span>');
        parsed = parsed.replace(specialJsReg, '<span class="yellow">$1</span>');
        parsed = parsed.replace(specialMethReg, '<span class="yellow">$1</span>');
        parsed = parsed.replace(htmlTagReg, '<span class="aqua">$1</span>');
        parsed = parsed.replace(sqlReg, '<span class="purple">$1</span>');
        parsed = parsed.replace(specialCommentReg, '<span class="gray">$1</span>');
        parsed = parsed.replace(inlineCommentReg, '<span class="gray">$1</span>');

        return (parsed);
    }

    for (element of syntax_highlight_list) {
        element.innerHTML = codeHighlight(element.innerText);
    }
}