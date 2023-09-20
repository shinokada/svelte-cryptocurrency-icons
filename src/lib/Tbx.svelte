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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.3-4.6c6.462 0 11.7-5.238 11.7-11.7C27.4 9.238 22.162 4 15.7 4 9.238 4 4 9.238 4 15.7c0 6.462 5.238 11.7 11.7 11.7zm2.89-7.7l2.35-4-2.62-4.48h-5.24l-2.62 4.48 2.35 4 2.89-4 2.89 4zm.86-10.4l3.74 6.4-3.74 6.4h-7.49l-3.75-6.4 3.74-6.4h7.5z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#5244D4"/><path d="M15.7 27.4C9.238 27.4 4 22.162 4 15.7 4 9.238 9.238 4 15.7 4c6.462 0 11.7 5.238 11.7 11.7 0 6.462-5.238 11.7-11.7 11.7zm2.89-7.7l-2.89-4-2.89 4-2.35-4 2.62-4.48h5.24l2.62 4.48-2.35 4zm.86-10.4h-7.5l-3.74 6.4 3.75 6.4h7.49l3.74-6.4-3.74-6.4z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#5244D4" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M15.7 26.4C9.238 26.4 4 21.162 4 14.7 4 8.238 9.238 3 15.7 3c6.462 0 11.7 5.238 11.7 11.7 0 6.462-5.238 11.7-11.7 11.7zm2.89-7.7l-2.89-4-2.89 4-2.35-4 2.62-4.48h5.24l2.62 4.48-2.35 4zm.86-10.4h-7.5l-3.74 6.4 3.75 6.4h7.49l3.74-6.4-3.74-6.4z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.3-4.6c6.462 0 11.7-5.238 11.7-11.7C27.4 9.238 22.162 4 15.7 4 9.238 4 4 9.238 4 15.7c0 6.462 5.238 11.7 11.7 11.7zm2.89-7.7l2.35-4-2.62-4.48h-5.24l-2.62 4.48 2.35 4 2.89-4 2.89 4zm.86-10.4l3.74 6.4-3.74 6.4h-7.49l-3.75-6.4 3.74-6.4h7.5z" fill="#FFF"/>';
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
  export let ariaLabel = 'tbx';
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
[Go to docs](https://svelte-cryptocurrency-icons.vercel.app)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'tbx';
-->
