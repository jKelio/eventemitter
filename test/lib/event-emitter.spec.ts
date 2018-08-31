import { expect } from "chai";
import { EventEmitter } from '../../src';

describe('EventEmitter', () => {
    it('should be creatable', () => {
        const eventEmitter: EventEmitter<Function> = new EventEmitter();
        expect(eventEmitter).is.instanceof(EventEmitter);
    });
});
