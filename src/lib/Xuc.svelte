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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-16c0-6.075-4.925-11-11-11S5 9.924 5 16c0 6.075 4.925 11 11 11s11-4.925 11-11zm-3.77.346l-12.318.017a5.094 5.094 0 005.077 4.726 5.08 5.08 0 004.48-2.686h2.322a7.23 7.23 0 01-5.44 4.681v1.446l-2.24.698V23.16c-3.574-.435-6.345-3.474-6.345-7.165 0-3.605 2.647-6.587 6.103-7.125V7.467l2.239-.697v2.1c3.457.538 6.122 3.742 6.122 7.35 0 .126.007 0 0 .126zM11.25 14.13h9.477a5.095 5.095 0 00-4.738-3.229 5.093 5.093 0 00-4.738 3.23z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#25AAE3"/><path fill="#FFF" d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16C5 9.924 9.925 5 16 5s11 4.925 11 11zm-3.77.346c.007-.125 0 0 0-.127 0-3.607-2.665-6.811-6.122-7.35v-2.1l-2.24.698V8.87c-3.455.538-6.102 3.52-6.102 7.125 0 3.69 2.77 6.73 6.344 7.165v2.068l2.24-.698v-1.446a7.23 7.23 0 005.441-4.68H20.47a5.08 5.08 0 01-4.48 2.685 5.094 5.094 0 01-5.077-4.726l12.318-.017zM11.25 14.13a5.093 5.093 0 014.74-3.229 5.095 5.095 0 014.737 3.23h-9.476z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M27 15c0 6.075-4.925 11-11 11S5 21.075 5 15C5 8.924 9.925 4 16 4s11 4.925 11 11zm-3.77.346c.007-.125 0 0 0-.127 0-3.607-2.665-6.811-6.122-7.35v-2.1l-2.24.698V7.87c-3.455.538-6.102 3.52-6.102 7.125 0 3.69 2.77 6.73 6.344 7.165v2.068l2.24-.698v-1.446a7.23 7.23 0 005.441-4.68H20.47a5.08 5.08 0 01-4.48 2.685 5.094 5.094 0 01-5.077-4.726l12.318-.017zM11.25 13.13a5.093 5.093 0 014.74-3.229 5.095 5.095 0 014.737 3.23h-9.476z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#25AAE3" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-16c0-6.075-4.925-11-11-11S5 9.924 5 16c0 6.075 4.925 11 11 11s11-4.925 11-11zm-3.77.346l-12.318.017a5.094 5.094 0 005.077 4.726 5.08 5.08 0 004.48-2.686h2.322a7.23 7.23 0 01-5.44 4.681v1.446l-2.24.698V23.16c-3.574-.435-6.345-3.474-6.345-7.165 0-3.605 2.647-6.587 6.103-7.125V7.467l2.239-.697v2.1c3.457.538 6.122 3.742 6.122 7.35 0 .126.007 0 0 .126zM11.25 14.13h9.477a5.095 5.095 0 00-4.738-3.229 5.093 5.093 0 00-4.738 3.23z"/>';
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
  export let ariaLabel = 'xuc';
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
@prop export let ariaLabel = 'xuc';
-->
