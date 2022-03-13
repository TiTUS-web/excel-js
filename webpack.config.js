const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

let htmlPageNames = ['index', 'excel', 'dashboard'];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
    return new HtmlWebpackPlugin({
        template: `./src/${name}.html`, // relative path to the HTML files
        filename: `${name}.html`, // output HTML files
    });
});

let mode = 'development';
let target = 'web';
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        pngquant: {
            quality: 85,
        },
        plugins: [
            ImageminMozjpeg({
                quality: 85,
                progressive: true,
            }),
        ],
    }),
].concat(multipleHtmlPlugins);

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ''},
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                    /*
          If you want to inline larger images, you can set
            a custom `maxSize` for inline like so: 
              maxSize: 30 * 1024,
          */
                },
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]',
                },
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },

    plugins: plugins,

    target: target,

    devtool: 'source-map',

    resolve: {
        extensions: ['*', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        port: 7070,
    },
};
