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
    '<path d="M15.999 31.997C7.163 31.997 0 24.834 0 15.999 0 7.163 7.163 0 15.999 0c8.835 0 15.998 7.163 15.998 15.999 0 8.835-7.163 15.998-15.998 15.998zm7.438-15.243c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 00.862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 00-.972-2.594zm-5.793-2.314H14.05v-4.296h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="15.999" cy="15.999" r="15.999" fill="#F04086"/><path fill="#FFF" d="M23.437 16.754c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 00.862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 00-.972-2.594zm-5.793-2.314H14.05v-4.296h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="121.1%" x="-9.7%" y="-7.5%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23.437 15.754c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 00.862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 00-.972-2.594zm-5.793-2.314H14.05V9.144h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F04086" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" d="M15.999 31.997C7.163 31.997 0 24.834 0 15.999 0 7.163 7.163 0 15.999 0c8.835 0 15.998 7.163 15.998 15.999 0 8.835-7.163 15.998-15.998 15.998zm7.438-15.243c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 00.862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 00-.972-2.594zm-5.793-2.314H14.05v-4.296h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"/>';
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
  export let ariaLabel = 'bcn';
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
@prop export let ariaLabel = 'bcn';
-->
