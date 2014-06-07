## DSON.djs

A [DSON](http://dogeon.org/) parser in Dogescript. What am I doing?!

Work in progress. It mostly works, but there are probably some edge cases still.

### Install

If you're using Node/Browserify:
```bash
npm install dson-djs
```
```js
var DSON = require('dson-djs')
```

Otherwise, just add the `build/DSON.js` file to your page, and use the new global variable `DSON`.

### Usage
* `DSON.parse(str)` - Parses a string of DSON into a JSON object
* `DSON.dogeify(obj)` - Converts an object into a DSON string

### TODO:

* Add tests.
