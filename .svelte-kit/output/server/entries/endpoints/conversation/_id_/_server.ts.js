import "openid-client";
import { setTimeout } from "node:timers/promises";
import { c as collections } from "../../../../chunks/database.js";
import "fs";
import "undici";
import "../../../../chunks/models.js";
import "../../../../chunks/index.js";
import "aws4fetch";
import "@xenova/transformers";
let closed = false;
process.on("SIGINT", () => {
  closed = true;
});
let abortedGenerations = /* @__PURE__ */ new Map();
async function maintainAbortedGenerations() {
  while (!closed) {
    await setTimeout(1e3);
    try {
      const aborts = await collections.abortedGenerations.find({}).sort({ createdAt: 1 }).toArray();
      abortedGenerations = new Map(
        aborts.map(({ conversationId, createdAt }) => [conversationId.toString(), createdAt])
      );
    } catch (err) {
      console.error(err);
    }
  }
}
maintainAbortedGenerations();
async function POST({ request, fetch, locals, params }) {
  return new Response(void 0, {
    headers: void 0,
    status: 200,
    statusText: ""
  });
}
async function DELETE({ locals, params }) {
  return new Response();
}
async function PATCH({ request, locals, params }) {
  return new Response();
}
export {
  DELETE,
  PATCH,
  POST
};
