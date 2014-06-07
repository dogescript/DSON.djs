// DSON Tests
// Not written in dogescript, just to ensure there's no bugs

var test = require('tape');
var DSON = require('../');

var tests = {
    'Object': {
        dson: 'such "foo" is "bar", "doge" is "shibe" wow',
        expected: {'foo': 'bar', 'doge': 'shibe'}
    },

    'Nested object': {
        dson: 'such "foo" is such "shiba" is "inu", "doge" is yes wow wow',
        expected: {'foo': {'shiba': 'inu', 'doge': true}}
    },

    'Array': {
        dson: 'such "foo" is so "bar" also "baz" and "fizzbuzz" many wow',
        expected: {'foo': ['bar', 'baz', 'fizzbuzz']}
    },

    'Number': {
        dson: 'such "foo" is 42very3 wow',
        dogeifyExpect: 'such "foo" is 42000 wow',
        expected: {'foo': 17408}
    }
}

test('DSON.parse', function (t) {
    t.plan(Object.keys(tests).length);

    for (var key in tests) {
        var data = tests[key];
        t.deepEqual(DSON.parse(data.dson), data.expected, 'Produced expected result from test "' + key + '"');
    }

    t.end();
});

test('DSON.dogeify', function (t) {
    t.plan(Object.keys(tests).length);

    for (var key in tests) {
        var data = tests[key];
        t.deepEqual(DSON.dogeify(data.expected), (data.dogeifyExpect || data.dson), 'Produced expected result from test "' + key + '"');
    }

    t.end();
});