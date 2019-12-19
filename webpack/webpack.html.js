const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    console.log('\nSTATIC HTML BUILD\n');

    return {
        plugins: [
            new CleanWebpackPlugin('/modules', {
                root: path.resolve(__dirname, '..')
            }),

        ]
    };
};
