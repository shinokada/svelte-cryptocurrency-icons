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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-20.737l-.044-.707-.218.593-1.226 1.03-1.404.21-.42-.39 1.23-1.633L26.18 10l-1.364.028-1.983 1.382-1.859-.128L18.363 10l-1.542.3-4.81 3.845-2.32.717-.953.93-1.706.024-.845 1.51L5 17.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-2 .084-.944.712.707 2.071 1.249 1.177-.537-.07-2.64-.34-1.02 1.537-.375z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#4c5a95" r="16"/><path d="M27 11.263l-.044-.707-.218.593-1.226 1.03-1.404.209-.42-.389 1.231-1.633 1.26-.366-1.364.028-1.983 1.382-1.859-.128L18.363 10l-1.542.299-4.811 3.846-2.318.717-.954.931-1.706.023-.845 1.51L5 17.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-1.999.084-.945.712.707 2.071 1.249 1.177-.537-.069-2.639-.342-1.021 1.538-.375z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="126.9%" x="-8%" y="-9.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M27 10.263l-.044-.707-.218.593-1.226 1.03-1.404.209-.42-.389 1.231-1.633L26.179 9l-1.364.028-1.983 1.382-1.859-.128L18.363 9l-1.542.299-4.811 3.846-2.318.717-.954.931-1.706.023-.845 1.51L5 16.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-1.999.084-.945.712.707 2.071 1.249 1.177-.537-.069-2.639-.342-1.021 1.538-.375z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4C5A95" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11-20.737l-.044-.707-.218.593-1.226 1.03-1.404.21-.42-.39 1.23-1.633L26.18 10l-1.364.028-1.983 1.382-1.859-.128L18.363 10l-1.542.3-4.81 3.845-2.32.717-.953.93-1.706.024-.845 1.51L5 17.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-2 .084-.944.712.707 2.071 1.249 1.177-.537-.07-2.64-.34-1.02 1.537-.375z" fill="#fff"/>';
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
  export let ariaLabel = 'poly';
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
@prop export let ariaLabel = 'poly';
-->
