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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.073 7.5H10.296C9.263 7.5 8.5 8.28 8.5 9.346v13.33a1.697 1.697 0 001.549 1.713l.17.006a1.69 1.69 0 001.718-1.718V10.789l8.498-.001-5.022 5.012a1.686 1.686 0 000 2.395l5.735 5.717a1.689 1.689 0 002.383-2.394l-4.538-4.523 4.24-4.227c.32-.317.498-.748.497-1.197l.007-3.417a.684.684 0 00-.19-.47l-.003.002-.075-.063a.653.653 0 00-.396-.123z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#00E6A0" cx="16" cy="16" r="16"/><path d="M23.073 7.5a.653.653 0 01.477.192l-.006-.006a.65.65 0 01.184.364l.009.104-.007 3.417c0 .449-.178.88-.496 1.197l-4.24 4.227 4.537 4.523a1.689 1.689 0 11-2.383 2.394l-5.735-5.717a1.686 1.686 0 010-2.395l5.022-5.012h-8.498v11.889a1.69 1.69 0 01-1.718 1.718l-.17-.006A1.696 1.696 0 018.5 22.677V9.347c0-1.066.763-1.847 1.796-1.847z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-23.4%" y="-22.1%" width="146.9%" height="144.1%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00E6A0" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(8.5 6.5)"><path d="M14.573 0a.653.653 0 01.477.192l-.006-.006a.65.65 0 01.184.364l.009.104-.007 3.417c0 .449-.178.88-.496 1.197l-4.24 4.227 4.537 4.523a1.689 1.689 0 11-2.383 2.394l-5.735-5.717a1.686 1.686 0 010-2.395l5.022-5.012H3.437v11.889a1.69 1.69 0 01-1.718 1.718l-.17-.006A1.696 1.696 0 010 15.177V1.847C0 .78.763 0 1.796 0z" fill="#FFF" fill-rule="nonzero"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.073 7.5H10.296C9.263 7.5 8.5 8.28 8.5 9.346v13.33a1.697 1.697 0 001.549 1.713l.17.006a1.69 1.69 0 001.718-1.718V10.789l8.498-.001-5.022 5.012a1.686 1.686 0 000 2.395l5.735 5.717a1.689 1.689 0 002.383-2.394l-4.538-4.523 4.24-4.227c.32-.317.498-.748.497-1.197l.007-3.417a.684.684 0 00-.19-.47l-.003.002-.075-.063a.653.653 0 00-.396-.123z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'req';
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
@prop export let ariaLabel = 'req';
-->
