import { ChatMistralAI } from "@langchain/mistralai"
import { ai_key } from "./example.env.js";

const model = new ChatMistralAI({
    model: "mistral-small-latest", 
    apiKey: ai_key
});

const stream = await model.stream("Write an js code to find a number is prime or not")

for await (const chunk of stream){
    process.stdout.write(chunk.text);
}