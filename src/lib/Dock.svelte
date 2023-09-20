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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.069-21.229v-.004A8 8 0 1023 18.87l-.001-.067V6.142a1.143 1.143 0 00-2.286 0v12.576a5.695 5.695 0 11-4.705-5.63l-1.707 1.707a1.143 1.143 0 001.616 1.616l3.64-3.636a1.143 1.143 0 000-1.617l-3.636-3.636-.038-.038a1.144 1.144 0 10-1.582 1.654l1.63 1.633z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#786DBC"/><path d="M15.931 10.771l-1.629-1.633a1.144 1.144 0 011.582-1.654l.038.038 3.636 3.636c.447.447.447 1.17 0 1.617l-3.64 3.636a1.143 1.143 0 01-1.616-1.616l1.707-1.707a5.695 5.695 0 104.705 5.63V6.142a1.143 1.143 0 012.286 0v12.729a8 8 0 11-7.07-8.104l.001.004z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#786DBC" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16.815 11.05L15.39 9.62a1.001 1.001 0 011.383-1.447l.034.034 3.181 3.181a1 1 0 010 1.415l-3.185 3.182a1 1 0 01-1.413-1.414l1.493-1.494A4.983 4.983 0 1021 18.003V7a1 1 0 012 0v11.137a7 7 0 11-6.186-7.091v.004z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.069-21.229v-.004A8 8 0 1023 18.87l-.001-.067V6.142a1.143 1.143 0 00-2.286 0v12.576a5.695 5.695 0 11-4.705-5.63l-1.707 1.707a1.143 1.143 0 001.616 1.616l3.64-3.636a1.143 1.143 0 000-1.617l-3.636-3.636-.038-.038a1.144 1.144 0 10-1.582 1.654l1.63 1.633z" fill="#FFF"/>';
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
  export let ariaLabel = 'dock';
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
@prop export let ariaLabel = 'dock';
-->
