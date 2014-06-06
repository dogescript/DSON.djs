quiet
    DSON.djs - A DSON parser, written in Dogescript.
    DSON spec: http://dogeon.org/

    MIT License
    @author Zach Bruggeman <mail@bruggie.com>
loud

so ./lib/parse.djs as parse
so ./lib/dogeify.djs as dogeify

very DSON is {}

DSON.parse is parse
DSON.dogeify is dogeify

module.exports is DSON
