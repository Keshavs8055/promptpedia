const { connectDB } = require("@utils/database");
import Prompt from "@models/prompt.model";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt Not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectDB();
    const exists = await Prompt.findById(params.id);

    if (!exists) return new Response("Prompt Not Found", { status: 404 });
    exists.prompt = prompt;
    exists.tag = tag;

    await exists.save();

    return new Response(JSON.stringify(exists), { status: 200 });
  } catch (error) {
    return new Response("Failed", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt Deleted", { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
