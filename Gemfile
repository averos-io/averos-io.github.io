source "https://rubygems.org"
# git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem "jekyll", "~> 4.2.0"
gem "webrick"

gem "wdm", "~> 0.1.0" if Gem.win_platform?

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
end
