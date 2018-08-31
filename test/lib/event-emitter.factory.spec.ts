import { expect } from "chai"; 
import { EventEmitterFactory, EventEmitter } from '../../src';

describe('EventEmitterFactory', () => {
    it('should can create an instance of EventEmitter', () => {
        const eventEmitter: EventEmitter<Function> = EventEmitterFactory.createEventEmitter();
        expect(eventEmitter).is.instanceof(EventEmitter);
    });
});
