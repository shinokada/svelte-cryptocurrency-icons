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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.313-21.938h.032c2.875.063 5.75-.062 8.625.063.718 0 1.562.344 1.718 1.094.25 1.75-1.218 3.344-2.812 3.75-1.75.281-3.5.187-5.219.187a923.905 923.905 0 01-1.25 3.063c2.094 0 4.188.093 6.25-.219a8.712 8.712 0 006.344-5.688c.5-1.312.719-2.968-.281-4.124C24.25 7.125 22.75 7.125 21.5 7.03L12.937 7l-1.25 3.063zM8 10.906v.031l-1.375 3.438h10.188l1.343-3.469H8zm1.625 4.25h.031L6 24.531h3.469l3.687-9.375H9.625z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#630"/><g fill="#FFF"><path d="M11.688 10.063L12.938 7l8.562.031c1.25.094 2.75.094 3.594 1.157 1 1.156.781 2.812.281 4.124A8.712 8.712 0 0119.031 18c-2.062.313-4.156.219-6.25.219.417-1.017.834-2.038 1.25-3.063 1.719 0 3.469.094 5.219-.187 1.594-.406 3.063-2 2.813-3.75-.157-.75-1-1.094-1.72-1.094-2.874-.125-5.75 0-8.624-.063h-.031z"/><path d="M8 10.906h10.156l-1.343 3.469H6.624L8 10.937v-.03zm1.625 4.25h3.531L9.47 24.531H6l3.656-9.375h-.031z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#630" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M12.119 9.756L13.244 7l7.706.028c1.125.085 2.475.085 3.234 1.04.9 1.041.703 2.532.253 3.713a7.841 7.841 0 01-5.709 5.119c-1.856.281-3.74.197-5.625.197.375-.915.75-1.834 1.125-2.756 1.547 0 3.122.084 4.697-.17 1.434-.365 2.756-1.8 2.531-3.374-.14-.675-.9-.985-1.547-.985-2.587-.112-5.175 0-7.762-.056h-.028z"/><path d="M8.8 10.516h9.14l-1.209 3.122H7.562L8.8 10.543v-.028zm1.463 3.825h3.178l-3.32 8.437H7l3.29-8.437h-.027z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.313-21.938h.032c2.875.063 5.75-.062 8.625.063.718 0 1.562.344 1.718 1.094.25 1.75-1.218 3.344-2.812 3.75-1.75.281-3.5.187-5.219.187a923.905 923.905 0 01-1.25 3.063c2.094 0 4.188.093 6.25-.219a8.712 8.712 0 006.344-5.688c.5-1.312.719-2.968-.281-4.124C24.25 7.125 22.75 7.125 21.5 7.03L12.937 7l-1.25 3.063zM8 10.906v.031l-1.375 3.438h10.188l1.343-3.469H8zm1.625 4.25h.031L6 24.531h3.469l3.687-9.375H9.625z" fill="#FFF"/>';
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
  export let ariaLabel = 'payx';
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
@prop export let ariaLabel = 'payx';
-->
