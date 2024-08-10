import { getPlugins } from './config/getPlugins';
import { BuildMiode } from './config/types/viteConfig';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { getCssOptions } from './config/getCssOptions';

export default defineConfig(async ({ mode }) => {
    const [ _, buildMode ] = mode.split('-') as ['web', BuildMiode];

    const plugins = await getPlugins(buildMode);

    return {
        plugins,
        css: getCssOptions(),
        server: {
            port: 5132,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    };

});
