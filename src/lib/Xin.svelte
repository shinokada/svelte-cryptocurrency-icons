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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM26.405 7.151l-3.63 1.61a.673.673 0 00-.35.59v12.98a.66.66 0 00.36.59l3.63 1.57a.338.338 0 00.5-.3V7.451a.35.35 0 00-.51-.3zM9.02 8.741l-3.52-1.6a.338.338 0 00-.5.3v16.74a.341.341 0 00.52.29l3.54-1.87a.667.667 0 00.32-.57v-12.7a.7.7 0 00-.36-.59zm11.04 4.43l-3.79-2.17a.668.668 0 00-.67 0l-3.86 2.15a.684.684 0 00-.34.59v4.4c0 .243.13.468.34.59l3.86 2.22c.207.12.463.12.67 0l3.79-2.2a.684.684 0 00.34-.59v-4.4a.672.672 0 00-.34-.59z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#1EB5FA"/><path d="M26.405 7.151l-3.63 1.61a.673.673 0 00-.35.59v12.98a.66.66 0 00.36.59l3.63 1.57a.338.338 0 00.5-.3V7.451a.35.35 0 00-.51-.3zM9.02 8.741l-3.52-1.6a.338.338 0 00-.5.3v16.74a.341.341 0 00.52.29l3.54-1.87a.667.667 0 00.32-.57v-12.7a.7.7 0 00-.36-.59zm11.04 4.43l-3.79-2.17a.668.668 0 00-.67 0l-3.86 2.15a.684.684 0 00-.34.59v4.4c0 .243.13.468.34.59l3.86 2.22c.207.12.463.12.67 0l3.79-2.2a.684.684 0 00.34-.59v-4.4a.672.672 0 00-.34-.59z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1EB5FA" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M25.46 7.137l-3.3 1.464a.612.612 0 00-.32.536v11.8a.6.6 0 00.328.537l3.3 1.427a.307.307 0 00.455-.273V7.41a.318.318 0 00-.464-.273zM9.654 8.583l-3.2-1.455A.307.307 0 006 7.401v15.218a.31.31 0 00.473.264l3.218-1.7a.606.606 0 00.29-.518V9.119a.636.636 0 00-.326-.536zM19.69 12.61l-3.446-1.973a.607.607 0 00-.609 0l-3.509 1.955a.622.622 0 00-.309.536v4c0 .221.118.425.31.537l3.508 2.018a.61.61 0 00.61 0l3.445-2a.622.622 0 00.309-.537v-4a.61.61 0 00-.31-.536z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM26.405 7.151l-3.63 1.61a.673.673 0 00-.35.59v12.98a.66.66 0 00.36.59l3.63 1.57a.338.338 0 00.5-.3V7.451a.35.35 0 00-.51-.3zM9.02 8.741l-3.52-1.6a.338.338 0 00-.5.3v16.74a.341.341 0 00.52.29l3.54-1.87a.667.667 0 00.32-.57v-12.7a.7.7 0 00-.36-.59zm11.04 4.43l-3.79-2.17a.668.668 0 00-.67 0l-3.86 2.15a.684.684 0 00-.34.59v4.4c0 .243.13.468.34.59l3.86 2.22c.207.12.463.12.67 0l3.79-2.2a.684.684 0 00.34-.59v-4.4a.672.672 0 00-.34-.59z" fill="#FFF"/>';
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
  export let ariaLabel = 'xin';
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
@prop export let ariaLabel = 'xin';
-->
