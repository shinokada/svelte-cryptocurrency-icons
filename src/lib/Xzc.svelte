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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.725-12.852h3.39v2.964H11.93L24.573 9.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 7H8.45A1.44 1.44 0 007 8.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 22.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 23.548v-10.68l-6.275 6.28z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#23B852"/><path fill="#FFF" fill-rule="nonzero" d="M18.725 19.148h3.39v2.964H11.93L24.573 9.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 7H8.45A1.44 1.44 0 007 8.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 22.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 23.548v-10.68l-6.275 6.28z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.725 18.148h3.39v2.964H11.93L24.573 8.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 6H8.45A1.44 1.44 0 007 7.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 21.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 22.548v-10.68l-6.275 6.28z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#23B852" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.725-12.852h3.39v2.964H11.93L24.573 9.46a1.468 1.468 0 00.32-1.574A1.454 1.454 0 0023.55 7H8.45A1.44 1.44 0 007 8.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 22.54a1.468 1.468 0 00-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0025 23.548v-10.68l-6.275 6.28z"/>';
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
  export let ariaLabel = 'xzc';
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
@prop export let ariaLabel = 'xzc';
-->
