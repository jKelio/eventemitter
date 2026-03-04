# CLAUDE.md

## Project Overview

EventEmitter (`@jkelio/event-emitter`) is a TypeScript library for event-driven communication between application layers. It wraps `@jkelio/event-observer` and provides type-safe event subscription and emission via generics.

## Commands

- **Build**: `npm run build` — cleans `dist/` and compiles TypeScript
- **Test**: `npm run test` — runs Mocha + Chai tests via ts-node
- **No linter configured**

## Architecture

- `src/lib/event-emitter.ts` — core `EventEmitter<T>` class (subscribe, unsubscribe, emit)
- `src/lib/event-emitter.factory.ts` — factory for creating emitter instances
- `src/lib/emitter-subject.ts` — interface mapping event names to observers
- `src/lib/utils.ts` — helper utilities (createName, hasOwnProperty)
- `src/index.ts` — public API exports

Tests live in `test/lib/` and mirror the source structure (`*.spec.ts`).

## Conventions

- TypeScript with strict mode, targeting ES6, CommonJS output
- Generic type parameter `<T>` for type-safe events
- camelCase for functions/methods
- Mocha + Chai for testing (no linting)
- CI via Travis CI (node stable)
