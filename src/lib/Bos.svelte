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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.568-13.05h2.659c3.94 0 5.909-1.081 5.909-3.245v-5.46C23 8.083 21.03 7 17.09 7H10v5.016h2.66V8.918h4.726c1.97 0 2.955.492 2.955 1.475v5.164c0 .984-.985 1.476-2.955 1.476h-2.954v1.918zm5.909 1.181v1.476c0 .983-.985 1.475-2.955 1.475H12.66V15.41h4.727c.322 0 .618.013.887.04v-1.922a18.301 18.301 0 00-1.182-.036H10V25h7.09c3.94 0 5.91-1.082 5.91-3.246v-1.623h-2.66z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00A8D6"/><path fill="#FFF" d="M14.432 18.95v-1.917h2.954c1.97 0 2.955-.492 2.955-1.476v-5.164c0-.983-.985-1.475-2.955-1.475H12.66v3.098H10V7h7.09C21.03 7 23 8.082 23 10.246v5.459c0 2.164-1.97 3.246-5.91 3.246h-2.658zm5.909 1.181H23v1.623C23 23.918 21.03 25 17.09 25H10V13.492h7.09c.417 0 .81.012 1.183.036v1.921a9.18 9.18 0 00-.887-.04H12.66v7.673h4.727c1.97 0 2.955-.492 2.955-1.475V20.13z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="126.9%" height="119.4%" x="-13.5%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.432 17.95v-1.917h2.954c1.97 0 2.955-.492 2.955-1.476V9.393c0-.983-.985-1.475-2.955-1.475H12.66v3.098H10V6h7.09C21.03 6 23 7.082 23 9.246v5.459c0 2.164-1.97 3.246-5.91 3.246h-2.658zm5.909 1.181H23v1.623C23 22.918 21.03 24 17.09 24H10V12.492h7.09c.417 0 .81.012 1.183.036v1.921a9.18 9.18 0 00-.887-.04H12.66v7.673h4.727c1.97 0 2.955-.492 2.955-1.475V19.13z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00A8D6" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.568-13.05h2.659c3.94 0 5.909-1.081 5.909-3.245v-5.46C23 8.083 21.03 7 17.09 7H10v5.016h2.66V8.918h4.726c1.97 0 2.955.492 2.955 1.475v5.164c0 .984-.985 1.476-2.955 1.476h-2.954v1.918zm5.909 1.181v1.476c0 .983-.985 1.475-2.955 1.475H12.66V15.41h4.727c.322 0 .618.013.887.04v-1.922a18.301 18.301 0 00-1.182-.036H10V25h7.09c3.94 0 5.91-1.082 5.91-3.246v-1.623h-2.66z"/>';
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
  export let ariaLabel = 'bos';
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
@prop export let ariaLabel = 'bos';
-->
