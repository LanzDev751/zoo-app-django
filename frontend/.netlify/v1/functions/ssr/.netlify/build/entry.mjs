import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BLRIo7a8.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/cuidadores/_id_.astro.mjs');
const _page2 = () => import('./pages/admin/cuidadores.astro.mjs');
const _page3 = () => import('./pages/admin/especies/_id_.astro.mjs');
const _page4 = () => import('./pages/admin/especies.astro.mjs');
const _page5 = () => import('./pages/admin/guias/_id_.astro.mjs');
const _page6 = () => import('./pages/admin/guias.astro.mjs');
const _page7 = () => import('./pages/admin/habitats/_id_.astro.mjs');
const _page8 = () => import('./pages/admin/habitats.astro.mjs');
const _page9 = () => import('./pages/admin/home.astro.mjs');
const _page10 = () => import('./pages/admin/itinerarios/_id_.astro.mjs');
const _page11 = () => import('./pages/admin/itinerarios.astro.mjs');
const _page12 = () => import('./pages/admin/zonas/_id_.astro.mjs');
const _page13 = () => import('./pages/admin/zonas.astro.mjs');
const _page14 = () => import('./pages/api/cuidadores/_id_.json.astro.mjs');
const _page15 = () => import('./pages/api/cuidadores.json.astro.mjs');
const _page16 = () => import('./pages/api/especies/_id_.json.astro.mjs');
const _page17 = () => import('./pages/api/especies.json.astro.mjs');
const _page18 = () => import('./pages/api/guias/_id_.json.astro.mjs');
const _page19 = () => import('./pages/api/guias.json.astro.mjs');
const _page20 = () => import('./pages/api/habitats/_id_.json.astro.mjs');
const _page21 = () => import('./pages/api/habitats.json.astro.mjs');
const _page22 = () => import('./pages/api/itinerarios/_id_.json.astro.mjs');
const _page23 = () => import('./pages/api/itinerarios.json.astro.mjs');
const _page24 = () => import('./pages/api/zonas/_id_.json.astro.mjs');
const _page25 = () => import('./pages/api/zonas.json.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.16_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/cuidadores/[id].astro", _page1],
    ["src/pages/admin/cuidadores/index.astro", _page2],
    ["src/pages/admin/especies/[id].astro", _page3],
    ["src/pages/admin/especies/index.astro", _page4],
    ["src/pages/admin/guias/[id].astro", _page5],
    ["src/pages/admin/guias/index.astro", _page6],
    ["src/pages/admin/habitats/[id].astro", _page7],
    ["src/pages/admin/habitats/index.astro", _page8],
    ["src/pages/admin/home.astro", _page9],
    ["src/pages/admin/itinerarios/[id].astro", _page10],
    ["src/pages/admin/itinerarios/index.astro", _page11],
    ["src/pages/admin/zonas/[id].astro", _page12],
    ["src/pages/admin/zonas/index.astro", _page13],
    ["src/pages/api/cuidadores/[id].json.ts", _page14],
    ["src/pages/api/cuidadores.json.ts", _page15],
    ["src/pages/api/especies/[id].json.ts", _page16],
    ["src/pages/api/especies.json.ts", _page17],
    ["src/pages/api/guias/[id].json.ts", _page18],
    ["src/pages/api/guias.json.ts", _page19],
    ["src/pages/api/habitats/[id].json.ts", _page20],
    ["src/pages/api/habitats.json.ts", _page21],
    ["src/pages/api/itinerarios/[id].json.ts", _page22],
    ["src/pages/api/itinerarios.json.ts", _page23],
    ["src/pages/api/zonas/[id].json.ts", _page24],
    ["src/pages/api/zonas.json.ts", _page25],
    ["src/pages/index.astro", _page26]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1370e22f-05fe-4247-b1d8-e206540b412f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
