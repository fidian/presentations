presentations = $(sort $(dir $(wildcard */index.md)))
presentationsHtml = $(addprefix docs/, $(addsuffix /index.html, $(presentations)))

.PHONY: all
all: $(presentationsHtml) docs/index.html

docs/%/index.html: %/index.md
	cd $(dir $<) && npm run build

docs/index.html: $(presentationsHtml) Makefile build-docs-index
	./build-docs-index > docs/index.html
