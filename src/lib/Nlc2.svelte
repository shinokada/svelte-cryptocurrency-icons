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
    '<path d="M18.151 13.719l1.842-3.743c.57-1.32 1.222-2.146 1.955-2.476H16c.543.193.815.495.815.908 0 .116-.202.614-.606 1.495zm-2.916 5.928l-1.904-3.815c-.452.908-.947 1.9-1.487 2.974-1.602 3.493-3.19 5.391-4.766 5.694h14.585l2.852-4.374c-.815.908-2.431 1.362-4.848 1.362H14.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 20.25h4.604l3.585-7.262 3.626 7.262h4.237c-.082-.055-.122-.193-.122-.413 0-1.118 4.033-10.728 6.07-11.264h-4.807l-3.912 7.922-4.033-7.922H9.604c.597.44.896.908.896 1.403 0 2.102-4.319 9.573-5.5 10.274z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f28f01" r="16"/><path d="M18.151 13.719L16.21 9.903c.404-.88.606-1.38.606-1.495 0-.413-.272-.715-.815-.908h5.948c-.733.33-1.385 1.155-1.955 2.476zm-2.916 5.928l-.905 1.84h5.337c2.417 0 4.033-.453 4.848-1.36L21.663 24.5H7.078c1.575-.303 3.164-2.2 4.766-5.694.54-1.074 1.035-2.066 1.487-2.974zM5 20.25c1.181-.701 5.5-8.172 5.5-10.274 0-.495-.299-.963-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264 0 .22.04.358.122.413h-4.237l-3.626-7.262-3.585 7.262z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="120.6%" x="-8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.151 12.719L16.21 8.903c.404-.88.606-1.38.606-1.495 0-.413-.272-.715-.815-.908h5.948c-.733.33-1.385 1.155-1.955 2.476l-1.842 3.743zm-2.916 5.928l-.905 1.84h5.337c2.417 0 4.033-.453 4.848-1.36L21.663 23.5H7.078c1.575-.303 3.164-2.2 4.766-5.694.54-1.074 1.035-2.066 1.487-2.974l1.904 3.815zM5 19.25c1.181-.701 5.5-8.172 5.5-10.274 0-.495-.299-.963-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264 0 .22.04.358.122.413h-4.237l-3.626-7.262-3.585 7.262H5z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F28F01" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M18.151 13.719l1.842-3.743c.57-1.32 1.222-2.146 1.955-2.476H16c.543.193.815.495.815.908 0 .116-.202.614-.606 1.495zm-2.916 5.928l-1.904-3.815c-.452.908-.947 1.9-1.487 2.974-1.602 3.493-3.19 5.391-4.766 5.694h14.585l2.852-4.374c-.815.908-2.431 1.362-4.848 1.362H14.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 20.25h4.604l3.585-7.262 3.626 7.262h4.237c-.082-.055-.122-.193-.122-.413 0-1.118 4.033-10.728 6.07-11.264h-4.807l-3.912 7.922-4.033-7.922H9.604c.597.44.896.908.896 1.403 0 2.102-4.319 9.573-5.5 10.274z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'nlc2';
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
@prop export let ariaLabel = 'nlc2';
-->
