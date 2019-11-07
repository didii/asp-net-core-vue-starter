module.exports = {
    publicPath: './',
    configureWebpack: {
        devtool: 'source-map',
        output: {
            devtoolModuleFilenameTemplate: info => {
                var $filename = 'webpack:///' + info.resourcePath;
                if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
                    $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
                }
                return $filename;
            },
            devtoolFallbackModuleFilenameTemplate: 'webpack-generated:///[resource-path]?[hash]', 
        }
    }
};
