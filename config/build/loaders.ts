import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const localIdentName = isDev ? '[path][name]__[local]__[hash:base64:4]' : '[local]--[hash:base64:6]';

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        exportLocalsConvention: 'dashes',
                        localIdentName,
                        localIdentHashSalt: 'my-custom-hash',
                        auto: (pathCss: string) => Boolean(pathCss.includes('.module.')),
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [tsLoader, cssLoader];
}
