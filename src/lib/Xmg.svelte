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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-12.46l-.741-.226a8.22 8.22 0 01-.498 1.022 5.602 5.602 0 01-.615.873 2.92 2.92 0 01-.785.654c-.302.173-.636.26-1 .26h-7.405l6.488-7.365v-.314l-5.249-6.54h3.503c.494 0 .918.02 1.273.063.354.043.632.113.834.211.286.118.611.418.975.899.365.481.807 1.206 1.327 2.175h.79L21.469 7H9.137v.992l6.653 8.376L9 24.087V25h12.517z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#004a80" r="16"/><path d="M23 19.54L21.517 25H9v-.913l6.79-7.719-6.653-8.376V7h12.331l.43 4.252h-.79c-.521-.969-.963-1.694-1.328-2.175-.364-.481-.689-.78-.975-.899-.202-.098-.48-.168-.834-.21a10.88 10.88 0 00-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405c.364 0 .698-.087 1-.26.302-.174.564-.392.785-.654a5.63 5.63 0 00.615-.873 8.22 8.22 0 00.498-1.022z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23 18.54L21.517 24H9v-.913l6.79-7.719-6.653-8.376V6h12.331l.43 4.252h-.79c-.521-.969-.963-1.694-1.328-2.175-.364-.481-.689-.78-.975-.899-.202-.098-.48-.168-.834-.21a10.88 10.88 0 00-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405c.364 0 .698-.087 1-.26.302-.174.564-.392.785-.654a5.63 5.63 0 00.615-.873 8.22 8.22 0 00.498-1.022l.741.226z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#004A80" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-12.46l-.741-.226a8.22 8.22 0 01-.498 1.022 5.602 5.602 0 01-.615.873 2.92 2.92 0 01-.785.654c-.302.173-.636.26-1 .26h-7.405l6.488-7.365v-.314l-5.249-6.54h3.503c.494 0 .918.02 1.273.063.354.043.632.113.834.211.286.118.611.418.975.899.365.481.807 1.206 1.327 2.175h.79L21.469 7H9.137v.992l6.653 8.376L9 24.087V25h12.517z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'xmg';
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
@prop export let ariaLabel = 'xmg';
-->
