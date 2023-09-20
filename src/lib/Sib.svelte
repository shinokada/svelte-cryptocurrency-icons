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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.439 6.439 0 01-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.587 4.587 0 01-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a4.991 4.991 0 003.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43v1.014z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#057BC1"/><path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.439 6.439 0 01-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.587 4.587 0 01-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a4.991 4.991 0 003.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43v1.014z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#057BC1" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0016 4zm3.828 15.15h-.448v2.504h-1.502V19.15h-2.29v-.93h2.326v-1.682a5.902 5.902 0 01-3.97.644c-.752-.179-1.503-.59-1.897-1.27a4.205 4.205 0 01-.536-2.182V9.76h1.52v4.113c.036.894.608 1.789 1.484 2.057a4.577 4.577 0 003.38-.537c0-1.252-.017-3.13 0-5.634h1.54v8.46h.393v.93z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.439 6.439 0 01-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.587 4.587 0 01-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a4.991 4.991 0 003.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43v1.014z" fill="#FFF"/>';
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
  export let ariaLabel = 'sib';
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
@prop export let ariaLabel = 'sib';
-->
