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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.992-17.529L26 14.47l-3.826-6.462.002-.007H9.922l.002.008-.002-.002L6 14.563l.039.006-.032.013L16.097 26l.426-.52zm-13.136.459l6.423-.011 2.122 3.635-5.363 6.162-5.353-6.112zm-2.778 2.98l-2.602-2.972 4.361-.007zm9.723-3.846l-3.038-5.205 4.883-.01 3.11 5.207zm4.771.846l-2.56 2.942-1.713-2.935zm-5.791-.844l-5.42.009 2.729-4.62zm-8.399-5.194l5.04-.01-3.08 5.214-5.06.009z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#faa00d" r="16"/><path d="M25.992 14.471l-9.469 11.01-.425.519L6.007 14.582l.032-.013L6 14.563l3.922-6.557.002.002L9.922 8h12.254l-.002.007L26 14.47zm-13.136.459l-2.17 3.674 5.352 6.112 5.363-6.162-2.122-3.635zm-2.778 2.98l1.76-2.979-4.362.007zm9.723-3.846l4.954-.008-3.11-5.208-4.882.01zm4.771.846l-4.273.007 1.713 2.935zm-5.791-.844L16.09 9.454l-2.73 4.62zm-8.399-5.194l-3.1 5.213 5.06-.009 3.08-5.214z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M25.992 13.471l-9.469 11.01-.425.519L6.007 13.582l.032-.013L6 13.563l3.922-6.557.002.002L9.922 7h12.254l-.002.007L26 13.47l-.008.002zm-13.136.459l-2.17 3.674 5.352 6.112 5.363-6.162-2.122-3.635-6.423.01zm-2.778 2.98l1.76-2.979-4.362.007 2.602 2.972zm9.723-3.846l4.954-.008-3.11-5.208-4.882.01 3.038 5.206zm4.771.846l-4.273.007 1.713 2.935 2.56-2.942zm-5.791-.844L16.09 8.454l-2.73 4.62 5.421-.008zm-8.399-5.194l-3.1 5.213 5.06-.009 3.08-5.214-5.04.01z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FAA00D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.992-17.529L26 14.47l-3.826-6.462.002-.007H9.922l.002.008-.002-.002L6 14.563l.039.006-.032.013L16.097 26l.426-.52zm-13.136.459l6.423-.011 2.122 3.635-5.363 6.162-5.353-6.112zm-2.778 2.98l-2.602-2.972 4.361-.007zm9.723-3.846l-3.038-5.205 4.883-.01 3.11 5.207zm4.771.846l-2.56 2.942-1.713-2.935zm-5.791-.844l-5.42.009 2.729-4.62zm-8.399-5.194l5.04-.01-3.08 5.214-5.06.009z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'xas';
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
@prop export let ariaLabel = 'xas';
-->
