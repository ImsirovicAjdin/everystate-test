/**
 * @everystate/test
 *
 * Event-sequence testing for EveryState.
 * TDD-style testing with type extraction capabilities.
 */

import type { EveryStateStore } from '@everystate/core';

export interface TestCase {
  name: string;
  fn: (store: EveryStateStore) => void | Promise<void>;
}

export interface TestResult {
  name: string;
  passed: boolean;
  error?: Error;
  duration: number;
}

export interface TestSuite {
  /** Add a test case */
  add(name: string, fn: (store: EveryStateStore) => void | Promise<void>): void;
  /** Run all registered tests */
  run(): Promise<TestResult[]>;
  /** Get results summary */
  results(): TestResult[];
}

/**
 * Create a test suite for event-sequence testing.
 */
export function createEventTest(store: EveryStateStore): TestSuite;

/**
 * Define a single test case (shorthand).
 */
export function test(name: string, fn: (store: EveryStateStore) => void | Promise<void>): TestCase;

/**
 * Run an array of test cases against a store.
 */
export function runTests(store: EveryStateStore, tests: TestCase[]): Promise<TestResult[]>;
