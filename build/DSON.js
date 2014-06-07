!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.DSON=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/* 
    DSON.djs - A DSON parser, written in Dogescript.
    DSON spec: http://dogeon.org/

    MIT License
    @author Zach Bruggeman <mail@bruggie.com>
*/

var parse = _dereq_('./lib/parse.djs');
var dogeify = _dereq_('./lib/dogeify.djs');

var DSON = {};

DSON.parse = parse
DSON.dogeify = dogeify

module.exports = DSON
},{"./lib/dogeify.djs":2,"./lib/parse.djs":3}],2:[function(_dereq_,module,exports){
// DSON.dogeify 

function dogeify(obj) {
    var output = 'such';

    if (typeof obj !== 'object' || obj.length > -1) {
        throw 'Error: Must pass an object to dogeify'
    }

    for (var key in obj) {
        var val = obj[key];

        var type = typeof val;

        if (type === 'object' && val.length > -1) {
            output += ' "' + key + '" is so '
            for (var i = 0; i < val.length; i += 1) {
                if (i === val.length - 1) {
                    output += ' and '
                } else if (i !== 0) {
                    output += ' also '
                }

                output += '"' + val[i] + '"'
            }
            output += ' many'
        } else if (type === 'object') {
            output += ' "' + key + '" is ' + dogeify(val)
        } else if (type === 'number') {
            output += ' "' + key + '" is ' + val.toString(8) + ''
        } else if (type === 'string') {
            output += ' "' + key + '" is "' + val + '"'
        } else if (type === 'boolean') {
            output += ' "' + key + '" is '
            if (val === true) {
                output += 'yes'
            } else {
                output += 'no'
            }
        } else {
            output += ' "' + key + '" is "' + val.toString() + '"'
        }

        output += ','
    }

    output = output.replace(/,$/, '');
    output += ' wow'
    return output
}

module.exports = dogeify
},{}],3:[function(_dereq_,module,exports){
// DSON.parse 

function parse(string) {
    var output = undefined;
    var keys = string.match(/\S+/g);

    var currentKey = false;

    // @todo - clean this regex up 
    var tokenRegex = /^"|"$|"\.$|",$|,$|\.$/g;

    for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];

        if (key === 'such') {
            if (typeof output === 'undefined') {
                if (keys[keys.length - 1] === 'wow') {
                    // it's valid! :D 
                    output = {}
                }

                continue
            } else if (currentKey) {
                if (keys[i - 1] !== 'is') {
                    // not a valid value definition, keep going 
                    continue
                }

                var slice = keys.slice(i, keys.indexOf('wow', i) + 1);
                var obj = keys.splice(i, slice.length);
                var str = obj.join(' ');
                output[currentKey] = parse(str);
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
                key = key.replace(tokenRegex, '');
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

                key = key.replace(tokenRegex, '');
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
                    key = key.replace(tokenRegex, '');

                    if (key === 'many') {
                        break
                    } else if (key === 'and' || key === 'also') {
                        continue
                    } else {
                        output[currentKey].push(key);
                    }

                }
            }
        }

        if (key.match(/^\d/)) {
            // it's a number 

            if (currentKey) {
                key = key.replace('very', 'e');
                key = key.replace('VERY', 'E');
                // DSON 2 is in octal 
                output[currentKey] = parseInt(Number(key), 8)
            }
        }

        if (key === 'yes') {
            if (currentKey) {
                output[currentKey] = true
            }
        }

        if (key === 'no') {
            if (currentKey) {
                output[currentKey] = false
            }
        }

        if (key === 'empty') {
            if (currentKey) {
                output[currentKey] = null
            }
        }
    }

    return output;
}

module.exports = parse
},{}]},{},[1])
(1)
});