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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.145 11.954c.084.7.206 1.398.365 2.093.025.111.058.209.1.3a4.53 4.53 0 008.47-.671c.11-.395.163-.817.18-1.353a6.005 6.005 0 013.169-5.178 26.063 26.063 0 00-2.015-.14 20.221 20.221 0 00-6.262.852A20.035 20.035 0 006 9.637c.002.759.05 1.53.145 2.317zm16.613 8.56a20.147 20.147 0 003.164-9.215c.05-.57.076-1.123.078-1.664a19.598 19.598 0 00-1.356-.704c-.763-.357-1.389-.612-2.008-.807a4.468 4.468 0 00-2.437-.083 4.518 4.518 0 00-3.382 5.219c.244 1.306.937 2.318 2.074 3.04a7.075 7.075 0 00.239.146 5.933 5.933 0 012.147 2.262 5.91 5.91 0 01.729 2.89c.263-.353.514-.715.752-1.084zm-3.037 3.673a.581.581 0 00.118-.162l.044-.087c.09-.177.128-.251.172-.343.52-1.085.618-2.186.283-3.307a4.52 4.52 0 00-4.902-3.206 4.604 4.604 0 00-1.706.57 6.027 6.027 0 01-6.034-.013 20.346 20.346 0 004.063 6.031 20.375 20.375 0 003.225 2.691c.409.275.809.524 1.018.639a20.522 20.522 0 003.72-2.813z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#67B2E8"/><path fill="#FFF" d="M6.145 11.954A19.83 19.83 0 016 9.636a20.035 20.035 0 014.152-1.779 20.221 20.221 0 016.262-.853c.568.011 1.39.074 2.014.141a6.005 6.005 0 00-3.065 4.19c-.06.314-.093.64-.104.988-.016.536-.068.958-.18 1.353a4.53 4.53 0 01-8.469.672 1.475 1.475 0 01-.1-.3 20.172 20.172 0 01-.365-2.094zm16.613 8.56c-.238.37-.49.73-.752 1.085a5.898 5.898 0 00-.73-2.89 5.933 5.933 0 00-2.146-2.263l-.09-.055a7.075 7.075 0 01-.149-.09c-1.137-.723-1.83-1.735-2.074-3.041A4.518 4.518 0 0120.2 8.041c.82-.198 1.63-.17 2.437.083.619.195 1.245.45 2.008.807.44.207.884.437 1.356.704a20.113 20.113 0 01-.452 4.148 20.147 20.147 0 01-2.79 6.731zm-3.037 3.673A20.522 20.522 0 0116.001 27a15.74 15.74 0 01-1.017-.639 20.375 20.375 0 01-7.288-8.722 5.882 5.882 0 002.42.785 6.027 6.027 0 003.614-.773 4.618 4.618 0 011.706-.569 4.52 4.52 0 014.902 3.206c.335 1.121.237 2.222-.283 3.307-.044.092-.082.166-.172.343l-.044.087a.581.581 0 01-.118.162z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M6.145 10.954A19.83 19.83 0 016 8.636a20.035 20.035 0 014.152-1.779 20.221 20.221 0 016.262-.853c.568.011 1.39.074 2.014.141a6.005 6.005 0 00-3.065 4.19c-.06.314-.093.64-.104.988-.016.536-.068.958-.18 1.353a4.53 4.53 0 01-8.469.672 1.475 1.475 0 01-.1-.3 20.172 20.172 0 01-.365-2.094zm16.613 8.56c-.238.37-.49.73-.752 1.085a5.898 5.898 0 00-.73-2.89 5.933 5.933 0 00-2.146-2.263l-.09-.055a7.075 7.075 0 01-.149-.09c-1.137-.723-1.83-1.735-2.074-3.041A4.518 4.518 0 0120.2 7.041c.82-.198 1.63-.17 2.437.083.619.195 1.245.45 2.008.807.44.207.884.437 1.356.704a20.113 20.113 0 01-.452 4.148 20.147 20.147 0 01-2.79 6.731zm-3.037 3.673A20.522 20.522 0 0116.001 26a15.74 15.74 0 01-1.017-.639 20.375 20.375 0 01-7.288-8.722 5.882 5.882 0 002.42.785 6.027 6.027 0 003.614-.773 4.618 4.618 0 011.706-.569 4.52 4.52 0 014.902 3.206c.335 1.121.237 2.222-.283 3.307-.044.092-.082.166-.172.343l-.044.087a.581.581 0 01-.118.162z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#67B2E8" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.145 11.954c.084.7.206 1.398.365 2.093.025.111.058.209.1.3a4.53 4.53 0 008.47-.671c.11-.395.163-.817.18-1.353a6.005 6.005 0 013.169-5.178 26.063 26.063 0 00-2.015-.14 20.221 20.221 0 00-6.262.852A20.035 20.035 0 006 9.637c.002.759.05 1.53.145 2.317zm16.613 8.56a20.147 20.147 0 003.164-9.215c.05-.57.076-1.123.078-1.664a19.598 19.598 0 00-1.356-.704c-.763-.357-1.389-.612-2.008-.807a4.468 4.468 0 00-2.437-.083 4.518 4.518 0 00-3.382 5.219c.244 1.306.937 2.318 2.074 3.04a7.075 7.075 0 00.239.146 5.933 5.933 0 012.147 2.262 5.91 5.91 0 01.729 2.89c.263-.353.514-.715.752-1.084zm-3.037 3.673a.581.581 0 00.118-.162l.044-.087c.09-.177.128-.251.172-.343.52-1.085.618-2.186.283-3.307a4.52 4.52 0 00-4.902-3.206 4.604 4.604 0 00-1.706.57 6.027 6.027 0 01-6.034-.013 20.346 20.346 0 004.063 6.031 20.375 20.375 0 003.225 2.691c.409.275.809.524 1.018.639a20.522 20.522 0 003.72-2.813z"/>';
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
  export let ariaLabel = 'xem';
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
@prop export let ariaLabel = 'xem';
-->
