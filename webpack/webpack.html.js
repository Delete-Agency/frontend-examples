const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    console.log('\nSTATIC HTML BUILD\n');

    return {
        plugins: [
            new CleanWebpackPlugin('/docs', {
                root: path.resolve(__dirname, '..')
            }),
        ]
    };
};
