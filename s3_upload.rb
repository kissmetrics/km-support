#!/usr/bin/ruby
# Upload Files to S3

require 'rubygems'
require 'aws/s3'
require 'optparse'
require 'pathname'

amazon_keys = Pathname.new(".amazon_keys")
abort("ERROR: .amazon_keys doesn't exist. Read the README file") unless amazon_keys.exist?

options = {}

opts = OptionParser.new do |opts|
  opts.banner = "Usage: #{$0} [options] file1.png file2.pdf"

  opts.on("-v", "--[no-]verbose", "Run verbosely") do |v|
    options[:verbose] = v
  end
  
  opts.on("-tTYPE", "--type=TYPE", "The folder to upload the file to [MANDATORY]") do |t|
    options[:folder] = t
  end

  opts.on_tail("-h", "--help", "Show this message") do
    puts opts
    exit
  end

  if ARGV.count == 0
		puts opts
		exit
	end
end

files = opts.parse!(ARGV)

#Raise an exception if a folder isn't supplied
raise OptionParser::MissingArgument if options[:folder].nil?

AWS::S3::Base.establish_connection!(
	:access_key_id     => ENV['AMAZON_ACCESS_KEY_ID'],
 	:secret_access_key => ENV['AMAZON_SECRET_ACCESS_KEY']
)

class SupportFile < AWS::S3::S3Object
	set_current_bucket_to 'kissmetrics-support-files'
end

for file in files do
  puts "Uploading #{file}..." if options[:verbose]

  SupportFile.store("/assets/#{options[:folder]}/#{file}", open(file), :access => :public_read)
end
