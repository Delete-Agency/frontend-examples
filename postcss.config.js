module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-preset-env': {
            stage: 0
        },
        'postcss-normalize': {},
        'postcss-flexbugs-fixes': {},
        'postcss-object-fit-images': {},
        'postcss-pxtorem': {
            propList: ['font', 'font-size', 'letter-spacing']
        }
    }
};
