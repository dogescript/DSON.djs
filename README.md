## DSON.djs

A [DSON](http://dogeon.org/) parser in Dogescript. What am I doing?!

*Mega* work in progress. Like, it doesn't even really work yet. But here's some docs for what it will do:

* `DSON.parse(str)` - Parses a string of DSON into a JSON object
* `DSON.stringify(obj)` - Converts an object into a DSON string

You can see what I have so far by doing:

```bash
npm install
```

And then either:

```bash
node
> var DSON = require('./')
undefined
> DSON
```

Or:

```bash
open playground.html
```

And in your web console, use the `DSON` variable. Have fun!

### TODO:

* Make it actually work.
* Add tests.