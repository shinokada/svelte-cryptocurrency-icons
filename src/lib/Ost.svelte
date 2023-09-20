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
    '<path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.978-9.656a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#34445B"/><g fill="#FFF"><path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zm-.915 12.122a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"/><path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zm-.915 12.122a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#34445B" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M15.82 10.319l1.76-2.743a1.776 1.776 0 10-1.06-.675l-2.182 3.405a6.965 6.965 0 00-6.25 7.618 6.97 6.97 0 007.618 6.25 6.97 6.97 0 006.25-7.618 6.971 6.971 0 00-6.136-6.237zm-.801 10.607a3.693 3.693 0 01-3.696-3.695 3.693 3.693 0 013.696-3.696c1.539 0 2.913.952 3.456 2.39a2.137 2.137 0 00-2.996-.378 2.136 2.136 0 00-.378 2.995 2.136 2.136 0 003.367.007 3.688 3.688 0 01-3.45 2.377z"/><path d="M15.82 10.319l1.76-2.743a1.776 1.776 0 10-1.06-.675l-2.182 3.405a6.965 6.965 0 00-6.25 7.618 6.97 6.97 0 007.618 6.25 6.97 6.97 0 006.25-7.618 6.971 6.971 0 00-6.136-6.237zm-.801 10.607a3.693 3.693 0 01-3.696-3.695 3.693 3.693 0 013.696-3.696c1.539 0 2.913.952 3.456 2.39a2.137 2.137 0 00-2.996-.378 2.136 2.136 0 00-.378 2.995 2.136 2.136 0 003.367.007 3.688 3.688 0 01-3.45 2.377z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.063-21.778l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zm-.915 12.122a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z" fill="#FFF"/>';
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
  export let ariaLabel = 'ost';
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
@prop export let ariaLabel = 'ost';
-->
