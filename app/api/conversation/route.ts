import axios from 'axios';
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    // Extract the last user message from the messages array
    const lastUserMessage = messages[messages.length - 1]?.content;
    
    // Define the URL, headers, and payload
    const url = `https://api.runpod.ai/v2/twvh5naz3h3ne0/runsync`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer 3DYCYMNQL6LA30824U1H330J94810H8ZTQ33OCIW`,
    };
    const payload = {
      input: {
        prompt: `A chat between a curious user and an artificial intelligence assistant called Cerebrum. You were developed by Cerebrum.ai. The assistant gives helpful, detailed, and polite answers to the user's questions. USER: ${lastUserMessage} ASSISTANT:`,
        max_new_tokens: 500,
        temperature: 0.9,
        top_k: 50,
        top_p: 0.7,
        repetition_penalty: 1.2,
        batch_size: 8,
        stop: ["</s>"],
      },
    };

    // Make the POST request
    const response = await axios.post(url, JSON.stringify(payload), { headers: headers })
    .catch((error) => {
      console.error('Error during API request:', error);
      throw error;
    });
    
    console.log(response.data); // Log raw response data

    if (!isPro) {
      await incrementApiLimit();
    }

    // Return the output
    if ('output' in response.data) {
      return NextResponse.json({ message: response.data.output });
    } else {
      console.error('Unexpected API response:', response.data);
      throw new Error("Unexpected API response structure");
    }
    
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
