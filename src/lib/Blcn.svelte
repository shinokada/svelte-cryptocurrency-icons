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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2aabe4" r="16"/><path d="M7.9 7h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm0 10h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9zm-10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9z" fill="#fff"/></g>';
  let svgicon =
    '<defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2AABE4" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><path fill="#FFF" d="M7.9 6h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9V6.9a.9.9 0 01.9-.9zm10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9V6.9a.9.9 0 01.9-.9zm0 10h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9zm-10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9z"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'blcn';
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
@prop export let ariaLabel = 'blcn';
-->
