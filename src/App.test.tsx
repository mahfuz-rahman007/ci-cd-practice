import { expect, test } from 'vitest';

test('App includes "Mahfujur Rahman" text', async () => {
  const app = await import('./Pages/Home?raw');
  expect(app.default).toContain('Mahfujur Rahman');
});
