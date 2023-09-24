import 'openid-client';
import './models-392647f7.js';
import './index-64aa7a5e.js';
import './private-26a5baf7.js';
import 'handlebars';
import 'zod';

async function GET({ params, locals }) {
  return new Response(
    JSON.stringify(
      {
        note: "This is a preview of the prompt that will be sent to the model when retrying the message. It may differ from what was sent in the past if the parameters have been updated since",
        prompt,
        model: "",
        parameters: {
          return_full_text: false
        }
      },
      null,
      2
    ),
    { headers: { "Content-Type": "application/json" } }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-8f76d3a1.js.map
