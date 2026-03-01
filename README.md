# @everystate/test

**Testing library for EveryState with TDD-style assertions**

Zero-dependency testing library for EveryState. Assert on state changes, event sequences, and types.

## Installation

```bash
npm install @everystate/test @everystate/core
```

## Quick Start

```js
import { createEventState } from '@everystate/core';
import { test, assert } from '@everystate/event-test';

test('counter increments', () => {
  const store = createEventState({ count: 0 });

  store.set('count', 1);
  assert.equal(store.get('count'), 1);

  store.set('count', 2);
  assert.equal(store.get('count'), 2);
});
```

## Features

- **Zero dependencies** No external test framework needed
- **TDD-style assertions** `assert.equal`, `assert.deepEqual`, etc.
- **Event sequence testing** Track order of state changes
- **Type extraction** Infer types from state
- **Fast** 100 tests in ~0.5ms

## Ecosystem

| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support. Core state engine (you are here). | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EveryStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | Proprietary |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for EveryState stores. Zero dependency. | Proprietary |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |

## License

Proprietary - See LICENSE.md for details.

© 2026 Ajdin Imsirovic. All rights reserved.
