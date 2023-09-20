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
    '<g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.032-9.13V9.08c0-1.146-.92-2.075-2.056-2.075s-2.055.929-2.055 2.075v13.79c0 1.145.92 2.074 2.055 2.074s2.056-.929 2.056-2.075zm-6.92.005v-3.1a2.072 2.072 0 00-1.015-1.82 2.032 2.032 0 00-2.068 0 2.072 2.072 0 00-1.014 1.82v3.1a2.072 2.072 0 001.014 1.82c.639.376 1.43.376 2.068 0a2.072 2.072 0 001.014-1.82zM24.955 17.4v-5.233c0-1.146-.92-2.075-2.056-2.075s-2.056.929-2.056 2.075V17.4c0 1.146.92 2.075 2.056 2.075s2.056-.93 2.056-2.075z"/><path d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z" fill-rule="nonzero" opacity=".5"/></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#121747" r="16"/><g fill="#fff" fill-rule="nonzero"><path d="M18.032 22.87c0 1.145-.92 2.074-2.056 2.074s-2.055-.929-2.055-2.075V9.08c0-1.145.92-2.074 2.055-2.074s2.056.929 2.056 2.075zm-6.92.005a2.072 2.072 0 01-1.015 1.82 2.032 2.032 0 01-2.068 0 2.072 2.072 0 01-1.014-1.82v-3.1a2.072 2.072 0 011.014-1.82 2.032 2.032 0 012.068 0 2.072 2.072 0 011.014 1.82z"/><path d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z" opacity=".5"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#121747" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" fill-rule="nonzero" filter="url(#d)" transform="translate(7 6)"><path d="M11.032 15.87c0 1.145-.92 2.074-2.056 2.074a2.065 2.065 0 01-2.055-2.075V2.08A2.064 2.064 0 018.976.006c1.135 0 2.056.929 2.056 2.075v13.79zm-6.92.005a2.072 2.072 0 01-1.015 1.82 2.032 2.032 0 01-2.068 0 2.072 2.072 0 01-1.014-1.82v-3.1a2.072 2.072 0 011.014-1.82 2.032 2.032 0 012.068 0 2.072 2.072 0 011.014 1.82v3.1z"/><path d="M17.956 10.4c0 1.145-.92 2.074-2.056 2.074a2.065 2.065 0 01-2.056-2.075V5.166c0-1.146.92-2.075 2.056-2.075 1.135 0 2.056.929 2.056 2.075v5.233z" opacity=".5"/></g></g>';
  let svgwhite =
    '<g fill="#fff" fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.032-9.13V9.08c0-1.146-.92-2.075-2.056-2.075s-2.055.929-2.055 2.075v13.79c0 1.145.92 2.074 2.055 2.074s2.056-.929 2.056-2.075zm-6.92.005v-3.1a2.072 2.072 0 00-1.015-1.82 2.032 2.032 0 00-2.068 0 2.072 2.072 0 00-1.014 1.82v3.1a2.072 2.072 0 001.014 1.82c.639.376 1.43.376 2.068 0a2.072 2.072 0 001.014-1.82zM24.955 17.4v-5.233c0-1.146-.92-2.075-2.056-2.075s-2.056.929-2.056 2.075V17.4c0 1.146.92 2.075 2.056 2.075s2.056-.93 2.056-2.075z"/><path d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z" fill-rule="nonzero" opacity=".5"/></g>';
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
  export let ariaLabel = 'dtr';
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
@prop export let ariaLabel = 'dtr';
-->
