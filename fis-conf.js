// 清除其他配置，只保留如下配置
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
// 配置配置文件，注意，清空所有的配置，只留下以下代码即可。
// 启用插件 
fis.hook('relative');

// 让所有文件，都使用相对路径。 
fis.match('**', {
    relative: true
})