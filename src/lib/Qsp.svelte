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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.313-16a7.273 7.273 0 00-1.18-3.978L25 9.154 22.846 7l-2.868 2.868c-1.146-.745-2.51-1.181-3.978-1.181s-2.832.436-3.978 1.18L9.154 7 7 9.154l2.868 2.868c-.745 1.146-1.181 2.51-1.181 3.978s.437 2.832 1.181 3.978L7 22.846 9.154 25l2.868-2.868c1.146.745 2.51 1.181 3.978 1.181s2.832-.436 3.978-1.181L22.846 25 25 22.846l-2.868-2.868A7.272 7.272 0 0023.313 16zM11.5 16c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 20.5a4.505 4.505 0 01-4.5-4.5z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#454545" r="16"/><path d="M11.5 16c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 20.5a4.505 4.505 0 01-4.5-4.5m11.813 0a7.273 7.273 0 00-1.18-3.978L25 9.154 22.846 7l-2.868 2.868c-1.146-.745-2.51-1.181-3.978-1.181s-2.832.436-3.978 1.18L9.154 7 7 9.154l2.868 2.868c-.745 1.146-1.181 2.51-1.181 3.978s.437 2.832 1.181 3.978L7 22.846 9.154 25l2.868-2.868c1.146.745 2.51 1.181 3.978 1.181s2.832-.436 3.978-1.181L22.846 25 25 22.846l-2.868-2.868A7.272 7.272 0 0023.313 16" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.5 15c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 19.5a4.505 4.505 0 01-4.5-4.5m11.813 0a7.273 7.273 0 00-1.18-3.978L25 8.154 22.846 6l-2.868 2.868A7.273 7.273 0 0016 7.687a7.273 7.273 0 00-3.978 1.18L9.154 6 7 8.154l2.868 2.868A7.273 7.273 0 008.687 15a7.28 7.28 0 001.181 3.978L7 21.846 9.154 24l2.868-2.868A7.272 7.272 0 0016 22.313a7.272 7.272 0 003.978-1.181L22.846 24 25 21.846l-2.868-2.868A7.272 7.272 0 0023.313 15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#454545" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.313-16a7.273 7.273 0 00-1.18-3.978L25 9.154 22.846 7l-2.868 2.868c-1.146-.745-2.51-1.181-3.978-1.181s-2.832.436-3.978 1.18L9.154 7 7 9.154l2.868 2.868c-.745 1.146-1.181 2.51-1.181 3.978s.437 2.832 1.181 3.978L7 22.846 9.154 25l2.868-2.868c1.146.745 2.51 1.181 3.978 1.181s2.832-.436 3.978-1.181L22.846 25 25 22.846l-2.868-2.868A7.272 7.272 0 0023.313 16zM11.5 16c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 20.5a4.505 4.505 0 01-4.5-4.5z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'qsp';
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
@prop export let ariaLabel = 'qsp';
-->
