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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.77-17.75a4 4 0 01.48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 01-3 1.55 2 2 0 01-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 01-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 01-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 01-2.17 1.31 8.16 8.16 0 01-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 01.48 0L10 12v5.19l5.87 3.39-.01-4.04zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9l-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75l-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75l-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#895AF8" fill-rule="nonzero"/><g fill="#FFF"><path d="M17.77 14.25a4 4 0 01.48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 01-3 1.55 2 2 0 01-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 01-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 01-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 01-2.17 1.31 8.16 8.16 0 01-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 01.48 0L10 12v5.19l5.87 3.39-.01-4.04z"/><path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9l-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75l-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75l-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z" fill-rule="nonzero"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#895AF8" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M17.623 13.396c.146-.009.293-.009.44 0 1.356.091 1.98 1.934 2.841 1.833a7.48 7.48 0 01-2.75 1.421 1.833 1.833 0 01-1.989-1.192v3.667l5.335-3.043v-4.749l-3.877 2.063zm-2.65-.009a1.88 1.88 0 01-.678-1.366v-.074c0-1.063 1.714-2.75 1.77-2.75.054.056 1.768 1.696 1.768 2.75v.083c-.016.47-.213.917-.55 1.247l4.217-2.264L16 8.316l-5.5 2.668 4.473 2.402zm.899 2.108a1.833 1.833 0 01-1.99 1.2 7.48 7.48 0 01-2.75-1.42c.862.064 1.476-1.787 2.842-1.833.147-.01.294-.01.44 0L10.5 11.333v4.758l5.38 3.107-.008-3.703z"/><path d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0016 4zm-6.142 6.59L16 7.613l6.15 2.979v5.857L16 19.996l-6.142-3.548v-5.857zm12.311 8.25l-6.123 3.54-6.197-3.576v-.339l6.197 3.575 6.123-3.538v.339zm0-.687l-6.123 3.539-6.197-3.575v-.367l6.197 3.584 6.123-3.538v.357zm0-.687l-6.123 3.538-6.197-3.575v-.339l6.197 3.584 6.123-3.538v.33z" fill-rule="nonzero"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.77-17.75a4 4 0 01.48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 01-3 1.55 2 2 0 01-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 01-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 01-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 01-2.17 1.31 8.16 8.16 0 01-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 01.48 0L10 12v5.19l5.87 3.39-.01-4.04zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9l-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75l-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75l-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z" fill="#FFF"/>';
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
  export let ariaLabel = 'tks';
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
@prop export let ariaLabel = 'tks';
-->
