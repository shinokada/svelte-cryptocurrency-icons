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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.92-11.844l-2.796 1.16.153-.839 2.097-.87a.515.515 0 00.277-.671.51.51 0 00-.667-.28l-1.487.618.283-1.556h5.275c4.583 0 7.285-2.858 7.285-6.553 0-2.913-2.073-4.298-6.22-4.155h-6.773l-2.398 13.321-3.293 1.367a.515.515 0 00-.277.671.51.51 0 00.667.28l2.687-1.116-.15.839-1.99.825a.515.515 0 00-.277.671.51.51 0 00.668.28l1.382-.574L9.269 25h2.344l.452-2.48 3.406-1.414a.515.515 0 00.277-.671.51.51 0 00-.667-.28zm-.57-11.047h5.154c2.556 0 3.323 1.07 3.323 2.656 0 1.584-1.22 3.769-4.43 3.769h-5.219z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#00acff" r="16"/><path d="M15.08 20.156a.51.51 0 01.668.279.515.515 0 01-.277.671l-3.406 1.414-.452 2.48H9.269l.257-1.426-1.382.573a.51.51 0 01-.668-.279.515.515 0 01.277-.67l1.99-.826.15-.839-2.687 1.115a.51.51 0 01-.667-.279.515.515 0 01.277-.671l3.293-1.367L12.507 7.01h6.773c4.147-.143 6.22 1.242 6.22 4.155 0 3.695-2.702 6.553-7.285 6.553H12.94l-.283 1.556 1.487-.617a.51.51 0 01.667.279.515.515 0 01-.277.67l-2.097.871-.153.84zm-.57-11.047l-1.172 6.425h5.218c3.212 0 4.43-2.185 4.43-3.77 0-1.584-.766-2.655-3.322-2.655z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="119.4%" x="-9.2%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.08 19.156a.51.51 0 01.668.279.515.515 0 01-.277.671l-3.406 1.414-.452 2.48H9.269l.257-1.426-1.382.573a.51.51 0 01-.668-.279.515.515 0 01.277-.67l1.99-.826.15-.839-2.687 1.115a.51.51 0 01-.667-.279.515.515 0 01.277-.671l3.293-1.367L12.507 6.01h6.773c4.147-.143 6.22 1.242 6.22 4.155 0 3.695-2.702 6.553-7.285 6.553H12.94l-.283 1.556 1.487-.617a.51.51 0 01.667.279.515.515 0 01-.277.67l-2.097.871-.153.84 2.797-1.161zm-.57-11.047l-1.172 6.425h5.218c3.212 0 4.43-2.185 4.43-3.77 0-1.584-.766-2.655-3.322-2.655H14.51z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00ACFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.92-11.844l-2.796 1.16.153-.839 2.097-.87a.515.515 0 00.277-.671.51.51 0 00-.667-.28l-1.487.618.283-1.556h5.275c4.583 0 7.285-2.858 7.285-6.553 0-2.913-2.073-4.298-6.22-4.155h-6.773l-2.398 13.321-3.293 1.367a.515.515 0 00-.277.671.51.51 0 00.667.28l2.687-1.116-.15.839-1.99.825a.515.515 0 00-.277.671.51.51 0 00.668.28l1.382-.574L9.269 25h2.344l.452-2.48 3.406-1.414a.515.515 0 00.277-.671.51.51 0 00-.667-.28zm-.57-11.047h5.154c2.556 0 3.323 1.07 3.323 2.656 0 1.584-1.22 3.769-4.43 3.769h-5.219z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'pasl';
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
@prop export let ariaLabel = 'pasl';
-->
