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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-15.97C26.975 9.971 22.128 5.057 16.12 5v2.802c3.944-.002 7.316 2.863 7.984 6.782h-3.89c.15.458.228.935.234 1.416-.001.482-.08.96-.234 1.416h3.89c-.659 3.925-4.036 6.794-7.984 6.782V27c2.886 0 5.653-1.155 7.694-3.212A11.014 11.014 0 0027 16.029zm-7.254 2.359a4.299 4.299 0 01-5.965 1.326c-2.011-1.295-2.6-3.988-1.316-6.015a4.299 4.299 0 015.965-1.327c.522.35.97.8 1.316 1.327h3.072c-1.136-3.305-4.472-5.3-7.893-4.72C11.505 9.56 9 12.547 9 16.044s2.505 6.484 5.925 7.064c3.421.58 6.757-1.414 7.893-4.72z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#272731" r="16"/><path d="M27 16.03c0 2.91-1.145 5.7-3.186 7.758A10.832 10.832 0 0116.12 27v-2.802c3.948.012 7.325-2.857 7.984-6.782h-3.89c.154-.456.233-.934.234-1.416a4.78 4.78 0 00-.234-1.416h3.89c-.668-3.92-4.04-6.784-7.984-6.782V5c6.008.058 10.855 4.972 10.88 11.03zm-7.254 2.359h3.072c-1.136 3.305-4.472 5.3-7.893 4.72C11.505 22.527 9 19.541 9 16.043s2.505-6.483 5.925-7.064c3.421-.58 6.757 1.415 7.893 4.72h-3.072a4.72 4.72 0 00-1.316-1.327 4.299 4.299 0 00-5.965 1.327c-1.284 2.027-.695 4.72 1.316 6.015a4.299 4.299 0 005.965-1.326z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="115.9%" x="-9.7%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M27 15.03c0 2.91-1.145 5.7-3.186 7.758A10.832 10.832 0 0116.12 26v-2.802c3.948.012 7.325-2.857 7.984-6.782h-3.89c.154-.456.233-.934.234-1.416a4.78 4.78 0 00-.234-1.416h3.89c-.668-3.92-4.04-6.784-7.984-6.782V4c6.008.058 10.855 4.972 10.88 11.03zm-7.254 2.359h3.072c-1.136 3.305-4.472 5.3-7.893 4.72C11.505 21.527 9 18.541 9 15.043c0-3.497 2.505-6.483 5.925-7.064 3.421-.58 6.757 1.415 7.893 4.72h-3.072a4.72 4.72 0 00-1.316-1.327 4.299 4.299 0 00-5.965 1.327c-1.284 2.027-.695 4.72 1.316 6.015a4.299 4.299 0 005.965-1.326z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#272731" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-15.97C26.975 9.971 22.128 5.057 16.12 5v2.802c3.944-.002 7.316 2.863 7.984 6.782h-3.89c.15.458.228.935.234 1.416-.001.482-.08.96-.234 1.416h3.89c-.659 3.925-4.036 6.794-7.984 6.782V27c2.886 0 5.653-1.155 7.694-3.212A11.014 11.014 0 0027 16.029zm-7.254 2.359a4.299 4.299 0 01-5.965 1.326c-2.011-1.295-2.6-3.988-1.316-6.015a4.299 4.299 0 015.965-1.327c.522.35.97.8 1.316 1.327h3.072c-1.136-3.305-4.472-5.3-7.893-4.72C11.505 9.56 9 12.547 9 16.044s2.505 6.484 5.925 7.064c3.421.58 6.757-1.414 7.893-4.72z" fill="#fff"/>';
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
  export let ariaLabel = 'cdt';
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
@prop export let ariaLabel = 'cdt';
-->
