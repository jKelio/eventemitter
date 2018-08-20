"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_observer_1 = require("@jkelio/event-observer");
const utils_1 = require("./utils");
class EventEmitter {
    constructor() {
        this.subjects = {};
    }
    subscribe(name, handler) {
        const fnName = utils_1.createName(name);
        this.subjects[fnName] ||
            (this.subjects[fnName] = event_observer_1.EventObserverFactory.createEventObserver());
        this.subjects[fnName].subscribe(handler);
    }
    unsubscribe(name, handler) {
        const fnName = utils_1.createName(name);
        if (this.subjects[fnName]) {
            this.subjects[fnName].unsubscribe(handler);
            delete this.subjects[fnName];
        }
    }
    unsubscribeAll(name = '') {
        if (!name.length)
            this.subjects = {};
        const fnName = utils_1.createName(name);
        this.subjects[fnName].unsubscribeAll();
    }
    emit(name, ...args) {
        const fnName = utils_1.createName(name);
        this.subjects[fnName] ||
            (this.subjects[fnName] = event_observer_1.EventObserverFactory.createEventObserver());
        return this.subjects[fnName].emit(...args);
    }
}
exports.EventEmitter = EventEmitter;
