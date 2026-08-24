import { ChatMistralAI } from "@langchain/mistralai"
import { config } from "dotenv"

config()

const model = new ChatMistralAI({
    model: "mistral-small-latest", 
    apiKey: p
})