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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 9.016c0 .01 1.467 2.51 3.26 5.557 2.312 3.929 3.265 5.539 3.276 5.537.015-.003 6.53-11.08 6.53-11.1 0-.006-1.366-.01-3.072-.01-2.634 0-3.073.002-3.073.014 0 .008.633 1.08 1.406 2.381s1.408 2.374 1.41 2.38c.002.006-.116.213-.26.46l-.264.45-.028-.046-1.688-2.84-1.66-2.794-2.919-.003C6.21 9 6 9.001 6 9.016zm14.14-.009c-.108.177-7.057 12.017-7.062 12.028-.006.024 2.904 4.969 2.923 4.965.012-.003 2.94-4.963 2.949-4.998.003-.01-.564-.974-1.33-2.265a591.98 591.98 0 01-1.339-2.256c-.004-.012.52-.903.53-.898.003.002.604 1.011 1.336 2.242 1.026 1.727 1.332 2.236 1.346 2.234.013-.002 1.1-1.841 3.259-5.508a1647.11 1647.11 0 003.244-5.529L26 9h-2.928c-1.61 0-2.93.003-2.933.007z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#56f4f1" r="16"/><path d="M6 9.016c0-.015.21-.016 2.918-.014l2.919.003 1.66 2.793 1.688 2.841.028.047.264-.45c.144-.248.262-.455.26-.461-.002-.006-.637-1.078-1.41-2.38s-1.406-2.373-1.406-2.38c0-.013.439-.015 3.073-.015 1.706 0 3.072.004 3.072.01 0 .02-6.515 11.097-6.53 11.1-.011.002-.964-1.608-3.276-5.537C7.467 11.526 6 9.026 6 9.016zm14.14-.009c0-.004 1.32-.007 2.931-.007H26l-.004.022c-.003.013-1.463 2.501-3.244 5.529-2.159 3.667-3.246 5.506-3.26 5.508-.013.002-.319-.507-1.345-2.234-.732-1.23-1.333-2.24-1.337-2.242-.008-.005-.533.886-.529.898.001.005.604 1.02 1.338 2.256a127.572 127.572 0 011.33 2.265c-.009.035-2.936 4.995-2.948 4.998-.019.004-2.929-4.94-2.923-4.965.005-.011 6.954-11.85 7.061-12.028z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M6 8.016c0-.015.21-.016 2.918-.014l2.919.003 1.66 2.793 1.688 2.841.028.047.264-.45c.144-.248.262-.455.26-.461a818.43 818.43 0 00-1.41-2.38 268.499 268.499 0 01-1.406-2.38c0-.013.439-.015 3.073-.015 1.706 0 3.072.004 3.072.01 0 .02-6.515 11.097-6.53 11.1-.011.002-.964-1.608-3.276-5.537C7.467 10.526 6 8.026 6 8.016zm14.14-.009c0-.004 1.32-.007 2.931-.007H26l-.004.022c-.003.013-1.463 2.501-3.244 5.529-2.159 3.667-3.246 5.506-3.26 5.508-.013.002-.319-.507-1.345-2.234-.732-1.23-1.333-2.24-1.337-2.242-.008-.005-.533.886-.529.898.001.005.604 1.02 1.338 2.256a127.572 127.572 0 011.33 2.265c-.009.035-2.936 4.995-2.948 4.998-.019.004-2.929-4.94-2.923-4.965.005-.011 6.954-11.85 7.061-12.028z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#56F4F1" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 9.016c0 .01 1.467 2.51 3.26 5.557 2.312 3.929 3.265 5.539 3.276 5.537.015-.003 6.53-11.08 6.53-11.1 0-.006-1.366-.01-3.072-.01-2.634 0-3.073.002-3.073.014 0 .008.633 1.08 1.406 2.381s1.408 2.374 1.41 2.38c.002.006-.116.213-.26.46l-.264.45-.028-.046-1.688-2.84-1.66-2.794-2.919-.003C6.21 9 6 9.001 6 9.016zm14.14-.009c-.108.177-7.057 12.017-7.062 12.028-.006.024 2.904 4.969 2.923 4.965.012-.003 2.94-4.963 2.949-4.998.003-.01-.564-.974-1.33-2.265a591.98 591.98 0 01-1.339-2.256c-.004-.012.52-.903.53-.898.003.002.604 1.011 1.336 2.242 1.026 1.727 1.332 2.236 1.346 2.234.013-.002 1.1-1.841 3.259-5.508a1647.11 1647.11 0 003.244-5.529L26 9h-2.928c-1.61 0-2.93.003-2.933.007z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'xby';
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
@prop export let ariaLabel = 'xby';
-->
