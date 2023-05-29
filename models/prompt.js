import mongoose, { model, Schema, models } from "mongoose";

const PromptSchema = new Schema({ 
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"]
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    },
});

// Check if model exists before creating it
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;