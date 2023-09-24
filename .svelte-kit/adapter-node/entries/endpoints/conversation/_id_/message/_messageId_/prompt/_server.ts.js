import "openid-client";
import "../../../../../../../chunks/models.js";
import "../../../../../../../chunks/index.js";
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
export {
  GET
};
