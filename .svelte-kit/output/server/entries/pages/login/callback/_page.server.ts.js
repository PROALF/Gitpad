import { e as error, r as redirect } from "../../../../chunks/index.js";
import { v as validateAndParseCsrfToken, b as getOIDCUserData } from "../../../../chunks/auth.js";
import { z } from "zod";
import { b as base } from "../../../../chunks/paths.js";
import "openid-client";
import "../../../../chunks/Settings.js";
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
export {
  load
};
