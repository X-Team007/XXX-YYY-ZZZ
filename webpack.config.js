// Copyright 2017 The Haohaoxiuche Team Authors. All right reserved. Use of
// this source that is governed by a Apache-style license that can be found in
// the LICENSE file.
//
// Default Configures is for building dist files.
//
// @authors hjboss <hongjiangproject@gmail.com> 2017-09 $$
const fs = require('fs')
const os = require('os')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const pxtorem = require('postcss-pxtorem')
const rucksack = require('rucksack-css')
const autoprefixer = require('autoprefixer')
const Visualizer = require('webpack-visualizer-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const { ifProduction, ifNotProduction } = getIfUtils(process.env.NODE_ENV || 'development')

module.exports = function (webpackConfig) {
        const pkgRoot = webpackConfig.outDir || __dirname
        const pkgPath = path.join(pkgRoot, 'package.json')
        const pkg = fs.existsSync(pkgPath)
                ? require(pkgPath)
                : {}

        const jsFileName = webpackConfig.chunkhash
                ? 'js/[name]-[chunkhash].js'
                : 'js/[name].min.js'
        const cssFileName = webpackConfig.chunkhash
                ? 'css/[name]-[chunkhash].css'
                : 'css/[name].min.css'
        const bundleName = webpackConfig.chunkhash
                ? 'bundle-[chunkhash].js'
                : 'bundle.js'

        let themeConfig = {}
        if (webpackConfig.theme && typeof (webpackConfig.theme) === 'object') {
                themeConfig = webpackConfig.theme
        } else if (webpackConfig.theme && typeof (webpackConfig.theme) === 'string') {
                let cfgPath = webpackConfig.theme

                if (cfgPath.charAt(0) === '.') {
                        cfgPath = path.resolve(pkgRoot, cfgPath)
                }

                themeConfig = require(cfgPath)
        }

        let buildPath = webpackConfig.output || path.join(pkgRoot, './build')
        let resolveModules = ['./node_modules']
        resolveModules.push(...(webpackConfig.modules || []))

        return {
                entry: webpackConfig.entry,
                output: {
                        path: buildPath,
                        filename: jsFileName,
                        chunkFilename: jsFileName
                },
                devtool: webpackConfig.devtool || 'source-map',
                resolve: {
                        modules: resolveModules,
                        extensions: [
                                webpackConfig.ReactNative
                                        ? '.js'
                                        : '.web.js',
                                webpackConfig.ReactNative
                                        ? '.ts'
                                        : '.web.ts',
                                webpackConfig.ReactNative
                                        ? '.tsx'
                                        : '.web.tsx',
                                '.js',
                                '.ts',
                                '.tsx',
                                '.jsx',
                                '.vue',
                                '.json',
                                '.less',
                                '.css',
                                '.html'
                        ],
                        alias: {
                                'vue$': 'vue/dist/vue.common.js'
                        }
                },
                externals: webpackConfig.externals || {
                        'react': 'React',
                        'react-dom': 'ReactDOM'
                },
                module: {
                        noParse: [/moment.js/],
                        rules: [
                                {
                                        test: /\.vue?$/,
                                        loader: 'vue-loader'
                                }, {
                                        test: /\.js$/,
                                        loader: 'babel-loader?presets=es2015',
                                        exclude: /node_modules/
                                }, {
                                        test: /\.jsx$/,
                                        loader: 'babel-loader'
                                }, {
                                        test: /\.tsx?$/,
                                        loaders: ['babel-loader', 'ts-loader']
                                }, {
                                        test: function (filePath) {
                                                return /\.css$/.test(filePath) && !/\.module\.css$/.test(filePath)
                                        },
                                        loader: ExtractTextPlugin.extract(['css-loader?sourceMap&-restructuring&-autoprefixer', 'postcss-loader'])
                                }, {
                                        test: /\.module\.css$/,
                                        loader: ExtractTextPlugin.extract([
                                                'css-loader?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base6' +
                                                '4:5]&-autoprefixer',
                                                'postcss-loader'
                                        ])
                                }, {
                                        test: function (filePath) {
                                                return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath) && !/normalize\.less$/.test(filePath)
                                        },
                                        loader: ExtractTextPlugin.extract([
                                                'css-loader?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base6' +
                                                '4:5]&-autoprefixer',
                                                'postcss-loader',
                                                `less-loader?{'sourceMap':true,'modifyVars':${JSON.stringify(themeConfig)}}`
                                        ])
                                }, {
                                        test: /normalize\.less$/,
                                        loader: ExtractTextPlugin.extract([
                                                'css-loader?sourceMap&-restructuring&-autoprefixer', 'postcss-loader', `less-loader?{'sourceMap':true,'modifyVars':${JSON.stringify(themeConfig)}}`
                                        ])
                                }, {
                                        test: /\.module\.less$/,
                                        loader: ExtractTextPlugin.extract([
                                                'css-loader?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base6' +
                                                '4:5]&-autoprefixer',
                                                'postcss-loader',
                                                `less-loader?{'sourceMap':true,'modifyVars':${JSON.stringify(themeConfig)}}`
                                        ])
                                }, {
                                        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                                        loader: 'url-loader?limit=10000&minetype=application/font-woff'
                                }, {
                                        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                                        loader: 'url-loader?limit=10000&minetype=application/font-woff'
                                }, {
                                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                                        loader: 'url-loader?limit=10000&minetype=application/octet-stream'
                                }, {
                                        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                                        loader: 'file-loader'
                                }, {
                                        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                                        loader: 'url-loader?limit=10000&minetype=image/svg+xml'
                                }, {
                                        test: function (filePath) {
                                                return /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i.test(filePath) && !/qrcode\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i.test(filePath)
                                        },
                                        loader: 'url-loader?limit=10000'
                                }, {
                                        test: /qrcode\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                                        loader: 'url-loader?limit=100000'
                                }, {
                                        test: /\.json$/,
                                        loader: 'json-loader'
                                }, {
                                        test: /\.html$/,
                                        loader: ['file-loader?name=[name].[ext]', 'html-minifier-loader']
                                }
                        ]
                },
                plugins: removeEmpty([
                        webpackConfig.commons
                                ? new webpack
                                        .optimize
                                        .CommonsChunkPlugin({ 'name': 'bundle', 'filename': bundleName })
                                : new webpack.DefinePlugin({}),
                        new webpack.LoaderOptionsPlugin({
                                minimize: true,
                                debug: true,
                                options: {
                                        tslint: {
                                                emitErrors: true,
                                                failOnHint: true
                                        },
                                        postcss: [
                                                rucksack(),
                                                autoprefixer({
                                                        browsers: [
                                                                'last 2 versions',
                                                                'Firefox ESR',
                                                                '> 1%',
                                                                'ie >= 8',
                                                                'iOS >= 8',
                                                                'Android >= 4'
                                                        ]
                                                }),
                                                pxtorem({ rootValue: 100, propWhiteList: [] })
                                        ]
                                }
                        }),
                        new ExtractTextPlugin({ filename: cssFileName, disable: false, allChunks: true }),
                        new CaseSensitivePathsPlugin(),
                        new CopyWebpackPlugin([
                                {
                                        from: './src/assets/',
                                        to: buildPath
                                }
                        ]),
                        ifProduction(new Visualizer()),
                        ifProduction(new webpack.optimize.OccurrenceOrderPlugin(false)),
                        ifProduction(new webpack.optimize.UglifyJsPlugin({
                                compress: {
                                        warnings: false,
                                        screw_ie8: true,
                                        conditionals: true,
                                        unused: true,
                                        comparisons: true,
                                        sequences: true,
                                        dead_code: true,
                                        evaluate: true,
                                        if_return: true,
                                        join_vars: true
                                },
                                output: {
                                        comments: false
                                },
                                sourceMap: true
                        })),
                        ifProduction(new webpack.DefinePlugin({
                                'process.env': {
                                        NODE_ENV: '"production"'
                                }
                        }))
                ]),
                devServer: {
                        contentBase: buildPath,
                        host: '0.0.0.0',
                        port: 8000,
                        compress: true
                }
        }
}
