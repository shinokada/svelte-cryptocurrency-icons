# Svelte Cryptocurrency Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-cryptocurrency-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-cryptocurrency-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-cryptocurrency-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-cryptocurrency-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
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
  import { Icon } from 'svelte-cryptocurrency-icons';
</script>

<Icon name="btc" />
```

## Props

- @prop name;
- @prop width = "32";
- @prop height = "32";
- @prop role = 'img';
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="btc" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="btc" class="shrink-0 h-20 w-20" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="btc" class="text-red-700 inline m-1" />
```

Bootstrap examples:

```html
<Icon name="btc" class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Icon name="btc"  class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `btc` has `aria-label="btc`"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="btc" ariaLabel="btc coin"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="btc" tabindex="-1" />
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
<Icon name="btc" tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="btc" />
```

## Using onMount

```html
<script>
  import { Icon } from 'svelte-cryptocurrency-icons';
  import { onMount } from 'svelte';
  const props = {
    name: 'btc',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```


## Import all

Use `import { Icon, icons } from 'svelte-cryptocurrency-icons';`.

```html
<script>
  import { Icon, icons } from 'svelte-cryptocurrency-icons';
  function filterIconsByKeyword(icons, keyword) {
    const filteredIcons = {};
    for (const key in icons) {
      if (key.includes(keyword)) {
        filteredIcons[key] = icons[key];
      }
    }
    return filteredIcons;
  }
  const outlineIcons = filterIconsByKeyword(icons, '-black');
</script>

{#each Object.keys(outlineIcons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)