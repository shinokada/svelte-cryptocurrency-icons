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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.682-25h-5.16l-1.534 2.652L14.459 7H9.297L4 16.175l5.129 8.88 3.477-6.019L16 24.896l3.384-5.86 3.485 6.06L28 16.216 22.682 7zM9.122 21.544L6.02 16.178l2.467-4.272 3.1 5.37-2.466 4.273v-.005zm.384-11.402l.818-1.421h3.091l1.555 2.693-2.364 4.099-3.1-5.371zm6.48 11.232l-2.362-4.102 2.364-4.097L17.044 15l1.31 2.273-2.366 4.097-.002.005zm1.017-9.96l1.558-2.693h3.091l.828 1.42-3.12 5.372-2.357-4.1zm7.968 6.537l-2.093 3.631-2.488-4.32 3.1-5.359.836 1.44 1.653 2.863-1.008 1.745z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#DD0632"/><path d="M22.682 7h-5.16l-1.534 2.652L14.459 7H9.297L4 16.175l5.129 8.88 3.477-6.019L16 24.896l3.384-5.86 3.485 6.06L28 16.216 22.682 7zM9.122 21.544L6.02 16.178l2.467-4.272 3.1 5.37-2.466 4.273v-.005zm.384-11.402l.818-1.421h3.091l1.555 2.693-2.364 4.099-3.1-5.371zm6.48 11.232l-2.362-4.102 2.364-4.097L17.044 15l1.31 2.273-2.366 4.097-.002.005zm1.017-9.96l1.558-2.693h3.091l.828 1.42-3.12 5.372-2.357-4.1zm7.968 6.537l-2.093 3.631-2.488-4.32 3.1-5.359.836 1.44 1.653 2.863-1.008 1.745z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#DD0632" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M22.125 7h-4.73l-1.406 2.431L14.588 7H9.855L5 15.41l4.701 8.14 3.188-5.517L16 23.405l3.102-5.372 3.194 5.555L27 15.448 22.125 7zM9.695 20.332l-2.843-4.92 2.262-3.915 2.842 4.923-2.261 3.916v-.004zm.352-10.452l.75-1.303h2.834l1.425 2.469-2.167 3.757-2.842-4.923zm5.94 10.296l-2.165-3.76 2.167-3.755.968 1.672 1.201 2.083-2.169 3.755-.002.005zm.933-9.13l1.427-2.469h2.834l.759 1.303-2.86 4.923-2.16-3.757zm7.304 5.993l-1.919 3.328-2.281-3.96 2.842-4.912.766 1.32 1.516 2.624-.924 1.6z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.682-25h-5.16l-1.534 2.652L14.459 7H9.297L4 16.175l5.129 8.88 3.477-6.019L16 24.896l3.384-5.86 3.485 6.06L28 16.216 22.682 7zM9.122 21.544L6.02 16.178l2.467-4.272 3.1 5.37-2.466 4.273v-.005zm.384-11.402l.818-1.421h3.091l1.555 2.693-2.364 4.099-3.1-5.371zm6.48 11.232l-2.362-4.102 2.364-4.097L17.044 15l1.31 2.273-2.366 4.097-.002.005zm1.017-9.96l1.558-2.693h3.091l.828 1.42-3.12 5.372-2.357-4.1zm7.968 6.537l-2.093 3.631-2.488-4.32 3.1-5.359.836 1.44 1.653 2.863-1.008 1.745z" fill="#FFF"/>';
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
  export let ariaLabel = 'xmcc';
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
@prop export let ariaLabel = 'xmcc';
-->
