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
    '<path d="M9.403 9.957L9.4 20.78h2.818l-.072-7.327 8.28 10.513 2.228 2.83-.018-1.573-.029-14.179h-2.774l.072 7.386L9.577 5.306l-.173-.22v3.948l-.004.92.003.003zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M9.403 9.957l11.024 14.01-8.281-10.514.072 7.327H9.4l.003-10.823zm0-.923l.001-3.947.173.219-.161-.204-.013 3.932zm10.502 9.396l-.072-7.386h2.774l.03 14.18-.038-3.37-2.694-3.424z" opacity=".398"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#C91111"/><g fill="#FFF"><path opacity=".6" d="M9.4 20.78h2.818l-.072-7.327L22.64 26.776l-.033-15.732h-2.774l.072 7.401L9.404 5.087z"/><path d="M9.4 9.953l.016-4.851 13.183 16.752.055 4.942z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="125%" height="115.9%" x="-12.5%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#C91111" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(9 4)"><path opacity=".6" d="M.4 15.78h2.818l-.072-7.327L13.64 21.776l-.033-15.732h-2.774l.072 7.401L.404.087z"/><path d="M.4 4.953L.416.102l13.183 16.752.055 4.942z"/></g></g>';
  let svgwhite =
    '<g fill="#FFF"><path d="M9.403 9.957L9.4 20.78h2.818l-.072-7.327 8.28 10.513 2.228 2.83-.018-1.573-.029-14.179h-2.774l.072 7.386L9.577 5.306l-.173-.22v3.948l-.004.92.003.003zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M9.403 9.957l11.024 14.01-8.281-10.514.072 7.327H9.4l.003-10.823zm0-.923l.001-3.947.173.219-.161-.204-.013 3.932zm10.502 9.396l-.072-7.386h2.774l.03 14.18-.038-3.37-2.694-3.424z" opacity=".398"/></g>';
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
  export let ariaLabel = 'drgn';
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
@prop export let ariaLabel = 'drgn';
-->
