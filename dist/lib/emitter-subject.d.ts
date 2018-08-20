import { EventObserver } from "@jkelio/event-observer";
export interface EmitterSubject {
    [event: string]: EventObserver;
}
