import 'dotenv/config'
import axios from 'axios';
import {ChatGptCompletion} from "../interfaces";

class ChatGptApiClient {

    private readonly apiUrl: string;
    private readonly apiKey: string;

    constructor() {
        this.apiUrl = process.env.API_URL || '';
        this.apiKey = process.env.API_KEY || '';
    }

    async askQuestion(postData: ChatGptCompletion):Promise<string> {

        let answer:string  = "Lo sentimos, no podemos ofrecerte esta información, prueba mas tarde"
        console.log('Api Url: ', this.apiUrl)
        if (this.apiUrl && this.apiKey) {
            try {
                const response = await axios.post(this.apiUrl, postData, {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`
                    }
                });
                answer = response.data.choices[0].text;
                console.error(answer)
            } catch (error) {
                console.error(error)
                // throw new Error(`Failed to call external API: ${error.message}`);
            }
        }

        return answer;
    }
}
export = ChatGptApiClient;
