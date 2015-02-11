# css
guard 'process', :name => 'Compile CSS', :command => 'bash Compile css' do
    watch %r{^font/(.+\.*)$}
    watch %r{^css/(.+\.s[ac]ss)$}
    watch %r{^css/components/(.+\.s[ac]ss)$}
end

# javascript
guard 'process', :name => 'Compile JavaScript', :command => 'bash Compile javascript' do
    watch %r{^js/(.+\.js)$}
end

guard "uglify", :input => "build/spry.js", :output => "build/spry.min.js"

# website
guard 'process', :name => 'Compile Website', :command => 'bash Compile website' do
    watch %r{web/content/.+\.(css|js|html)}
    watch %r{web/layouts/.+\.(css|js|html)}
    watch %r{web/lib/.+\.(css|js|html)}
end

# live reload website
guard 'livereload' do
    watch %r{web/build/.+\.(css|js|html)}
    watch %r{build/.+\.(css|js)}
end
