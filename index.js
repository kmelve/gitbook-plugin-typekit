module.exports = {
    book: {
        html: {
            "body:start": function() {
                var config = this.options.pluginsConfig.typekit || {};

                if (!config.kitID) {
                    throw "Need to option 'kitID' for Typekit plugin";
                }

                if (!config.configuration) {
                    config.configuration = 'auto';
                }

                if(typeof config.configuration === 'object' && config.configuration !== null) {
                    configuration = JSON.stringify(config.configuration);
                }
                else if (['auto', 'none'].indexOf(config.configuration) != -1) {
                    configuration = "'" + config.configuration + "'";
                }

                return "<script src='//use.typekit.net/"+config.kitID+"kij5crl.js'></script><script>try{Typekit.load();}catch(e){}</script>";
            }
        }
    }
};
