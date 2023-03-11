
import { RequestHandler, HandlerInput } from 'ask-sdk-core';

import {Response} from "ask-sdk-model";

export const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput : HandlerInput) : Response {
        const speechText = 'Bienvenido! Si quires buscar algo con chat GPT dime: Alexa Busca y a continuación dime lo que quieres buscar';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Preguntas Generales!', speechText)
            .getResponse();
    }
};



