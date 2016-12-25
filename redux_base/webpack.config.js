module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // }
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less/, loader: 'style!css!less' },
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel",
                query:
                {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    "plugins": []
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    devtool: 'source-map'
};