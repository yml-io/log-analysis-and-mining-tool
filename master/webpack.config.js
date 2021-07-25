const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports={
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-bundle-[hash:5].js"
    },
    devtool: 'inline-source-map', // !!!!
    mode: 'production',
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"],
        alias: {
            "@": path.resolve("src")
        }
    },
    devServer: {
        contentBase: './dist',
        host: "localhost",
        port: 8081,
        open: true,
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'  //yarn add @babel/core @babel/preset-react -D
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                            // '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.svg$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({title: "aaa", template: "./public/index.html"}),
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ]
}

