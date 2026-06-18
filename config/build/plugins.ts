import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path,
        }),
        new webpack.ProgressPlugin(),
        new MiniExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
    ];
}
