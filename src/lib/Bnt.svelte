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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.08-26.12l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 5.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822l-4.604 2.648v5.296l4.604-2.648v-5.296zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#000D2B"/><path fill="#FFF" d="M15.92 5.88l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 5.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822v5.296l-4.604 2.648V12.84l4.604-2.648zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="127.7%" height="118%" x="-13.9%" y="-6.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.92 4.88l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 4.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822v5.296l-4.604 2.648V11.84l4.604-2.648zm-11.082 5.296l4.604 2.648V11.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000D2B" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.08-26.12l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 5.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822l-4.604 2.648v5.296l4.604-2.648v-5.296zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"/>';
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
  export let ariaLabel = 'bnt';
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
@prop export let ariaLabel = 'bnt';
-->
