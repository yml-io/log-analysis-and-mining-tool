class Genelizer {
    constructor() {
        console.log('init clss Genelizer');
    }
    say(t) {
        console.log(`you say: ${t}`);
    }
}

return {
    handler: function(context, next) {
        context.data += " | Genelizer";
        next();
    }
}