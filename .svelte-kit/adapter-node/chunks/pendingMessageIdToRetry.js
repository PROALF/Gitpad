import { w as writable } from "./index2.js";
const pendingMessage = writable("");
const pendingMessageIdToRetry = writable(null);
export {
  pendingMessage as a,
  pendingMessageIdToRetry as p
};
