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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.054-26.394c-.376 0-.691.12-.947.359-.24.239-.359.554-.359.947v6.912a6.306 6.306 0 00-4.94-2.33c-1.23 0-2.347.308-3.354.922-.99.614-1.775 1.468-2.355 2.56-.564 1.075-.845 2.278-.845 3.61s.307 2.543.921 3.635a6.882 6.882 0 002.535 2.56c1.092.614 2.295.921 3.61.921 1.314 0 2.5-.307 3.558-.921a6.882 6.882 0 002.534-2.56c.632-1.092.947-2.304.947-3.635V6.912c0-.393-.119-.708-.358-.947-.239-.24-.555-.359-.947-.359zm-5.735 17.792c-.853 0-1.63-.204-2.33-.614a4.73 4.73 0 01-1.638-1.74c-.392-.735-.588-1.554-.588-2.458s.196-1.716.588-2.432a4.528 4.528 0 011.639-1.716c.7-.426 1.476-.64 2.33-.64.853 0 1.62.214 2.303.64.7.41 1.246.982 1.639 1.716.392.716.589 1.527.589 2.432s-.197 1.723-.59 2.457a4.468 4.468 0 01-1.638 1.741c-.682.41-1.45.614-2.304.614z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2d9cdb" r="16"/><path d="M20.054 5.606c.392 0 .708.12.947.359s.358.554.358.947v11.674c0 1.33-.315 2.543-.947 3.635a6.882 6.882 0 01-2.534 2.56c-1.058.614-2.244.921-3.559.921-1.314 0-2.517-.307-3.61-.921a6.882 6.882 0 01-2.534-2.56c-.614-1.092-.921-2.304-.921-3.635s.281-2.535.845-3.61c.58-1.092 1.365-1.946 2.355-2.56 1.007-.614 2.125-.922 3.353-.922a6.306 6.306 0 014.941 2.33V6.912c0-.393.12-.708.359-.947a1.33 1.33 0 01.947-.359zm-5.735 17.792c.854 0 1.622-.204 2.304-.614a4.468 4.468 0 001.639-1.74c.392-.735.589-1.554.589-2.458s-.197-1.716-.59-2.432a4.287 4.287 0 00-1.638-1.716c-.682-.426-1.45-.64-2.304-.64-.853 0-1.63.214-2.33.64a4.528 4.528 0 00-1.638 1.716c-.392.716-.588 1.527-.588 2.432s.196 1.723.588 2.457a4.73 4.73 0 001.639 1.741c.7.41 1.476.614 2.33.614z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="124.8%" height="117.4%" x="-12.4%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M20.054 4.606c.392 0 .708.12.947.359s.358.554.358.947v11.674c0 1.33-.315 2.543-.947 3.635a6.882 6.882 0 01-2.534 2.56c-1.058.614-2.244.921-3.559.921-1.314 0-2.517-.307-3.61-.921a6.882 6.882 0 01-2.534-2.56c-.614-1.092-.921-2.304-.921-3.635 0-1.332.281-2.535.845-3.61.58-1.092 1.365-1.946 2.355-2.56 1.007-.614 2.125-.922 3.353-.922a6.306 6.306 0 014.941 2.33V5.912c0-.393.12-.708.359-.947a1.33 1.33 0 01.947-.359zm-5.735 17.792c.854 0 1.622-.204 2.304-.614a4.468 4.468 0 001.639-1.74c.392-.735.589-1.554.589-2.458 0-.905-.197-1.716-.59-2.432a4.287 4.287 0 00-1.638-1.716c-.682-.426-1.45-.64-2.304-.64-.853 0-1.63.214-2.33.64a4.528 4.528 0 00-1.638 1.716c-.392.716-.588 1.527-.588 2.432 0 .904.196 1.723.588 2.457a4.73 4.73 0 001.639 1.741c.7.41 1.476.614 2.33.614z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2D9CDB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.054-26.394c-.376 0-.691.12-.947.359-.24.239-.359.554-.359.947v6.912a6.306 6.306 0 00-4.94-2.33c-1.23 0-2.347.308-3.354.922-.99.614-1.775 1.468-2.355 2.56-.564 1.075-.845 2.278-.845 3.61s.307 2.543.921 3.635a6.882 6.882 0 002.535 2.56c1.092.614 2.295.921 3.61.921 1.314 0 2.5-.307 3.558-.921a6.882 6.882 0 002.534-2.56c.632-1.092.947-2.304.947-3.635V6.912c0-.393-.119-.708-.358-.947-.239-.24-.555-.359-.947-.359zm-5.735 17.792c-.853 0-1.63-.204-2.33-.614a4.73 4.73 0 01-1.638-1.74c-.392-.735-.588-1.554-.588-2.458s.196-1.716.588-2.432a4.528 4.528 0 011.639-1.716c.7-.426 1.476-.64 2.33-.64.853 0 1.62.214 2.303.64.7.41 1.246.982 1.639 1.716.392.716.589 1.527.589 2.432s-.197 1.723-.59 2.457a4.468 4.468 0 01-1.638 1.741c-.682.41-1.45.614-2.304.614z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'dat';
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
@prop export let ariaLabel = 'dat';
-->
