(function(transformers2) {
  "use strict";
  class FlanPipeline {
    static task = "text2text-generation";
    static model = "Xenova/LaMini-Flan-T5-783M";
    static instance = null;
    static async getInstance(progress_callback = null) {
      if (this.instance === null) {
        this.instance = transformers2.pipeline(this.task, this.model, { progress_callback });
      }
      return this.instance;
    }
  }
  self.addEventListener("message", async (event) => {
    let pipe = await FlanPipeline.getInstance((x) => {
      self.postMessage(x);
    });
    let output = await pipe(event.data.text, {
      max_new_tokens: 256,
      callback_function: (x) => {
        self.postMessage({
          status: "update",
          output: pipe.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
        });
      }
    });
    self.postMessage({
      status: "complete",
      output,
      searchID: event.data.searchID
    });
  });
})(transformers);
