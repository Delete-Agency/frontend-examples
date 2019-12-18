const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PostCssPipelineWebpackPlugin = require('./plugins/postcss-pipeline-webpack-plugin');
const cssnano = require('cssnano');

module.exports = (env) => {
    console.log('\nPRODUCTION BUILD\n');

    return {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        parse: {
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        }
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: true
                })
            ]
        },
        plugins: [
            new PostCssPipelineWebpackPlugin({
                prefix: '',
                pipeline: [
                    cssnano({
                        autoprefixer: {
                            remove: false,
                            add: false
                        },
                        safe: true,
                        discardComments: {
                            removeAll: true
                        }
                    })
                ]
            })
        ]
    };
};
