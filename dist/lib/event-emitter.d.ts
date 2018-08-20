export declare class EventEmitter {
    private subjects;
    constructor();
    subscribe(name: string, handler: Function): void;
    unsubscribe(name: string, handler: Function): void;
    unsubscribeAll(name?: string): void;
    emit(name: string, ...args: any[]): Promise<any>;
}
