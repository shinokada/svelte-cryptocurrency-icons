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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-7h4.536l-2.272-3.957h-4.528L11.464 25H16zm-2.263-14.044h4.527L20.536 7h-9.072l2.272 3.957zm9.999 9.539L26 16.538h-4.536l-2.265 3.957h.001l2.263 3.958 2.273-3.957h-.002.002zM8.264 11.496L6 15.453h4.536l2.264-3.957-2.264-3.957-2.272 3.957zm4.535 9h.001l-2.264-3.958H6l2.264 3.957 2.272 3.958 2.264-3.957zm10.937-9l-2.273-3.957-2.264 3.957 2.264 3.957H26l-2.264-3.957z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#13bf99" r="16"/><path d="M16 25h-4.536l2.272-3.957h4.528L20.536 25H16zm-2.263-14.044h-.001L11.464 7h9.072l-2.272 3.956h-4.528zm9.999 9.539h-.002.002l-2.273 3.958-2.264-3.957h.001l2.263-3.958H26l-2.264 3.957zM8.264 11.496l2.272-3.957 2.264 3.957-2.264 3.956H6zm4.535 9h.001l-2.264 3.957-2.272-3.957L6 16.537h4.536l2.264 3.957zm10.937-9L26 15.453h-4.536l-2.265-3.957 2.264-3.957 2.273 3.957z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16 24h-4.536l2.272-3.957h4.528L20.536 24H16zM13.737 9.955h-.001L11.464 6h9.072l-2.272 3.956h-4.528zm9.999 9.539h-.002.002l-2.273 3.958-2.264-3.957h.001l2.263-3.958H26l-2.264 3.957zM8.264 10.496l2.272-3.957 2.264 3.957-2.264 3.956H6l2.264-3.956zm4.535 9h.001l-2.264 3.957-2.272-3.957L6 15.537h4.536l2.264 3.957zm10.937-9L26 14.453h-4.536l-2.265-3.957 2.264-3.957 2.273 3.957z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#13BF99" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-7h4.536l-2.272-3.957h-4.528L11.464 25H16zm-2.263-14.044h4.527L20.536 7h-9.072l2.272 3.957zm9.999 9.539L26 16.538h-4.536l-2.265 3.957h.001l2.263 3.958 2.273-3.957h-.002.002zM8.264 11.496L6 15.453h4.536l2.264-3.957-2.264-3.957-2.272 3.957zm4.535 9h.001l-2.264-3.958H6l2.264 3.957 2.272 3.958 2.264-3.957zm10.937-9l-2.273-3.957-2.264 3.957 2.264 3.957H26l-2.264-3.957z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'cob';
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
@prop export let ariaLabel = 'cob';
-->
