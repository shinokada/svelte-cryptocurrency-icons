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
    '<path fill-rule="evenodd" d="M4.774 27.4A15.951 15.951 0 010 16C0 7.163 7.163 0 16 0s16 7.163 16 16c0 4.61-1.95 8.763-5.068 11.683a311.58 311.58 0 01-1.72-2.762c-2.888-4.724-5.068-9.764-6.617-15.077-.85-2.917-1.644-5.85-2.464-8.776a1.076 1.076 0 00-.23-.455c-.128.404-.267.804-.383 1.21-1.307 4.561-2.678 9.103-4.391 13.528-1.584 4.092-4.008 8.328-6.353 12.05zM21.147 32h-7.63l-3.146-.812a21751.8 21751.8 0 015.37-15.123l.154.003A4716.12 4716.12 0 0121.147 32z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#136485"/><path fill="#FFF" d="M10.436 31.006a16.008 16.008 0 01-5.604-3.548l.147-.257c2.388-3.773 4.533-7.678 6.148-11.85 1.713-4.425 3.084-8.967 4.39-13.527.117-.407.256-.807.384-1.21.138.158.188.305.23.454.82 2.926 1.613 5.86 2.464 8.776 1.55 5.313 3.73 10.353 6.617 15.077.337.55.91 1.472 1.72 2.762a15.988 15.988 0 01-6.035 3.554 4320.193 4320.193 0 00-5.002-15.17l-.154-.002c-1.166 3.277-2.934 8.257-5.305 14.941zM16.075.049h-.124L16 0l.075.049z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="116.9%" height="112%" x="-8.5%" y="-4.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.998 29.146a14.999 14.999 0 01-5.307-3.25c.106-.183.21-.37.226-.395 2.235-3.538 4.243-7.198 5.755-11.11 1.604-4.148 2.887-8.406 4.11-12.681.11-.382.24-.757.36-1.135.128.149.176.286.215.426.767 2.743 1.51 5.493 2.306 8.228 1.45 4.98 3.492 9.706 6.195 14.134.304.498.814 1.318 1.528 2.46a14.996 14.996 0 01-5.59 3.394 4039.55 4039.55 0 00-4.66-14.153l-.144-.003c-1.096 3.085-2.76 7.78-4.994 14.085zm5.306-29.1h-.115l.043-.044h.005l.067.044z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#136485" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M4.774 27.4A15.951 15.951 0 010 16C0 7.163 7.163 0 16 0s16 7.163 16 16c0 4.61-1.95 8.763-5.068 11.683a311.58 311.58 0 01-1.72-2.762c-2.888-4.724-5.068-9.764-6.617-15.077-.85-2.917-1.644-5.85-2.464-8.776a1.076 1.076 0 00-.23-.455c-.128.404-.267.804-.383 1.21-1.307 4.561-2.678 9.103-4.391 13.528-1.584 4.092-4.008 8.328-6.353 12.05zM21.147 32h-7.63l-3.146-.812a21751.8 21751.8 0 015.37-15.123l.154.003A4716.12 4716.12 0 0121.147 32z"/>';
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
  export let ariaLabel = 'dcn';
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
@prop export let ariaLabel = 'dcn';
-->
