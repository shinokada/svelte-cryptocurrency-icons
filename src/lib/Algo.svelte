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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.093 7h-2.4l-.056.084-2.246 3.888-2.302 3.986-2.287 3.972L7.5 22.916h2.75l2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H20.16l-.085-.295-.87-3.256L19.093 7z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#000" cx="16" cy="16" r="16"/><path d="M10.25 22.916l2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H20.16l-.085-.295-.87-3.256L19.093 7h-2.4l-.056.084-2.246 3.888-2.302 3.986-2.287 3.972L7.5 22.916z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-23.4%" y="-23.4%" width="146.9%" height="146.9%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(7.5 6)"><path fill="#FFF" fill-rule="nonzero" d="M2.75 15.916l2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H12.66l-.085-.295-.87-3.256L11.593 0h-2.4l-.056.084L6.89 3.972l-2.3 3.986-2.288 3.972L0 15.916z"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.093 7h-2.4l-.056.084-2.246 3.888-2.302 3.986-2.287 3.972L7.5 22.916h2.75l2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H20.16l-.085-.295-.87-3.256L19.093 7z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'algo';
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
@prop export let ariaLabel = 'algo';
-->
