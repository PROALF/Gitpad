import 'openid-client';
import { setTimeout } from 'node:timers/promises';
import { c as collections } from './database-4d24c231.js';
import 'fs';
import './index-dc9484f5.js';
import './models-392647f7.js';
import './index-64aa7a5e.js';
import 'aws4fetch';
import '@xenova/transformers';
import 'assert';
import 'net';
import 'http';
import 'stream';
import 'buffer';
import 'util';
import 'querystring';
import 'stream/web';
import 'events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'tls';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'crypto';
import 'diagnostics_channel';
import './private-26a5baf7.js';
import 'handlebars';
import 'zod';

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

export { DELETE, PATCH, POST };
//# sourceMappingURL=_server.ts-1aa62850.js.map
