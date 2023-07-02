import Prompt from "@models/prompt.model";
import { connectDB } from "@utils/database";

export const POST = async (req, res) => {
  const { creator, prompt, tag } = await req.json();
  console.log(prompt, tag);
  try {
    await connectDB();
    const newPrompt = new Prompt({
      creator: creator,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed", { status: 500 });
  }
};
