const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/dist/';

module.exports = mode => ({
    devtool: "source-map",
    entry: {
        app: "./app",
        examples: "./examples"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: ASSET_PATH,
        filename: "[name].js",
        jsonpFunction: "webpackJsonpDelete"
    },
    resolve: {
        extensions: [".js"],
        modules: ["node_modules", path.resolve(__dirname, "../app")],
        alias: {
            modernizr$: path.resolve(__dirname, "../.modernizrrc")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    highlightCode: true
                }
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: ["modernizr-loader", "json-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /svg[\/\\]/,
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
                }
            },
            {
                test: /\.svg$/,
                include: /svg[\/\\]/,
                use: [
                    {
                        loader: "svg-sprite-loader",
                        options: {
                            symbolId: "icon-[name]"
                        }
                    },
                    {
                        loader: "svgo-loader",
                        options: {
                            plugins: [
                                { removeNonInheritableGroupAttrs: true },
                                { collapseGroups: true },
                                { removeAttrs: { attrs: "(fill|stroke)" } }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            automaticNameDelimiter: ".",
            name: "vendors"
        },
        runtimeChunk: {
            name: "vendors"
        }
    },
    plugins: [
        new CleanWebpackPlugin("dist", {
            root: path.resolve(__dirname, "..")
        })
    ],
    stats: {
        children: false
    }
});
