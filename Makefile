build:
	./node_modules/.bin/browserify ./src/index.djs -t dogeify -s DSON > index.js

.PHONY: build
