import { w as writable } from './shared-server-26696cfd.js';

const ERROR_MESSAGES = {
  default: "Oops, something went wrong.",
  authOnly: "You have to be logged in.",
  rateLimited: "You are sending too many messages. Try again later."
};
const error = writable(null);

export { ERROR_MESSAGES as E, error as e };
//# sourceMappingURL=errors-1f4790d7.js.map
