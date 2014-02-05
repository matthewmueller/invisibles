build: components index.js
	@component build

components: component.json
	@component install

test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

.PHONY: test
