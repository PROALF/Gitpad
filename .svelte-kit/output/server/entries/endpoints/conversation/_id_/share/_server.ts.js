import "openid-client";
import "../../../../../chunks/index.js";
async function POST({ params, url, locals }) {
  return new Response(
    JSON.stringify({
      url: ""
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
export {
  POST
};
