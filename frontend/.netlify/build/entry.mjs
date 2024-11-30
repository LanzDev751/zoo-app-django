import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Cup4INPV.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/especies/_id_.astro.mjs');
const _page2 = () => import('./pages/admin/especies.astro.mjs');
const _page3 = () => import('./pages/admin/home.astro.mjs');
const _page4 = () => import('./pages/api/especies/_id_.json.astro.mjs');
const _page5 = () => import('./pages/api/especies.json.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.16_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/especies/[id].astro", _page1],
    ["src/pages/admin/especies/index.astro", _page2],
    ["src/pages/admin/home.astro", _page3],
    ["src/pages/api/especies/[id].json.ts", _page4],
    ["src/pages/api/especies.json.ts", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "24c920c5-ceb0-44d2-b2cd-52e27efb0864"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
