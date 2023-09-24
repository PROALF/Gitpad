import { r as redirect } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "../../../chunks/models.js";
import "openid-client";
const POST = async ({ locals, request }) => {
  return new Response(
    JSON.stringify({
      conversationId: ""
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
const GET = async () => {
  throw redirect(302, `${base}/`);
};
export {
  GET,
  POST
};
