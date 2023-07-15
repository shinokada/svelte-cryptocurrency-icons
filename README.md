# Svelte-Cryptocurrency-Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-cryptocurrency-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-cryptocurrency-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-cryptocurrency-icons.svg" alt="npm" height="25"></a>
</div>

470+ SVG crypto currency icon components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


## Repo

[GitHub Repo](https://github.com/shinokada/svelte-cryptocurrency-icons)

## Original source

[spothq/cryptocurrency-icons](https://github.com/spothq/cryptocurrency-icons)

## License

[Svelte-Circle-Flags License](https://github.com/shinokada/svelte-cryptocurrency-icons/LICENSE)

[spothq/cryptocurrency-icons License](https://github.com/spothq/cryptocurrency-icons/blob/master/LICENSE.md)


## Installation

```sh
pnpm i -D svelte-cryptocurrency-icons
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

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Btc from 'svelte-cryptocurrency-icons/Btc.svelte';
</script>

<Btc />
```

If you are a TypeScript user, **install typescript version 5.0.0 or above**.

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
| role                                  | img       |
| class                                 |           |
| ariaLabel                             | file name |
| variation (black, color, icon, white) | color     |

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

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

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

<Btc class="shrink-0 h-20 w-20" />

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

# Unfocusable icon

If you want to make an icon unfocusable, add tabindex="-1".

```html
<Btc tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
