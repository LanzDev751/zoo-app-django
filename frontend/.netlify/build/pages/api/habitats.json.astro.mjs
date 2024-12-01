export { renderers } from '../../renderers.mjs';

const prerender = false;
const BASE_URL_API = "https://zoo-app-django.onrender.com";
const GET = async ({ request }) => {
  const res = await fetch(`${BASE_URL_API}/habitats/`);
  const output = await res.json();
  if (!res.ok) {
    return new Response(JSON.stringify({
      message: "Error al obtener la response"
    }), {
      status: 410
    });
  }
  return new Response(JSON.stringify(output), { status: 200 });
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const res = await fetch(`${BASE_URL_API}/habitats/create/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    if (!res.ok) {
      return new Response(JSON.stringify({
        message: "Error al enviar la petición a /habitats/create"
      }), {
        status: 300
      });
    }
    const output = await res.json();
    return new Response(JSON.stringify(output), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ message: "Error el enviar la request. Revisa se la url es correcta" }),
      { status: 500, statusText: "error al realiar la request" }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
