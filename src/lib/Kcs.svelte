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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.46-16l5.174-5.33 3.265 3.363a1.446 1.446 0 002.088 0 1.554 1.554 0 000-2.152l-4.309-4.44a1.456 1.456 0 00-2.088 0l-6.216 6.406v-3.808c0-.84-.662-1.522-1.477-1.522-.816 0-1.477.682-1.477 1.522v11.922c0 .84.661 1.522 1.477 1.522.811 0 1.477-.686 1.477-1.522v-3.808l6.216 6.405a1.456 1.456 0 002.088 0l4.31-4.44a1.554 1.554 0 000-2.151 1.446 1.446 0 00-2.09 0l-3.264 3.364L13.54 16zm5.176-1.523c-.816 0-1.478.682-1.478 1.523 0 .841.662 1.523 1.478 1.523s1.478-.682 1.478-1.523c0-.841-.662-1.523-1.478-1.523z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#0093DD"/><path fill="#FFF" d="M13.54 16l5.174 5.33 3.265-3.363a1.446 1.446 0 012.088 0 1.554 1.554 0 010 2.152l-4.309 4.44a1.456 1.456 0 01-2.088 0l-6.216-6.406v3.808c0 .836-.666 1.522-1.477 1.522-.816 0-1.477-.682-1.477-1.522V10.04c0-.84.661-1.522 1.477-1.522.815 0 1.477.682 1.477 1.522v3.808l6.216-6.406a1.456 1.456 0 012.088 0l4.31 4.44a1.554 1.554 0 010 2.152 1.446 1.446 0 01-2.09 0l-3.264-3.364L13.54 16zm5.176-1.523c.816 0 1.478.682 1.478 1.523 0 .841-.662 1.523-1.478 1.523s-1.478-.682-1.478-1.523c0-.841.662-1.523 1.478-1.523z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M13.54 15l5.174 5.33 3.265-3.363a1.446 1.446 0 012.088 0 1.554 1.554 0 010 2.152l-4.309 4.44a1.456 1.456 0 01-2.088 0l-6.216-6.406v3.808c0 .836-.666 1.522-1.477 1.522-.816 0-1.477-.682-1.477-1.522V9.04c0-.84.661-1.522 1.477-1.522.815 0 1.477.682 1.477 1.522v3.808l6.216-6.406a1.456 1.456 0 012.088 0l4.31 4.44a1.554 1.554 0 010 2.152 1.446 1.446 0 01-2.09 0L18.715 9.67 13.54 15zm5.176-1.523c.816 0 1.478.682 1.478 1.523 0 .841-.662 1.523-1.478 1.523s-1.478-.682-1.478-1.523c0-.841.662-1.523 1.478-1.523z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0093DD" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.46-16l5.174-5.33 3.265 3.363a1.446 1.446 0 002.088 0 1.554 1.554 0 000-2.152l-4.309-4.44a1.456 1.456 0 00-2.088 0l-6.216 6.406v-3.808c0-.84-.662-1.522-1.477-1.522-.816 0-1.477.682-1.477 1.522v11.922c0 .84.661 1.522 1.477 1.522.811 0 1.477-.686 1.477-1.522v-3.808l6.216 6.405a1.456 1.456 0 002.088 0l4.31-4.44a1.554 1.554 0 000-2.151 1.446 1.446 0 00-2.09 0l-3.264 3.364L13.54 16zm5.176-1.523c-.816 0-1.478.682-1.478 1.523 0 .841.662 1.523 1.478 1.523s1.478-.682 1.478-1.523c0-.841-.662-1.523-1.478-1.523z"/>';
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
  export let ariaLabel = 'kcs';
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
@prop export let ariaLabel = 'kcs';
-->
