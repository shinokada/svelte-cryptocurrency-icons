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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.755-14.666C22.001 13.815 23.75 8 23.75 8l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 23.267v-.973c-4.868.132-5.245-4.959-5.245-4.959zm-4.739 3.659a2.369 2.369 0 01-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 01-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 011.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f49e00" r="16"/><path d="M19.755 17.334C22.001 13.815 23.75 8 23.75 8l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 23.267v-.973c-4.868.132-5.245-4.959-5.245-4.959m-4.739 3.659a2.369 2.369 0 01-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 01-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 011.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="121.9%" x="-9.7%" y="-7.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M19.755 16.334C22.001 12.815 23.75 7 23.75 7l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 22.267v-.973c-4.868.132-5.245-4.959-5.245-4.959m-4.739 3.659a2.369 2.369 0 01-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 01-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 011.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F49E00" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.755-14.666C22.001 13.815 23.75 8 23.75 8l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 23.267v-.973c-4.868.132-5.245-4.959-5.245-4.959zm-4.739 3.659a2.369 2.369 0 01-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 01-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 011.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'agrs';
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
@prop export let ariaLabel = 'agrs';
-->
