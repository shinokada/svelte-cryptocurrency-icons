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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.47 7.661a3.808 3.808 0 100 7.617 3.808 3.808 0 000-7.617zm3.807 12.87a5.253 5.253 0 015.253-5.253 3.808 3.808 0 10-3.808-3.808c0 2.9-2.352 5.253-5.253 5.253a3.808 3.808 0 103.808 3.808zm5.253 3.808a3.808 3.808 0 10.001-7.616 3.808 3.808 0 000 7.616zm0-2.66a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm9.06-9.062a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#9d4bef" r="16"/><path d="M11.47 7.661a3.808 3.808 0 110 7.616 3.808 3.808 0 010-7.616zm3.807 12.87a3.808 3.808 0 11-3.808-3.808 5.253 5.253 0 005.253-5.253 3.808 3.808 0 113.808 3.808 5.253 5.253 0 00-5.252 5.253zm5.253 3.808a3.808 3.808 0 110-7.616 3.808 3.808 0 010 7.616zm0-2.66a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm9.06-9.062a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121%" height="121%" x="-10.5%" y="-7.5%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.47 6.661a3.808 3.808 0 110 7.616 3.808 3.808 0 010-7.616zm3.807 12.87a3.808 3.808 0 11-3.808-3.808 5.253 5.253 0 005.253-5.253 3.808 3.808 0 113.808 3.808 5.253 5.253 0 00-5.252 5.253zm5.253 3.808a3.808 3.808 0 110-7.616 3.808 3.808 0 010 7.616zm0-2.66a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm9.06-9.062a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#9D4BEF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.47 7.661a3.808 3.808 0 100 7.617 3.808 3.808 0 000-7.617zm3.807 12.87a5.253 5.253 0 015.253-5.253 3.808 3.808 0 10-3.808-3.808c0 2.9-2.352 5.253-5.253 5.253a3.808 3.808 0 103.808 3.808zm5.253 3.808a3.808 3.808 0 10.001-7.616 3.808 3.808 0 000 7.616zm0-2.66a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm9.06-9.062a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'rads';
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
@prop export let ariaLabel = 'rads';
-->
