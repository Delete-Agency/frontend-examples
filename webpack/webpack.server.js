const webpack = require('webpack');

module.exports = () => {
    console.log('\nDEV SERVER BUILD\n');

    return {
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            hot: true,
            stats: {
                children: false
            },
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    };
};
