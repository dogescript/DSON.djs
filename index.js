!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.DSON=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/* 
    DSON.djs - A DSON parser, written in Dogescript.
    DSON spec: http://dogeon.org/

    MIT License
    @author Zach Bruggeman <mail@bruggie.com>
*/

var parse = _dereq_('./lib/parse.djs');
var stringify = _dereq_('./lib/stringify.djs');

var DSON = {};

DSON.parse = parse
DSON.stringify = stringify

module.exports = DSON
},{"./lib/parse.djs":2,"./lib/stringify.djs":3}],2:[function(_dereq_,module,exports){
// DSON.parse 

function parse(string) {
    var output = undefined;
    var keys = string.match(/'[^']+'|\S+/g);

    var currentKey = false;

    for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];

        if (key === 'such') {
            if (keys[keys.length - 1] === 'wow') {
                // it's valid! :D 
                output = {}
            }
        }

        if (key === 'wow') {
            // already covered with such case 
            continue
        }

        if (key.indexOf('"') !== -1) {
            // it's a string 
            // @todo - unicode string support as in spec 

            // we're defining a key 
            if (currentKey === false) {
                key = key.replace(/"/g, '');
                currentKey = key
                // create the key 
                output[key] = null
                continue
            }

            if (currentKey) {
                if (keys[i - 1] !== 'is') {
                    // not a valid value definition, keep going 
                    continue
                }

                key = key.replace(/"/g, '');
                output[currentKey] = key
                currentKey = false
                continue
            }
        }

        if (key === 'so') {
            // it's an array 

            if (currentKey) {
                if (keys[i - 1] !== 'is') {
                    // not a valid value definition, keep going 
                    continue
                }

                output[currentKey] = []

                // append values 

                for (var j = i += 1; j < keys.length; j += 1) {
                    var key = keys[j];
                    key = key.replace(/"/g, '');

                    if (key === 'many') {
                        break
                    } else {
                        output[currentKey].push(key);
                    }

                }
            }
        }
    }

    return output;
}

module.exports = parse
},{}],3:[function(_dereq_,module,exports){
// DSON.stringify 
// coming later
},{}]},{},[1])
(1)
});