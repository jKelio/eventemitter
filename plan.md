# Improvement Plan for @jkelio/event-emitter

## 1. Add `.gitignore`
- Add standard Node/.gitignore (node_modules, dist, coverage, .DS_Store, IDE files)

## 2. Update dependencies
- Bump TypeScript from ^3.0.1 to ^5.x
- Bump Mocha from ^5.2.0 to ^10.x
- Bump Chai from ^4.1.2 to ^4.3.x (stay v4 for CommonJS compat)
- Bump ts-node from ^7.0.1 to ^10.x
- Update @types/mocha and @types/chai to latest

## 3. Add ESLint + Prettier
- Install `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `prettier`, `eslint-config-prettier`
- Create `.eslintrc.json` with TypeScript recommended rules
- Create `.prettierrc` with consistent style (single quotes, trailing commas)
- Add `npm run lint` and `npm run format` scripts

## 4. Improve TypeScript config
- Enable `esModuleInterop`, `resolveJsonModule`, `forceConsistentCasingInFileNames`
- Add `sourceMap: true` for debugging
- Keep `strict: true` (already enabled)

## 5. Add ESM build alongside CJS
- Update tsconfig to output both CJS (`dist/cjs`) and ESM (`dist/esm`) using two tsconfig files
- Add `"exports"` field to package.json for dual-module support
- Keep `"main"` pointing to CJS for backwards compat, add `"module"` for ESM

## 6. Fix factory generic type
- Change `EventEmitterFactory.createEventEmitter()` to be generic: `createEventEmitter<T>(): EventEmitter<T>` so callers get proper type inference instead of `EventEmitter<unknown>`

## 7. Expand test coverage
Add tests for all public methods on EventEmitter:
- `subscribe()` — verify handler is called on emit
- `emit()` — verify it returns a Promise, passes arguments correctly
- `unsubscribe()` — verify handler is no longer called after unsubscribe
- `unsubscribeAll()` — verify all handlers removed (with and without name param)
- Edge cases: emitting with no subscribers, subscribing multiple handlers, unsubscribing one of many

## 8. Migrate CI from Travis to GitHub Actions
- Create `.github/workflows/ci.yml` with:
  - Trigger on push/PR to main
  - Node 18.x + 20.x matrix
  - Steps: checkout, install, lint, test, build
- Remove `.travis.yml`

## Order of execution
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
