presentations = $(sort $(dir $(wildcard */index.md)))
presentationsHtml = $(addprefix docs/, $(addsuffix /index.html, $(presentations)))

.PHONY: all clean
all: $(presentationsHtml) docs/index.html

clean:
	rm -rf docs/

docs/%/index.html: %/index.md
	mkdir -p docs
	cd $(dir $<) && npm run build
	rm docs/$(dir $<)/reveal.json docs/$(dir $<)/reveal-md.json docs/$(dir $<)/plugins

docs/index.html: $(presentationsHtml) Makefile build-docs-index
	./build-docs-index > docs/index.html
