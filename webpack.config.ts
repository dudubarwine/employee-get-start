/**
 * @file webpack.config.ts
 * @description This is the main configuration file for the webpack build process.
 * @author Ilia Kamilov <iliakmlv@gmail.com>
 * @date 08/09/2024
 * @license MIT
 */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface WebpackConfig extends Configuration {
    devServer?: DevServerConfiguration;
}

const config: WebpackConfig = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
};

export default config;