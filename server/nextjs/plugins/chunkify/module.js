class Chunkify {
    constructor() {
        console.log('init clss Chunkify');
    }
    say(t) {
        console.log(`you say: ${t}`);
    }
}

return {
    handler: function(context, next) {
        context.series += " | chunkify";
        next();
    }
}