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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.057-5.689c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H5c.869 5.05 5.18 8.878 10.943 8.878zm.028-16.257a2.527 2.527 0 100-5.054 2.527 2.527 0 000 5.054zm-6.316 7.38h12.63c-.006-3.594-2.633-6.577-6.345-6.577-3.711 0-6.285 2.933-6.285 6.525v.051z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"/><g transform="translate(5 5)" fill="#FFF"><path d="M10.943 21.311c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H0c.869 5.05 5.18 8.878 10.943 8.878z"/><circle cx="10.971" cy="2.527" r="2.527"/><path d="M4.655 12.433v-.05c0-3.593 2.574-6.526 6.285-6.526 3.712 0 6.34 2.983 6.346 6.576H4.655z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g transform="translate(6 5)" fill="#FFF"><path d="M9.948 19.374c5.218 0 9.17-3.497 9.991-8.071h-4.452c-.666 2.43-2.731 4.207-5.486 4.207-2.735 0-4.827-1.79-5.52-4.207H0c.79 4.59 4.71 8.071 9.948 8.071z"/><circle cx="9.974" cy="2.297" r="2.297"/><path d="M4.232 11.303v-.047c0-3.265 2.34-5.932 5.714-5.932 3.374 0 5.762 2.712 5.768 5.979H4.232z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.057-5.689c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H5c.869 5.05 5.18 8.878 10.943 8.878zm.028-16.257a2.527 2.527 0 100-5.054 2.527 2.527 0 000 5.054zm-6.316 7.38h12.63c-.006-3.594-2.633-6.577-6.345-6.577-3.711 0-6.285 2.933-6.285 6.525v.051z" fill="#FFF"/>';
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
  export let ariaLabel = 'ong';
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
@prop export let ariaLabel = 'ong';
-->
