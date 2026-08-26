import { ChatMistralAI } from "@langchain/mistralai"
import { ai_key } from "./example.env.js";

const model = new ChatMistralAI({
    model: "mistral-small-latest", 
    apiKey: ai_key
});

const response = await model.invoke("Hello");

console.log(response.text);