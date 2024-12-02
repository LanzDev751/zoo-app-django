/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_Cyry3a15.mjs';
import { $ as $$Dashboard } from '../../../chunks/Dashboard_CtQ2cjdq.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const host_url_origin = Astro2.url.origin;
  const data = await fetch(`${host_url_origin}/api/itinerarios.json`);
  const itinerarios = await data.json();
  const { id } = Astro2.params;
  const currentItinerario = itinerarios.find((itinerario) => itinerario.id === Number(id));
  if (!currentItinerario) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Dashboard", $$Dashboard, { "title": `Zoo Admin - Itinerario ${currentItinerario.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <h1 class="text-3xl font-bold uppercase">${`EDITAR ITINERARIO`}</h1> <div class="w-full max-w-lg"> <h2 class="text-xl font-semibold mb-4">Itinerario #${`${currentItinerario.id}`}</h2> </div> <div class="ml-0 max-w-lg"> ${renderComponent($$result2, "EditItinerario", null, { "itinerario": currentItinerario, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/forms/EditItinerario", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/PC/Documents/Proyectos/Personales/WildLife-Haven-App/frontend/src/pages/admin/itinerarios/[id].astro", void 0);

const $$file = "C:/Users/PC/Documents/Proyectos/Personales/WildLife-Haven-App/frontend/src/pages/admin/itinerarios/[id].astro";
const $$url = "/admin/itinerarios/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };