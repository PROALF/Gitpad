import { r as redirect } from './index-64aa7a5e.js';
import { b as base } from './paths-05fee424.js';
import './models-392647f7.js';
import 'openid-client';
import './private-26a5baf7.js';
import 'handlebars';
import 'zod';

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

export { GET, POST };
//# sourceMappingURL=_server.ts-aa1bba3a.js.map
