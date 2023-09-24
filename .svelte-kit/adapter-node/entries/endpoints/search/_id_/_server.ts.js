import "../../../../chunks/index.js";
async function GET({ params, locals }) {
  return new Response(JSON.stringify(""), { headers: { "Content-Type": "application/json" } });
}
export {
  GET
};
