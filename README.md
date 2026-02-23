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

## License

Proprietary - See LICENSE.md for details.

© 2026 Ajdin Imsirovic. All rights reserved.
