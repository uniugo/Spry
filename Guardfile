guard 'process', :name => 'Compile', :command => 'bash Compile' do
    watch %r{^js/(.+\.js)$}
    watch %r{^font/(.+\.*)$}
    watch %r{^css/(.+\.s[ac]ss)$}
    watch %r{^css/components/(.+\.s[ac]ss)$}
end

guard "uglify", :input => "build/sprycss.js", :output => "build/sprycss.min.js"

guard 'livereload' do
    watch %r{web/.+\.(css|js|html)}
end
