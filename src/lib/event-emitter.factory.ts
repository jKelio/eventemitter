import { EventEmitter } from "./event-emitter";

export class EventEmitterFactory {
  static createEventEmitter<T = unknown>(): EventEmitter<T> {
    return new EventEmitter<T>();
  }
}
