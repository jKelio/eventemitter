import { EventEmitter } from "./event-emitter";

export class EventEmitterFactory {
  static createEventEmitter(): EventEmitter {
    const eventEmitter: EventEmitter = new EventEmitter();
    return eventEmitter;
  }
}
