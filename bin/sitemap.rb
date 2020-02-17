#!/bin/env ruby


require 'date'
require 'nokogiri'

@urls = [
  {url:"/de/seasonal-calendar"},
  {url:"/ja/seasonal-calendar"},
  {url:"/en/seasonal-calendar"},
  {url:"/el/seasonal-calendar"},
  {url:"/pl/seasonal-calendar"},
  {url:"/sv/seasonal-calendar"},
  {url:"/de"},
  {url:"/ja"},
  {url:"/en"},
  {url:"/el"},
  {url:"/pl"},
  {url:"/sv"},
  {url:"/en/about"},
]

@base_url = "https://vegetably.com"

b = Nokogiri::XML::Builder.new(:encoding => 'UTF-8') do |xml|
  xml.urlset('xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9') {
    @urls.each do |u|
      xml.url {
        xml.send(:"loc", @base_url + u[:url])
        xml.send(:"lastmod", DateTime.now.strftime("%Y-%m-%d"))
      }
    end
  }
end

puts b.to_xml
