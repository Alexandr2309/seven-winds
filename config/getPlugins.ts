import { PluginOption } from 'vite';
import { BuildMiode } from './types/viteConfig';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export const getDevPlugins = async (isDev: boolean) => {
    if (!isDev) return [];

    const mkcertPlugin = (await import('vite-plugin-mkcert')).default;

    return [ mkcertPlugin() ] as PluginOption[];
};

export const getPlugins = async (buildMode: BuildMiode): Promise<PluginOption[]> => {
    const devPlugins = await getDevPlugins(buildMode === 'dev');

    return [
        react(),
        svgr(),
        ...devPlugins,
    ];
};
