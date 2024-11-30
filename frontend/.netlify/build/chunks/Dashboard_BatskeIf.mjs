import { c as createComponent, r as renderTemplate, e as renderSlot, a as addAttribute, f as renderHead, b as createAstro } from './astro/server_Cyry3a15.mjs';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { title } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><script src="/node_modules/htmx.org/dist/htmx.min.js"><\/script>', '</head> <body class="bg-gray-100"> <div class="min-h-screen flex"> <!-- Sidebar --> <nav class="bg-gray-800 w-64 p-6 space-y-4"> <div class="text-white text-xl font-bold mb-8">Dashboard</div> <ul class="space-y-4"> <li', '> <a href="/admin/home"', ">Home</a> </li> <li", '> <a href="/admin/especies" class="block">Especies</a> </li> <li', '> <a href="/admin/habitats" class="block">Habitats</a> </li> <li', '> <a href="/admin/itinerarios" class="block">Zonas</a> </li> <li', '> <a href="/admin/guias" class="block">Guias</a> </li> <li', '> <a href="/admin/cuidadores" class=" block">Cuidadores</a> </li> <li', '> <a href="/admin/itinerarios" class="block">Itinerarios</a> </li> </ul> </nav> <!-- Main Content --> <main class="flex-1 p-8 max-h-screen overflow-scroll"> ', " </main> </div> </body></html>"])), title, renderHead(), addAttribute(`px-4 py-2 rounded-md ${pathname.includes("admin/home") ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`block`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname.includes("/admin/especies") ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname === "admin/habitats" ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname === "admin/zonas" ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname === "admin/guias" ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname === "admin/cuidadores" ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), addAttribute(`px-4 py-2 rounded-md ${pathname === "admin/itinerarios" ? "bg-green-400 text-white hover:text-white" : "text-gray-300 hover:text-white"}`, "class"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/PC/Documents/Proyectos/Personales/WildLife-Haven-App/frontend/src/layouts/Dashboard.astro", void 0);

export { $$Dashboard as $ };
