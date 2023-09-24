import { e as error, r as redirect } from './index-64aa7a5e.js';
import { v as validateAndParseCsrfToken, c as getOIDCUserData } from './auth-d8ec8acd.js';
import { z } from 'zod';
import { b as base } from './paths-05fee424.js';
import 'openid-client';
import './Settings-12179b49.js';
import 'date-fns';
import './private-26a5baf7.js';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';
import './models-392647f7.js';
import 'handlebars';

async function updateUser(params) {
}
async function load({ url, locals, cookies }) {
  const { error: errorName, error_description: errorDescription } = z.object({
    error: z.string().optional(),
    error_description: z.string().optional()
  }).parse(Object.fromEntries(url.searchParams.entries()));
  if (errorName) {
    throw error(400, errorName + (errorDescription ? ": " + errorDescription : ""));
  }
  const { code, state } = z.object({
    code: z.string(),
    state: z.string()
  }).parse(Object.fromEntries(url.searchParams.entries()));
  const csrfToken = Buffer.from(state, "base64").toString("utf-8");
  const validatedToken = await validateAndParseCsrfToken(csrfToken, locals.sessionId);
  if (!validatedToken) {
    throw error(403, "Invalid or expired CSRF token");
  }
  await getOIDCUserData({ redirectURI: validatedToken.redirectUrl }, code);
  await updateUser();
  throw redirect(302, `${base}/`);
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const server_id = "src/routes/login/callback/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-38c7b523.js.map
