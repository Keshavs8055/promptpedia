import Prompt from "@models/prompt.model";

const { connectDB } = require("@utils/database");

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};
