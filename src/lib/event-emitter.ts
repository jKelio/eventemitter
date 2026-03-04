import { EmitterSubject } from "./emitter-subject";
import { EventObserver, EventObserverFactory } from "@jkelio/event-observer";
import { createName } from "./utils";

export class EventEmitter<T> {
  private subjects: EmitterSubject<T>;

  constructor() {
    this.subjects = {};
  }

  private getOrCreate(fnName: string): EventObserver<T> {
    this.subjects[fnName] ||
      (this.subjects[fnName] =
        EventObserverFactory.createEventObserver() as EventObserver<T>);
    return this.subjects[fnName];
  }

  public subscribe(name: string, handler: T): void {
    this.getOrCreate(createName(name)).subscribe(handler);
  }

  public unsubscribe(name: string, handler: T): void {
    const fnName = createName(name);
    this.getOrCreate(fnName).unsubscribe(handler);
    delete this.subjects[fnName];
  }

  public unsubscribeAll(name: string = ""): void {
    if (!name.length) this.subjects = {};
    this.getOrCreate(createName(name)).unsubscribeAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(name: string, ...args: unknown[]): Promise<any> {
    return this.getOrCreate(createName(name)).emit(...args);
  }
}
