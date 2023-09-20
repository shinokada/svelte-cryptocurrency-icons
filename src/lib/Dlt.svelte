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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.193-23.042a.244.244 0 01.222-.143c.094 0 .18.057.22.145l6.29 13.695a.877.877 0 00.794.516h.084a.57.57 0 00.548-.423.955.955 0 00-.058-.666L16.614 6.83a.497.497 0 00-.135-.171.692.692 0 00-.892.008 1.245 1.245 0 00-.313.411l-7.19 15.148a.874.874 0 00.29 1.09l.056.04c.138.094.3.144.466.144h10.752a.96.96 0 00.835-.495.641.641 0 00.031-.56l-.01-.025a.732.732 0 00-.674-.455H9.713z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#f4ae95" r="16"/><path d="M15.807 8.958L9.713 21.965H19.83c.293 0 .558.18.673.455l.011.025a.641.641 0 01-.031.56.96.96 0 01-.835.495H8.896a.826.826 0 01-.466-.145l-.056-.038a.874.874 0 01-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.692.692 0 01.892-.01.497.497 0 01.135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 01-.548.423h-.084a.877.877 0 01-.794-.516L16.249 8.96a.244.244 0 00-.22-.145.244.244 0 00-.222.143z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="120.6%" x="-10.9%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.807 7.958L9.713 20.965H19.83c.293 0 .558.18.673.455l.011.025a.641.641 0 01-.031.56.96.96 0 01-.835.495H8.896a.826.826 0 01-.466-.145l-.056-.038a.874.874 0 01-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.692.692 0 01.892-.01.497.497 0 01.135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 01-.548.423h-.084a.877.877 0 01-.794-.516L16.249 7.96a.244.244 0 00-.22-.145.244.244 0 00-.222.143z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F4AE95" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.193-23.042a.244.244 0 01.222-.143c.094 0 .18.057.22.145l6.29 13.695a.877.877 0 00.794.516h.084a.57.57 0 00.548-.423.955.955 0 00-.058-.666L16.614 6.83a.497.497 0 00-.135-.171.692.692 0 00-.892.008 1.245 1.245 0 00-.313.411l-7.19 15.148a.874.874 0 00.29 1.09l.056.04c.138.094.3.144.466.144h10.752a.96.96 0 00.835-.495.641.641 0 00.031-.56l-.01-.025a.732.732 0 00-.674-.455H9.713z" fill="#fff"/>';
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
  export let ariaLabel = 'dlt';
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
@prop export let ariaLabel = 'dlt';
-->
