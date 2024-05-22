import path from 'node:path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'swc-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    }
};

export default config;
