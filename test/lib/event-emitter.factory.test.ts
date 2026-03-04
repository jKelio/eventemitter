import { describe, it, expect } from 'vitest';
import { EventEmitterFactory, EventEmitter } from '../../src';

describe('EventEmitterFactory', () => {
  it('should create an instance of EventEmitter', () => {
    const emitter = EventEmitterFactory.createEventEmitter();
    expect(emitter).toBeInstanceOf(EventEmitter);
  });

  it('should create a typed EventEmitter', () => {
    const emitter = EventEmitterFactory.createEventEmitter<(...args: unknown[]) => void>();
    expect(emitter).toBeInstanceOf(EventEmitter);
  });
});
