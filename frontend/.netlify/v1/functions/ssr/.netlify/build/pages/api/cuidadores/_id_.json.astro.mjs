export { renderers } from '../../../renderers.mjs';

const prerender = false;
const BASE_URL_API = "http://localhost:8000/api";
const DELETE = async ({ request, params }) => {
  const { id } = params;
  try {
    const res = await fetch(`${BASE_URL_API}/cuidadores/${id}/`, {
      method: "DELETE"
    });
    if (!res.ok) {
      return new Response(JSON.stringify({
        message: "Error al enviar la petición"
      }), {
        status: 410
      });
    }
    return new Response(JSON.stringify({ message: "Especie eliminada correctamente" }), { status: 200 });
  } catch (e) {
    return new Response(
      JSON.stringify({ message: "Error el enviar la request. Revisa se la url es correcta" }),
      { status: 500, statusText: "error al realizar la request" }
    );
  }
};
const PUT = async ({ request, params }) => {
  const { id } = params;
  console.log("reciebiendo el ID de especie para actualizar", id);
  try {
    const data = await request.json();
    const res = await fetch(`${BASE_URL_API}/cuidadores/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    if (!res.ok) {
      return new Response(JSON.stringify({
        message: "Error al enviar la petición"
      }), {
        status: 500
      });
    }
    const output = await res.json();
    return new Response(JSON.stringify(output), { status: 200 });
  } catch (e) {
    return new Response(
      JSON.stringify({ message: "Error el enviar la request. Revisa se la url es correcta" }),
      { status: 500, statusText: "error al realizar la request" }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    PUT,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
