import { RequestHandler, HandlerInput, getRequestType, getIntentName } from 'ask-sdk-core';
import {Response} from "ask-sdk-model";

export const CancelAndStopIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return (
            getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
        )
    },
    handle(handlerInput:HandlerInput):Response {
        return handlerInput.responseBuilder
            .speak('Gracias por usar la skill, Vuelve pronto')
            .withShouldEndSession(true)
            .getResponse()
    },
}
