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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.7-18.945L19.171 12l-1.1.5-2.885 7.797 1.1-.5.526 1.055.018-.047 2.868-7.75zm7.18.183l.064-.183L26.419 12l-1.1.5-2.867 7.76-.067.182 1.1-.5.527 1.058 2.868-7.762zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833L5 19.64l.86.805h8.155l-.857-.805.857-.808H5.86zm2.501-6.768l-.86.808.86.805h8.15l-.854-.806.855-.807h-8.15z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#347FFB" fill-rule="nonzero"/><path fill="#FFF" d="M19.7 13.055l-2.869 7.75-.018.047-.526-1.055-1.1.5 2.885-7.797 1.1-.5.527 1.055zm7.18.183L24.012 21l-.527-1.058-1.1.5.067-.182 2.867-7.76 1.1-.5.525 1.055-.064.183zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833h8.155l-.857.807.857.805H5.86L5 19.64l.86-.808zm2.501-6.768h8.15l-.854.808.855.805h-8.15l-.86-.806.86-.807z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="138.9%" x="-8%" y="-13.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M19.7 12.055l-2.869 7.75-.018.047-.526-1.055-1.1.5 2.885-7.797 1.1-.5.527 1.055zm7.18.183L24.012 20l-.527-1.058-1.1.5.067-.182 2.867-7.76 1.1-.5.525 1.055-.064.183zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 17.833h8.155l-.857.807.857.805H5.86L5 18.64l.86-.808zm2.501-6.768h8.15l-.854.808.855.805h-8.15l-.86-.806.86-.807z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#347FFB" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.7-18.945L19.171 12l-1.1.5-2.885 7.797 1.1-.5.526 1.055.018-.047 2.868-7.75zm7.18.183l.064-.183L26.419 12l-1.1.5-2.867 7.76-.067.182 1.1-.5.527 1.058 2.868-7.762zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833L5 19.64l.86.805h8.155l-.857-.805.857-.808H5.86zm2.501-6.768l-.86.808.86.805h8.15l-.854-.806.855-.807h-8.15z"/>';
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
  export let ariaLabel = 'exmo';
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
@prop export let ariaLabel = 'exmo';
-->
