import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    required: [true, "Tag is required"],
    type: String,
  },
});

const Prompt = models.prompts || model("prompts", PromptSchema);

export default Prompt;
