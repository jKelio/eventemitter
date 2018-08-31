export declare class EventEmitter<T> {
    private subjects;
    constructor();
    subscribe(name: string, handler: T): void;
    unsubscribe(name: string, handler: T): void;
    unsubscribeAll(name?: string): void;
    emit(name: string, ...args: any[]): Promise<any>;
}
