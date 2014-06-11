desc "Start the jekyll server"
task default: [:server]

desc "Start the jekyll server"
task :server do
  sh "jekyll serve"
end

desc "Set up the environment"
task :setup do
  system("cp ./.ruby-gemset.example ./.ruby-gemset")
  system("cp ./.ruby-version.example ./.ruby-version")
  system("cd $(pwd)")
end

task :install_rvm do
  system("\\curl -sSL https://get.rvm.io | bash -s stable")
end

task :install_gems do
  system("gem install bundler")
  system("bundle")
end
