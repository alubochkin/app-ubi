import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
    return {
        // alias,
        extensions: ['.tsx', '.ts', '.js'],
    };
}
