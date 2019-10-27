'use strict';


module.exports = class WordWrap {
    constructor() {}

    transform(string, screenWidth, cut = true) {
        const wrap = (s, w) => s.replace(
            new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
        );

        return wrap(string, screenWidth);
    }
};
