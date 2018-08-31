import { EventSubject } from "@jkelio/event-observer/dist/lib/event-subject";
import { EmitterSubject } from "./emitter-subject";
import { EventObserverFactory } from "@jkelio/event-observer";
import { createName } from "./utils";

export class EventEmitter<T> {
  private subjects: EmitterSubject<T>;

  constructor() {
    this.subjects = {};
  }

  public subscribe(name: string, handler: T): void {
    const fnName = createName(name);
    this.subjects[fnName] ||
      (this.subjects[fnName] = EventObserverFactory.createEventObserver());
    this.subjects[fnName].subscribe(handler);
  }

  public unsubscribe(name: string, handler: T): void {
    const fnName = createName(name);
    this.subjects[fnName] ||
      (this.subjects[fnName] = EventObserverFactory.createEventObserver());
    this.subjects[fnName].unsubscribe(handler);
    delete this.subjects[fnName];
  }

  public unsubscribeAll(name: string = ""): void {
    if (!name.length) this.subjects = {};
    const fnName = createName(name);
    this.subjects[fnName] ||
      (this.subjects[fnName] = EventObserverFactory.createEventObserver());
    this.subjects[fnName].unsubscribeAll();
  }

  public emit(name: string, ...args: any[]): Promise<any> {
    const fnName = createName(name);
    this.subjects[fnName] ||
      (this.subjects[fnName] = EventObserverFactory.createEventObserver());
    return this.subjects[fnName].emit(...args);
  }
}
