import "openid-client";
import "../../../../../chunks/models.js";
import "fs";
import "undici";
import "aws4fetch";
import "../../../../../chunks/index.js";
async function POST({ params, locals }) {
  return new Response(
    JSON.stringify({}),
    { headers: { "Content-Type": "application/json" } }
  );
}
export {
  POST
};
