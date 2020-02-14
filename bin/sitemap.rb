#!/bin/env ruby


require 'nokogiri'

@urls = [
  {url:"/de/seasonal-calendar"},
  {url:"/ja/seasonal-calendar"},
  {url:"/en/seasonal-calendar"},
  {url:"/el/seasonal-calendar"},
  {url:"/en"},
  {url:"/en/about"},
]

@base_url = "https://vegetable.com"

b = Nokogiri::XML::Builder.new(:encoding => 'UTF-8') do |xml|
  xml.urlset('xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9') {
    @urls.each do |u|
      xml.url {
        xml.send(:"loc", @base_url + u[:url])
        xml.send(:"lastmod", "2020-02-14")
      }
    end
  }
end

puts b.to_xml
