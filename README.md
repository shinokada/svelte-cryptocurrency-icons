# Svelte-Cryptocurrency-Icons

[![npm version](https://badgen.net/npm/v/svelte-cryptocurrency-icons)](https://www.npmjs.com/package/svelte-cryptocurrency-icons)
[![license](https://badgen.net/npm/license/svelte-cryptocurrency-icons)](https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/LICENSE)

470+ SVG crypto currency icon components for Svelte. Icons support major CSS frameworks using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-cryptocurrency-icons/main/static/images/crypto1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-cryptocurrency-icons/main/static/images/crypto2.webp" />
</p>

## Original source

[spothq/cryptocurrency-icons](https://github.com/spothq/cryptocurrency-icons)

## Icon name list

[Icon list](https://github.com/shinokada/svelte-cryptocurrency-icons/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-cryptocurrency-icons
```

## Usages

In a svelte file:

```html
<script>
	import { Btc, Eth, Usdt, Usdc, Bnb } from 'svelte-cryptocurrency-icons';
</script>

<Btc />
<Eth />
<Usdt />
<Usdc />
<Bnb />
```

## Props

| Name                                  | Default   |
| ------------------------------------- | --------- |
| size                                  | 24        |
| class                                 |           |
| ariaLabel                             | file name |
| variation (black, color, icon, white) | color     |

## Variation

The default variation value is outline. Use the `variation` prop to change it to solid.

```html
<Btc variation="black" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<Btc size="30" />
<Btc size="40" />
<Btc size="50" />
```

## CSS framworks suport

Use the `class` prop to change size and add additional css.

Tailwind CSS example:

```html
<Btc class="h-24 w-24 mr-4" />
```

Bootstrap examples:

```html
<Btc class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `Btc` has `aria-label="btc"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Btc ariaLabel="btc icon" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<Btc tabindex="0" />
```

## Using svelte:component

```html
<script>
	import { Btc } from 'svelte-cryptocurrency-icons';
</script>

<svelte:component this="{Btc}" />
```

## Using onMount

```html
<script>
	import { Btc } from 'svelte-cryptocurrency-icons';
	import { onMount } from 'svelte';
	const props = {
		size: '50'
	};
	onMount(() => {
		const icon = new Btc({ target: document.body, props });
	});
</script>
```

## Import all

Use `import * as Icon from 'svelte-cryptocurrency-icons`.

```html
<script>
	import * as Icon from 'svelte-cryptocurrency-icons';
</script>

<Icon.Btc />
<Icon.Eth />

<h1>Size</h1>
<Icon.Usdt size="50" />
<Icon.Usdc size="50" />

<h1>CSS HEX color</h1>
<Icon.Bnb size="50" color="#ff0000" />
<Icon.Btc size="50" color="#3a7cff" />

<h1>Tailwind CSS</h1>
<Icon.Eth size="50" class="text-pink-700" />
<Icon.Usdt size="50" class="text-blue-500" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
