const path = require('path');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
//questo plugin crea una pagina html con il collegamento dello script aggiornato con il nome nuovo
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    output: {
        path: path.resolve(__dirname, "dist"),
        //we save our images in an images directory
        assetModuleFilename: "images/[hash][ext][query]"
    },
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset"
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExctractPlugin.loader,
                        options: {
                            publicPath: ""
                        },
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        //carico il file html da usare come template
        template: "./src/template.html"
    }),
    new MiniCssExctractPlugin()
],
    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        hot: true
    }
}