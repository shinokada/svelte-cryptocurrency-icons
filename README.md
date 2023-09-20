# Svelte Cryptocurrency Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-cryptocurrency-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-cryptocurrency-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-cryptocurrency-icons.svg" alt="npm"></a>
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

## Props

- size: string = ctx.size || '32';
- role: string = ctx.role || 'img';
- variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Variation

The default variation value is color. Use the `variation` prop to change it to solid.

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

```html
<Btc class="shrink-0 h-20 w-20" />
```

## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components. Here's how you can do it:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100', // Icon size in pixels
    variation: 'color', // Icon color in hexadecimal or CSS color name
    role: 'svg icon image' // Accessible role for the icon
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, `role`, and `variation` properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

If you set `size`, icons can be customized with different colors. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { Btc } from 'svelte-cryptocurrency-icons';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<Btc variation="black" />
```

Remember that you can set only one or two of these properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, Abt, Ankr } from 'svelte-cryptocurrency-icons';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{Abt}" />
<Icon {...config2} icon="{Ankr}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-cryptocurrency-icons';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { Abt } from 'svelte-cryptocurrency-icons';
</script>

<MyIcon icon="{Abt}" />
```

Here, we import the `MyIcon` component and the `Abt` icon. By passing the `Abt` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

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
