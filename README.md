Gitbook Typekit Plugin
==============

This is a plugin for adding [Typekit][6467-0001] to a [GitBook][6467-0002].

## How to use

Add configuration to your `book.json`. You'll find your Typekit Kit ID in the Typekit Editor under the _Embed Code_ link>. 

    "plugins": ["typekit@0.0.1"],
    pluginsConfig: {
        "typekit" : {
            "kitID": "xxxXXX"
        }
    },

Font settings can be added to the Gitbook style CSSes.

    "styles": {
            "website": "styles/website.css",
            "pdf": "styles/pdf.css",
            "epub": "styles/epub.css",
            "mobi": "styles/mobi.css"
        },

[6467-0001]: https://typekit.com/
[6467-0002]: https://www.gitbook.com/


