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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.57-27.993A11.788 11.788 0 009.058 6.38a1.765 1.765 0 00-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0111.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 01-2.245.078l-.077-.078a5.238 5.238 0 100 7.059 1.556 1.556 0 011.86-.353 1.578 1.578 0 01.462 2.47 8.414 8.414 0 01-11.34.996 1.765 1.765 0 00-2.27.11 1.786 1.786 0 00.149 2.756 11.852 11.852 0 107.49-21.364zm-.22 14.788a2.933 2.933 0 11.022-5.866 2.933 2.933 0 01-.021 5.866z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#2FD2E5"/><path d="M16.57 4.007A11.788 11.788 0 009.058 6.38a1.765 1.765 0 00-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0111.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 01-2.245.078l-.077-.078a5.238 5.238 0 100 7.059 1.556 1.556 0 011.86-.353 1.578 1.578 0 01.462 2.47 8.414 8.414 0 01-11.34.996 1.765 1.765 0 00-2.27.11 1.786 1.786 0 00.149 2.756 11.852 11.852 0 107.49-21.364zm-.22 14.788a2.933 2.933 0 11.022-5.866 2.933 2.933 0 01-.021 5.866z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2FD2E5" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16.855 4.006a10.806 10.806 0 00-6.884 2.175 1.618 1.618 0 00-.1 2.504c.57.54 1.447.582 2.067.1a7.687 7.687 0 0110.353.835c.54.558.557 1.44.038 2.019-.548.587-1.47.62-2.057.07l-.071-.07a4.801 4.801 0 100 6.47 1.427 1.427 0 011.705-.323 1.446 1.446 0 01.423 2.264 7.713 7.713 0 01-10.395.913 1.618 1.618 0 00-2.08.1 1.637 1.637 0 00.136 2.527 10.864 10.864 0 106.865-19.584zm-.2 13.556a2.689 2.689 0 11.02-5.377 2.689 2.689 0 01-.02 5.377z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.57-27.993A11.788 11.788 0 009.058 6.38a1.765 1.765 0 00-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0111.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 01-2.245.078l-.077-.078a5.238 5.238 0 100 7.059 1.556 1.556 0 011.86-.353 1.578 1.578 0 01.462 2.47 8.414 8.414 0 01-11.34.996 1.765 1.765 0 00-2.27.11 1.786 1.786 0 00.149 2.756 11.852 11.852 0 107.49-21.364zm-.22 14.788a2.933 2.933 0 11.022-5.866 2.933 2.933 0 01-.021 5.866z" fill="#FFF"/>';
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
  export let ariaLabel = 'cmm';
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
@prop export let ariaLabel = 'cmm';
-->
