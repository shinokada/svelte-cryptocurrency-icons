<h1 align="center">Svelte-Cryptocurrency-Icons</h1>

<p align="center">
<a href="https://svelte-cryptocurrency-icons.codewithshin.com/">Svelte-Cryptocurrency-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-cryptocurrency-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-cryptocurrency-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-cryptocurrency-icons.svg" alt="npm" height="25"></a>
</p>

470+ SVG crypto currency icon components for Svelte. Icons support major CSS frameworks using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img width="650" src="/static/images/crypto-color-optimized-650-1050.png" />
</p>

## Variations

- Color (default)
- Black
- Icon
- White

## Installation

```sh
npm i -D svelte-cryptocurrency-icons
```

## Icon names

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

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

## Faster compiling

If you only need to use a couple of icons from this library in your Svelte app, importing it directly. This can help optimize compilation speed. 
By importing only what you need, you can reduce the amount of code that needs to be processed, which can improve overall performance.

```html
<script>
  import Btc from 'svelte-cryptocurrency-icons/Btc.svelte';
</script>

<Btc />
```

If you are a TypeScript user, **install typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
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

## Original source

[spothq/cryptocurrency-icons](https://github.com/spothq/cryptocurrency-icons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## PWA: Fast & Offline

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
