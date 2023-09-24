import { b as base } from "../../../chunks/paths.js";
import "openid-client";
import { r as redirect } from "../../../chunks/index.js";
const actions = {
  delete: async function({ locals }) {
    throw redirect(303, `${base}/`);
  }
};
export {
  actions
};
