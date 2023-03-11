import { integer } from "aws-sdk/clients/cloudfront";

export interface ChatGptCompletion {
     model: string,
    prompt: string,
    max_tokens: integer,
    temperature: integer
}
