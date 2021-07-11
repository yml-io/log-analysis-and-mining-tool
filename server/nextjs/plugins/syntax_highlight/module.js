class SyntaxHighlight {
    constructor() {
        console.log('init clss SyntaxHighlight');
    }
    say(t) {
        console.log(`you say: ${t}`);
    }
}

return {
    handler: function(context, next) {
        context.data += " | SyntaxHighlight";
        next();
    }
}