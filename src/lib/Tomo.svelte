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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.525-17.536a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 000 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 8.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 4.95h-.96A11.443 11.443 0 005.41 19.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 4.95z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#1A1F36"/><path d="M18.525 14.464a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 100 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 8.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 4.95h-.96A11.443 11.443 0 005.41 19.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 4.95z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1A1F36" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M18.525 13.464a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 100 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 7.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 3.95h-.96A11.443 11.443 0 005.41 18.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 3.95z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.525-17.536a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 000 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 8.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 4.95h-.96A11.443 11.443 0 005.41 19.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 4.95z" fill="#FFF"/>';
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
  export let ariaLabel = 'tomo';
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
@prop export let ariaLabel = 'tomo';
-->
