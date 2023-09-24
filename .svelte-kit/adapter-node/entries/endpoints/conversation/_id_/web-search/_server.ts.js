import "openid-client";
import "../../../../../chunks/models.js";
import "serpapi";
import "../../../../../chunks/index.js";
import "fs";
import "undici";
import "aws4fetch";
import "jsdom";
import "@huggingface/inference";
async function GET({ params, locals, url }) {
  return new Response(void 0, { headers: { "Content-Type": "application/json" } });
}
export {
  GET
};
