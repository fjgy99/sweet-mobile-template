module.exports = {
    plugins: {
        'autoprefixer': {browsers: ['iOS >= 7', 'Android >= 4']},
        'postcss-pxtorem': {rootValue: 100, propWhiteList: [], replace: true,},
    },
}
