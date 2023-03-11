
import {RequestHandler, HandlerInput, getRequestType, getIntentName, getSlotValue} from 'ask-sdk-core';
import ChatGptApiClient from "../api-service/ChatGptApi";

import {Response} from "ask-sdk-model";
import {ChatGptCompletion} from "../interfaces";

export const SearchRequestHandler: RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
        getIntentName(handlerInput.requestEnvelope) === 'SearchIntent'
    },
    async handle(handlerInput : HandlerInput) : Promise<Response> {
        let speechText = 'Lo siento no puedo ayudarte con eso, prueba con otra pregunta';
        const question =getSlotValue(handlerInput.requestEnvelope, 'Query');
        console.log('el valor del slot es: ', question);
        const apiClient = new ChatGptApiClient();

        if (question) {
            const postData: ChatGptCompletion = {
                model: "text-davinci-001",
                prompt: question,
                max_tokens: 100,
                temperature: 0

            }
            speechText = await apiClient.askQuestion(postData)
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Preguntas Generales!', speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};



