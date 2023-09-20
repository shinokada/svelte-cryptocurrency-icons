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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11.16-19.34v-2.2L20 14.63l-4.42-7.62v5l2.25 3.9-.91.54-1.34-2.36-1.44 2.56-1-.41 2.44-4.23v-5l-4.84 8.24L4 12.46v2.55l6 1.48-3.8 6.52h9.38v-2.69h-4.79l1.79-3.14 1.08.27-1.08 1.9h6l-.9-1.59 1.19-.09 1.53 2.65h-4.82v2.69H25l-3.24-5.53 5.44-.4v-2.21l-6.12 1.51 6.11-1.57v-2l-6.63 2.69 6.6-2.84zm-8.7 4.35l-1.08.27 1.06-.27h.02zm-.34-.6l-1 .4 1-.41v.01z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#0B76FF"/><path d="M27.16 12.66v-2.2L20 14.63l-4.42-7.62v5l2.25 3.9-.91.54-1.34-2.36-1.44 2.56-1-.41 2.44-4.23v-5l-4.84 8.24L4 12.46v2.55l6 1.48-3.8 6.52h9.38v-2.69h-4.79l1.79-3.14 1.08.27-1.08 1.9h6l-.9-1.59 1.19-.09 1.53 2.65h-4.82v2.69H25l-3.24-5.53 5.44-.4v-2.21l-6.12 1.51 6.11-1.57v-2l-6.63 2.69 6.6-2.84zm-8.7 4.35l-1.08.27 1.06-.27h.02zm-.34-.6l-1 .4 1-.41v.01z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0B76FF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M26.23 11.188V9.172l-6.563 3.822-4.052-6.985v4.583l2.063 3.575-.835.495-1.228-2.163-1.32 2.347-.917-.376 2.237-3.878V6.01l-4.437 7.553L5 11.005v2.337l5.5 1.357-3.483 5.977h8.598V18.21h-4.39l1.64-2.878.99.247-.99 1.742h5.5l-.825-1.458 1.09-.082 1.403 2.429h-4.418v2.466h8.635l-2.97-5.07 4.987-.366v-2.026l-5.61 1.384 5.6-1.439v-1.833l-6.077 2.466 6.05-2.604zm-7.975 3.988l-.99.247.972-.247h.018zm-.312-.55l-.916.367.916-.376v.009z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11.16-19.34v-2.2L20 14.63l-4.42-7.62v5l2.25 3.9-.91.54-1.34-2.36-1.44 2.56-1-.41 2.44-4.23v-5l-4.84 8.24L4 12.46v2.55l6 1.48-3.8 6.52h9.38v-2.69h-4.79l1.79-3.14 1.08.27-1.08 1.9h6l-.9-1.59 1.19-.09 1.53 2.65h-4.82v2.69H25l-3.24-5.53 5.44-.4v-2.21l-6.12 1.51 6.11-1.57v-2l-6.63 2.69 6.6-2.84zm-8.7 4.35l-1.08.27 1.06-.27h.02zm-.34-.6l-1 .4 1-.41v.01z" fill="#FFF"/>';
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
  export let ariaLabel = 'beam';
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
@prop export let ariaLabel = 'beam';
-->
