<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    variation?: 'black' | 'color' | 'icon' | 'white';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '32';
  export let role: string = ctx.role || 'img';
  export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
  let svgpath: string;
  let svgblack =
    '<path d="M16.526 23h1.414l.977-4.923 2.306.01c1.61 0 2.934-.412 3.973-1.236 1.04-.824 1.633-1.921 1.779-3.293.088-.941-.056-1.76-.434-2.455l-2.73 1.427c.02.11.031.223.035.335.022.872-.183 1.566-.615 2.083-.432.516-1.04.78-1.822.793l-2.031-.02.194-.975-3.515 1.837-.64 3.245-.862-2.46-2.645 1.383L12.992 23zm-1.315-10.99h1.75l-.532 2.693 3.516-1.838.3-1.51 2.295.02c.07.004.14.013.208.026l2.8-1.464c-.746-.586-1.701-.895-2.866-.927L17.556 9h-2.215l-1.88 3.01h1.75-1.75l-1.051 1.779L11.18 9H7.7l2.372 6.827-2.467 3.49 6.659-3.482 2.697-3.826zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.786 21.952l-.02-.037L5 23h3.765l2.348-3.833z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#008200" r="16"/><path d="M14.79 23h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019c.784-.012 1.391-.277 1.823-.793.432-.517.637-1.21.615-2.083a2.31 2.31 0 00-.035-.335l2.73-1.427c.378.695.522 1.514.434 2.455-.146 1.372-.74 2.47-1.779 3.293-1.039.824-2.364 1.236-3.973 1.236l-2.306-.01L17.94 23zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 9h3.48l1.23 4.789 1.052-1.78h1.75-1.75L15.34 9h2.215l5.126.01c1.165.032 2.12.341 2.866.927l-2.8 1.464a1.773 1.773 0 00-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694zm-9.425 9.942l5.327-2.785L8.765 23H5l.767-1.085z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.79 22h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019c.784-.012 1.391-.277 1.823-.793.432-.517.637-1.21.615-2.083a2.31 2.31 0 00-.035-.335l2.73-1.427c.378.695.522 1.514.434 2.455-.146 1.372-.74 2.47-1.779 3.293-1.039.824-2.364 1.236-3.973 1.236l-2.306-.01L17.94 22h-3.15zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 8h3.48l1.23 4.789 1.052-1.78h1.75-1.75L15.34 8h2.215l5.126.01c1.165.032 2.12.341 2.866.927l-2.8 1.464a1.773 1.773 0 00-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694h-1.75zm-9.425 9.942l5.327-2.785L8.765 22H5l.767-1.085.019.037z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#008200" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16.526 23h1.414l.977-4.923 2.306.01c1.61 0 2.934-.412 3.973-1.236 1.04-.824 1.633-1.921 1.779-3.293.088-.941-.056-1.76-.434-2.455l-2.73 1.427c.02.11.031.223.035.335.022.872-.183 1.566-.615 2.083-.432.516-1.04.78-1.822.793l-2.031-.02.194-.975-3.515 1.837-.64 3.245-.862-2.46-2.645 1.383L12.992 23zm-1.315-10.99h1.75l-.532 2.693 3.516-1.838.3-1.51 2.295.02c.07.004.14.013.208.026l2.8-1.464c-.746-.586-1.701-.895-2.866-.927L17.556 9h-2.215l-1.88 3.01h1.75-1.75l-1.051 1.779L11.18 9H7.7l2.372 6.827-2.467 3.49 6.659-3.482 2.697-3.826zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.786 21.952l-.02-.037L5 23h3.765l2.348-3.833z" fill="#fff" fill-rule="evenodd"/>';
  switch (variation) {
    case 'black':
      svgpath = svgblack;
      break;
    case 'color':
      svgpath = svgcolor;
      break;
    case 'icon':
      svgpath = svgicon;
      break;
    case 'white':
      svgpath = svgwhite;
      break;
    default:
      svgpath = svgcolor;
  }
  export let ariaLabel = 'xp';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 32 32"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-cryptocurrency-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'xp';
-->
