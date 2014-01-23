require 'rubygems'
require 'rake'

SOURCE = "."
CONFIG = {
  'posts' => File.join(SOURCE, "_posts"),
}

# Usage: rake post title="A Title"
desc "Begin a new post in #{CONFIG['posts']}"
task :post do
  abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
  title = ENV["title"] || "new-post"
  categories = ENV["categories"] || ""
  author = ENV["author"] || ""
  tags = ENV["tags"] || ""
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  filename = File.join(CONFIG['posts'], "#{Time.now.strftime('%Y-%m-%d')}-#{slug}.md")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "categories: #{categories}"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts "tags: [#{tags}]"
    post.puts "author: #{author}"
    post.puts "summary: "
    post.puts "---"
  end
end # task :post