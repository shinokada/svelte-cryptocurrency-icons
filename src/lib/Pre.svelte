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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.53-13.955h1.678a3.23 3.23 0 001.387-.308c.41-.203.776-.484 1.077-.828.299-.356.53-.763.684-1.201a3.92 3.92 0 00.248-1.388 3.393 3.393 0 00-.27-1.346 4.143 4.143 0 00-.724-1.18 3.636 3.636 0 00-1.098-.848 2.974 2.974 0 00-1.384-.332h-4.41v10.703h2.816l-.004-3.272zm0-4.846h1.427a.77.77 0 01.518.249c.166.165.27.456.27.911s-.103.725-.25.872c-.123.145-.289.248-.475.248h-1.49V13.2zM7.023 8.031v15.887c0 .57.461 1.03 1.03 1.03h15.888c.569 0 1.03-.46 1.03-1.03V8.03a1.03 1.03 0 00-1.03-1.031H8.053a1.03 1.03 0 00-1.03 1.03zm14.803 14.803h-11.68a1.03 1.03 0 01-1.031-1.03v-11.68a1.03 1.03 0 011.031-1.031h11.68c.57 0 1.03.461 1.03 1.03v11.68c0 .57-.46 1.031-1.03 1.031zm-7.093-3.525v2.03h6.607v-2.03h-6.607z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#3A8CBD"/><g fill="#FFF"><path d="M13.47 18.045h1.678a3.23 3.23 0 001.387-.308c.41-.203.776-.484 1.077-.828.299-.356.53-.763.684-1.201a3.92 3.92 0 00.248-1.388 3.393 3.393 0 00-.27-1.346 4.143 4.143 0 00-.724-1.18 3.636 3.636 0 00-1.098-.848 2.974 2.974 0 00-1.384-.332h-4.41v10.703h2.816l-.004-3.272zm0-4.846h1.427a.77.77 0 01.518.249c.166.165.27.456.27.911s-.103.725-.25.872c-.123.145-.289.248-.475.248h-1.49V13.2z"/><path d="M7.023 8.03v15.888c0 .57.461 1.03 1.03 1.03h15.888c.569 0 1.03-.46 1.03-1.03V8.03a1.03 1.03 0 00-1.03-1.031H8.053a1.03 1.03 0 00-1.03 1.03zm14.803 14.804h-11.68a1.03 1.03 0 01-1.031-1.03v-11.68a1.03 1.03 0 011.031-1.031h11.68c.57 0 1.03.461 1.03 1.03v11.68c0 .57-.46 1.031-1.03 1.031z"/><path d="M14.733 19.309h6.607v2.03h-6.607z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3A8CBD" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M13.751 16.818h1.491c.427.001.848-.092 1.234-.274a3.1 3.1 0 00.957-.736c.266-.317.471-.678.608-1.068.147-.394.222-.812.22-1.233a3.016 3.016 0 00-.239-1.197 3.683 3.683 0 00-.644-1.048 3.232 3.232 0 00-.976-.755 2.644 2.644 0 00-1.23-.295h-3.92v9.515h2.503l-.004-2.91zm0-4.308h1.269c.176.012.341.09.46.221.148.148.24.406.24.81 0 .405-.092.644-.221.775a.566.566 0 01-.423.221H13.75V12.51z"/><path d="M8.02 7.916v14.122c0 .506.41.916.916.916h14.122c.506 0 .916-.41.916-.916V7.916A.916.916 0 0023.058 7H8.936a.916.916 0 00-.916.916zm13.16 13.159H10.797a.916.916 0 01-.917-.916V9.777a.916.916 0 01.917-.917h10.382c.506 0 .916.41.916.917v10.382c0 .506-.41.916-.916.916z"/><path d="M14.874 17.941h5.873v1.804h-5.873z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.53-13.955h1.678a3.23 3.23 0 001.387-.308c.41-.203.776-.484 1.077-.828.299-.356.53-.763.684-1.201a3.92 3.92 0 00.248-1.388 3.393 3.393 0 00-.27-1.346 4.143 4.143 0 00-.724-1.18 3.636 3.636 0 00-1.098-.848 2.974 2.974 0 00-1.384-.332h-4.41v10.703h2.816l-.004-3.272zm0-4.846h1.427a.77.77 0 01.518.249c.166.165.27.456.27.911s-.103.725-.25.872c-.123.145-.289.248-.475.248h-1.49V13.2zM7.023 8.031v15.887c0 .57.461 1.03 1.03 1.03h15.888c.569 0 1.03-.46 1.03-1.03V8.03a1.03 1.03 0 00-1.03-1.031H8.053a1.03 1.03 0 00-1.03 1.03zm14.803 14.803h-11.68a1.03 1.03 0 01-1.031-1.03v-11.68a1.03 1.03 0 011.031-1.031h11.68c.57 0 1.03.461 1.03 1.03v11.68c0 .57-.46 1.031-1.03 1.031zm-7.093-3.525v2.03h6.607v-2.03h-6.607z" fill="#FFF"/>';
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
  export let ariaLabel = 'pre';
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
@prop export let ariaLabel = 'pre';
-->
