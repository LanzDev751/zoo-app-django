/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Cyry3a15.mjs';
import { $ as $$Dashboard } from '../../chunks/Dashboard_BatskeIf.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Dashboard", $$Dashboard, { "title": "Wild Zoo - Panel Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <h1 class="text-2xl font-bold">Users Management</h1> <div class="grid grid-cols-2 gap-8"> <div> <h2 class="text-xl font-semibold mb-4">Add New User</h2> <!-- <UserForm /> --> </div> <div> <h2 class="text-xl font-semibold mb-4">Edit User</h2> <div id="edit-form"> <!-- Edit form will be loaded here --> </div> </div> </div> <div> <h2 class="text-xl font-semibold mb-4">Users List</h2> <!-- <UsersList /> --> </div> </div> ` })}`;
}, "C:/Users/PC/Documents/Proyectos/Personales/WildLife-Haven-App/frontend/src/pages/admin/home.astro", void 0);

const $$file = "C:/Users/PC/Documents/Proyectos/Personales/WildLife-Haven-App/frontend/src/pages/admin/home.astro";
const $$url = "/admin/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
