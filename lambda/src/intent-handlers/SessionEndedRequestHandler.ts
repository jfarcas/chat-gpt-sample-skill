import {getRequestType, HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

export const SessionEndedRequestHandler: RequestHandler = {
    canHandle(handlerInput:HandlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest'
    },
    handle(handlerInput: HandlerInput):Response {
        return handlerInput.responseBuilder.getResponse()
    },
}
