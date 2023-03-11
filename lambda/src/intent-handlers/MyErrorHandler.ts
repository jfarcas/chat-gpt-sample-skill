import {ErrorHandler} from 'ask-sdk-core'
import {Response} from "ask-sdk-model";

export const MyErrorHandler: ErrorHandler = {
    canHandle():boolean {
        return true
    },
    handle(handlerInput, error: Error    ):Response {
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        console.log(`~~~~ Error : ${error}`);
        return handlerInput.responseBuilder.speak('Ha habido un error, prueba mas tarde').getResponse()
    },
}
