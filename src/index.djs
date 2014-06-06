quiet
    DSON.djs - A DSON parser, written in Dogescript.
    DSON spec: http://dogeon.org/

    MIT License
    @author Zach Bruggeman <mail@bruggie.com>
loud

so ./lib/parse.djs as parse
so ./lib/stringify.djs as stringify

very DSON is {}

DSON.parse is parse
DSON.stringify is stringify

module.exports is DSON
