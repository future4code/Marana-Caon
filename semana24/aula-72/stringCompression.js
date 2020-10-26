"use strict";
exports.__esModule = true;
exports.stringCompression = void 0;
exports.stringCompression = function (input) {
    var substrings = [];
    var lastChar = input[0];
    var charCount = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    substrings.push(lastChar + charCount);
    var result = "";
    for (var _a = 0, substrings_1 = substrings; _a < substrings_1.length; _a++) {
        var key = substrings_1[_a];
        result += key;
    }
    return result.length > input.length ? input : result;
};
console.log(exports.stringCompression("abracadabra"));
