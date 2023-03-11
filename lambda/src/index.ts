import {
    SkillBuilders, DefaultApiClient
} from 'ask-sdk-core';

import { LaunchRequestHandler } from './intent-handlers/LaunchRequestHandler';
import { HelpIntentHandler } from './intent-handlers/HelpIntentHandler';
import { CancelAndStopIntentHandler } from './intent-handlers/CancelAndStopIntentHandler';
import { SessionEndedRequestHandler } from './intent-handlers/SessionEndedRequestHandler';
import { SearchRequestHandler } from './intent-handlers/SearchRequestHandler';
import {MyErrorHandler} from "./intent-handlers/MyErrorHandler";

exports.handler = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SearchRequestHandler,
        SessionEndedRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler
    )
    .addErrorHandlers(MyErrorHandler)
    .withApiClient(new DefaultApiClient())
    .lambda();
