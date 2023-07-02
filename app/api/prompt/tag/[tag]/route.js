import Prompt from "@models/prompt.model";
import { connectDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompt = await Prompt.find({ tag: params.tag }).populate("creator");

    if (!prompt) return new Response("Prompt Not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed", { status: 500 });
  }
};
