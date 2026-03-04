import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from '../../src';

describe('EventEmitter', () => {
  it('should be creatable', () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    expect(emitter).toBeInstanceOf(EventEmitter);
  });

  it('should call subscribed handler on emit', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const handler = vi.fn();

    emitter.subscribe('test', handler);
    await emitter.emit('test', 'arg1', 'arg2');

    expect(handler).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('should return a Promise from emit', () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const result = emitter.emit('test');
    expect(result).toBeInstanceOf(Promise);
  });

  it('should support multiple handlers for the same event', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    emitter.subscribe('test', handler1);
    emitter.subscribe('test', handler2);
    await emitter.emit('test', 'data');

    expect(handler1).toHaveBeenCalledWith('data');
    expect(handler2).toHaveBeenCalledWith('data');
  });

  it('should not throw when emitting with no subscribers', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    await expect(emitter.emit('nonexistent')).resolves.not.toThrow();
  });

  it('should remove handler after unsubscribe', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const handler = vi.fn();

    emitter.subscribe('test', handler);
    emitter.unsubscribe('test', handler);
    await emitter.emit('test');

    expect(handler).not.toHaveBeenCalled();
  });

  it('should unsubscribe all handlers for a named event', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    emitter.subscribe('test', handler1);
    emitter.subscribe('test', handler2);
    emitter.unsubscribeAll('test');
    await emitter.emit('test');

    expect(handler1).not.toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();
  });

  it('should unsubscribe all handlers across all events when called without name', async () => {
    const emitter = new EventEmitter<(...args: unknown[]) => void>();
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    emitter.subscribe('event1', handler1);
    emitter.subscribe('event2', handler2);
    emitter.unsubscribeAll();
    await emitter.emit('event1');
    await emitter.emit('event2');

    expect(handler1).not.toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();
  });
});
