
import { RequestHandler, HandlerInput, getRequestType, getIntentName } from 'ask-sdk-core';
import {Response} from "ask-sdk-model";

export const HelpIntentHandler: RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
        return (
            getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            getIntentName(handlerInput.requestEnvelope) === 'HelpIntent'
        )
    },
    handle(handlerInput : HandlerInput) : Response {
        const speechText = 'Es una skill Demo para buscar con chat GPT, Si quieres probar solo hay que decir "Busca" seguido del texto que quieres buscar!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Preguntas y respuestas ChatGPT', speechText)
            .getResponse();
    }
};


