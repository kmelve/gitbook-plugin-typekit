module.exports = {
    book: {
        html: {
            "body:start": function() {
                var config = this.options.pluginsConfig.typekit || {};

                if (!config.kitID) {
                    throw "Need to option 'kitID' for Typekit plugin";
                }
                return "<script src='//use.typekit.net/"+config.kitID+"kij5crl.js'></script><script>try{Typekit.load();}catch(e){}</script>";
            }
        }
    }
};
