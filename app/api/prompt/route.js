import Prompt from "@models/prompt.model";

const { connectDB } = require("@utils/database");

export const GET = async (req, res) => {
  try {
    await connectDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
