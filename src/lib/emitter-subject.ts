import { EventObserver } from "@jkelio/event-observer";

export interface EmitterSubject<T> {
    [event: string]: EventObserver<T>
}