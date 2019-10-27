'use strict';


module.exports = class WordWrap {
    constructor() {}

    transform(string, screenWidth) {
        const regExp = new RegExp(`(?![^\\n]{1,${screenWidth}}$)([^\\n]{1,${screenWidth}})\\s`, 'g');
        return string.replace(regExp, '$1\n');
    }
};
