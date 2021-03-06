const RawSource = require('webpack-sources').RawSource;
const postcss = require('postcss');

const MASK = /\.css$/;

/**
 * @param {Function} options.predicate is a function invoked per CSS file
 * @param {String} options.prefix is a string attached to the new file
 * @param {Array} options.pipeline is a list of PostCSS plugins
 */
function PostCssPipelineWebpackPlugin(options) {
    this._options = Object.assign({
        predicate: () => true,
        prefix: 'processed.',
        pipeline: []
    }, options);
}

PostCssPipelineWebpackPlugin.prototype.apply = function (compiler) {
    const options = this._options;

    compiler.plugin('emit', (compilation, callback) => {
        const processor = postcss(options.pipeline);

        Promise
            .all(
                Object.keys(compilation.assets)
                    .filter(k => MASK.test(k) && options.predicate(k))
                    .map(name => ({
                        from: name,
                        to: options.prefix + name
                    }))
                    .map(tuple => processor
                        .process(compilation.assets[tuple.from].source(), tuple)
                        .then(result => {
                            compilation.assets[tuple.to] = new RawSource(result.css);
                        })
                    )
            )
            .then(() => callback())
            .catch(err => callback(err));
    });
};

module.exports = PostCssPipelineWebpackPlugin;
