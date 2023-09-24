import { Issuer } from "openid-client";
import { addYears, addHours } from "date-fns";
import { a as OPENID_CLIENT_ID, C as COOKIE_NAME, b as OPENID_SCOPES, c as OPENID_PROVIDER_URL, d as OPENID_CLIENT_SECRET } from "./private.js";
import { z } from "zod";
import { d as dev } from "./environment.js";
async function sha256(input) {
  const utf8 = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
const requiresUser = !!OPENID_CLIENT_ID;
function refreshSessionCookie(cookies, sessionId) {
  cookies.set(COOKIE_NAME, sessionId, {
    path: "/",
    // So that it works inside the space's iframe
    sameSite: "none",
    secure: !dev,
    httpOnly: true,
    expires: addYears(/* @__PURE__ */ new Date(), 1)
  });
}
const authCondition = (locals) => {
  return locals.user ? { userId: locals.user._id } : { sessionId: locals.sessionId, userId: { $exists: false } };
};
async function generateCsrfToken(sessionId, redirectUrl) {
  const data = {
    expiration: addHours(/* @__PURE__ */ new Date(), 1).getTime(),
    redirectUrl
  };
  return Buffer.from(
    JSON.stringify({
      data,
      signature: await sha256(JSON.stringify(data) + "##" + sessionId)
    })
  ).toString("base64");
}
async function getOIDCClient(settings) {
  const issuer = await Issuer.discover(OPENID_PROVIDER_URL);
  return new issuer.Client({
    client_id: OPENID_CLIENT_ID,
    client_secret: OPENID_CLIENT_SECRET,
    redirect_uris: [settings.redirectURI],
    response_types: ["code"]
  });
}
async function getOIDCAuthorizationUrl(settings, params) {
  const client = await getOIDCClient(settings);
  const csrfToken = await generateCsrfToken(params.sessionId, settings.redirectURI);
  const url = client.authorizationUrl({
    scope: OPENID_SCOPES,
    state: csrfToken
  });
  return url;
}
async function getOIDCUserData(settings, code) {
  const client = await getOIDCClient(settings);
  const token = await client.callback(settings.redirectURI, { code });
  const userData = await client.userinfo(token);
  return { token, userData };
}
async function validateAndParseCsrfToken(token, sessionId) {
  try {
    const { data, signature } = z.object({
      data: z.object({
        expiration: z.number().int(),
        redirectUrl: z.string().url()
      }),
      signature: z.string().length(64)
    }).parse(JSON.parse(token));
    const reconstructSign = await sha256(JSON.stringify(data) + "##" + sessionId);
    if (data.expiration > Date.now() && signature === reconstructSign) {
      return { redirectUrl: data.redirectUrl };
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}
export {
  authCondition as a,
  getOIDCUserData as b,
  refreshSessionCookie as c,
  getOIDCAuthorizationUrl as g,
  requiresUser as r,
  validateAndParseCsrfToken as v
};
