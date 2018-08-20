"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_emitter_1 = require("./event-emitter");
class EventEmitterFactory {
    static createEventEmitter() {
        const eventEmitter = new event_emitter_1.EventEmitter();
        return eventEmitter;
    }
}
exports.EventEmitterFactory = EventEmitterFactory;
