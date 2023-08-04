import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Svelte Cryptocurrency Icons');
});

test('Color page has expected h1', async ({ page }) => {
  await page.goto('/color');
  expect(await page.textContent('h1')).toBe('Svelte Cryptocurrency Icons: Color');
});

test('black page has expected h1', async ({ page }) => {
  await page.goto('/black');
  expect(await page.textContent('h1')).toBe('Svelte Cryptocurrency Icons: Black');
});

test('white page has expected h1', async ({ page }) => {
  await page.goto('/white');
  expect(await page.textContent('h1')).toBe('Svelte Cryptocurrency Icons: White');
});