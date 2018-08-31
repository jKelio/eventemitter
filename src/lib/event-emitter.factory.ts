import { EventEmitter } from "./event-emitter";

export class EventEmitterFactory {
  static createEventEmitter(): EventEmitter<unknown> {
    const eventEmitter: EventEmitter<unknown> = new EventEmitter();
    return eventEmitter;
  }
}
