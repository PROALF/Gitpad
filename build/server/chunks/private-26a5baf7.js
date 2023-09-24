const COOKIE_NAME = "blindchat";
const HF_ACCESS_TOKEN = "";
const OPENID_CLIENT_ID = "";
const OPENID_CLIENT_SECRET = "";
const OPENID_SCOPES = "openid profile";
const OPENID_PROVIDER_URL = "https://huggingface.co";
const MODELS = '[\n  {\n    "name": "Xenova/LaMini-Flan-T5-783M",\n    "is_local": true,\n    "userMessageToken": "<|prompter|>",\n    "assistantMessageToken": "<|assistant|>",\n    "messageEndToken": "</s>",\n    "preprompt": "",\n    "promptExamples": [\n      {\n        "title": "What is love?",\n        "prompt": "What is love?"\n      }, {\n        "title": "Who is Ada Lovelace?",\n        "prompt": "Who is Ada Lovelace?"\n      }, {\n        "title": "What does end-to-end protected mean?",\n        "prompt": "What does end-to-end protected mean?"\n      }\n    ],\n    "parameters": {\n      "temperature": 0.9,\n      "top_p": 0.95,\n      "repetition_penalty": 1.2,\n      "top_k": 50,\n      "truncate": 1000,\n      "max_new_tokens": 1024\n    }\n  }\n]';
const OLD_MODELS = "[]";

export { COOKIE_NAME as C, HF_ACCESS_TOKEN as H, MODELS as M, OPENID_CLIENT_ID as O, OPENID_SCOPES as a, OPENID_PROVIDER_URL as b, OPENID_CLIENT_SECRET as c, OLD_MODELS as d };
//# sourceMappingURL=private-26a5baf7.js.map
