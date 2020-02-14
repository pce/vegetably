


build:
	yarn build

sitemap:
	ruby bin/sitemap.rb > public/sitemap.xml


.PHONY=sitemap build