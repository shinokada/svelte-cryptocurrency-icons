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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM8.466 16.207a.706.706 0 00-.716.698v3.253c0 .583.311 1.124.82 1.43l7.165 4.289c.134.08.29.123.449.123a.845.845 0 00.854-.84v-3.37c0-.498-.27-.957-.71-1.207l-7.502-4.281a.731.731 0 00-.36-.095zm3.43-5.172a.706.706 0 00-.717.698v4.287l6.59 3.857c.432.253.695.71.695 1.2v3.799a.29.29 0 00.067-.027l1.642-.904a.554.554 0 00.29-.486v-6.84a1.396 1.396 0 00-.709-1.208l-7.5-4.281a.731.731 0 00-.358-.095zm3.64-4.94a.725.725 0 00-.977.252.708.708 0 00-.096.352v4.066l6.736 3.953c.429.253.693.708.693 1.2v6.955l1.557-.823a.564.564 0 00.301-.491v-9.991c0-.498-.27-.96-.711-1.21z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#00D395" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M8.57 21.587a1.67 1.67 0 01-.82-1.429v-3.253c0-.387.322-.7.716-.698.126 0 .25.033.36.095l7.503 4.281c.439.25.71.71.71 1.207v3.37a.845.845 0 01-.855.84.883.883 0 01-.45-.123l-7.164-4.29zm11.184-6.176c.44.25.708.711.71 1.207v6.84c0 .202-.11.389-.291.487l-1.642.904a.29.29 0 01-.067.027v-3.798c0-.492-.263-.948-.696-1.2L11.18 16.02v-4.287c0-.387.322-.7.717-.698a.73.73 0 01.359.095l7.5 4.281zm3.285-5.052c.44.25.711.71.711 1.209v9.99a.564.564 0 01-.301.492l-1.557.823v-6.956c0-.491-.264-.946-.693-1.199l-6.736-3.953V6.7c0-.124.035-.245.096-.352a.725.725 0 01.977-.253l7.503 4.265z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter x="-10.9%" y="-6.2%" width="121.9%" height="117.5%" filterUnits="objectBoundingBox" id="d"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1"/></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path d="M8.57 20.587a1.67 1.67 0 01-.82-1.429v-3.253c0-.387.322-.7.716-.698.126 0 .25.033.36.095l7.503 4.281c.439.25.71.71.71 1.207v3.37a.845.845 0 01-.855.84.883.883 0 01-.45-.123l-7.164-4.29zm11.184-6.176c.44.25.708.711.71 1.207v6.84c0 .202-.11.389-.291.487l-1.642.904a.29.29 0 01-.067.027v-3.798c0-.492-.263-.948-.696-1.2L11.18 15.02v-4.287c0-.387.322-.7.717-.698a.73.73 0 01.359.095l7.5 4.281zm3.285-5.052c.44.25.711.71.711 1.209v9.99a.564.564 0 01-.301.492l-1.557.823v-6.956c0-.491-.264-.946-.693-1.199l-6.736-3.953V5.7c0-.124.035-.245.096-.352a.725.725 0 01.977-.253l7.503 4.265z" id="e"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00D395" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM8.466 16.207a.706.706 0 00-.716.698v3.253c0 .583.311 1.124.82 1.43l7.165 4.289c.134.08.29.123.449.123a.845.845 0 00.854-.84v-3.37c0-.498-.27-.957-.71-1.207l-7.502-4.281a.731.731 0 00-.36-.095zm3.43-5.172a.706.706 0 00-.717.698v4.287l6.59 3.857c.432.253.695.71.695 1.2v3.799a.29.29 0 00.067-.027l1.642-.904a.554.554 0 00.29-.486v-6.84a1.396 1.396 0 00-.709-1.208l-7.5-4.281a.731.731 0 00-.358-.095zm3.64-4.94a.725.725 0 00-.977.252.708.708 0 00-.096.352v4.066l6.736 3.953c.429.253.693.708.693 1.2v6.955l1.557-.823a.564.564 0 00.301-.491v-9.991c0-.498-.27-.96-.711-1.21z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'comp';
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
@prop export let ariaLabel = 'comp';
-->
