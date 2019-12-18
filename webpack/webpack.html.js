const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    console.log('\nSTATIC HTML BUILD\n');

    return {
        plugins: [
            new CleanWebpackPlugin('public/modules', {
                root: path.resolve(__dirname, '..')
            }),
            new HtmlWebpackPlugin({
                template: './examples/index.hbs',
                filename: '../index.html',
                inject: false,
                alwaysWriteToDisk: true
            }),
            new HtmlWebpackPlugin({
                template: './examples/table/index.hbs',
                filename: '../modules/table.html',
                inject: false,
                alwaysWriteToDisk: true
            }),
            new HtmlWebpackHarddiskPlugin()
        ]
    };
};
