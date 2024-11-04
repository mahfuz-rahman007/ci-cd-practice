import { expect, test } from 'vitest';

test('App includes "Vite + Reactooooo" text', async () => {
  const app = await import('./App?raw');
  expect(app.default).toContain('Vite + Reactooooo');
});