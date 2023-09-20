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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.5-15.158l-2.608.134 2.326-5.925-7.084.976-.634 6.532h1.55L13.805 26zm-5.498 6.498c0 .13-.11.236-.246.236s-.247-.106-.247-.236v-1.75c0-.13.11-.236.247-.236s.246.105.246.235zm-1.832-5.286l.544-5.73a.223.223 0 01.226-.196h.04c.064 0 .124.025.167.07s.064.105.059.165l-.473 5.22h1.41l-.065 3.176a.27.27 0 01-.275.258h-.012c-.074 0-.145-.029-.197-.08s-.08-.119-.079-.19l.064-2.693zm0-6.6l6.907-.808-3.383-1.414S17.046 6.673 14.72 6l-.211.808s1.41.337 1.269 2.492z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f80000" r="16"/><path d="M20.5 16.842L13.804 26l.247-7.441H12.5l.634-6.532 7.084-.976-2.326 5.925zm-5.498 6.498v-1.75c0-.13-.11-.236-.246-.236s-.247.105-.247.235v1.751c0 .13.11.236.247.236s.246-.106.246-.236zm-1.832-5.286h1.41l-.065 2.693c-.001.071.027.14.079.19s.123.08.197.08h.012a.27.27 0 00.275-.258l.065-3.177h-1.41l.473-5.219c.005-.06-.016-.12-.059-.165s-.103-.07-.167-.07h-.04a.223.223 0 00-.226.197zm0-6.6L15.778 9.3c.14-2.155-1.27-2.492-1.27-2.492L14.72 6c2.326.673 1.974 3.232 1.974 3.232l3.383 1.414z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="143.8%" height="117.5%" x="-21.9%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M20.5 15.842L13.804 25l.247-7.441H12.5l.634-6.532 7.084-.976-2.326 5.925 2.608-.134zm-5.498 6.498v-1.75c0-.13-.11-.236-.246-.236a.241.241 0 00-.247.235v1.751c0 .13.11.236.247.236a.241.241 0 00.246-.236zm-1.832-5.286h1.41l-.065 2.693a.258.258 0 00.079.19c.052.051.123.08.197.08h.012a.27.27 0 00.275-.258l.065-3.177h-1.41l.473-5.219a.21.21 0 00-.059-.165.231.231 0 00-.167-.07h-.04a.223.223 0 00-.226.197l-.544 5.729zm0-6.6L15.778 8.3c.14-2.155-1.27-2.492-1.27-2.492L14.72 5c2.326.673 1.974 3.232 1.974 3.232l3.383 1.414-6.907.809z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F80000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.5-15.158l-2.608.134 2.326-5.925-7.084.976-.634 6.532h1.55L13.805 26zm-5.498 6.498c0 .13-.11.236-.246.236s-.247-.106-.247-.236v-1.75c0-.13.11-.236.247-.236s.246.105.246.235zm-1.832-5.286l.544-5.73a.223.223 0 01.226-.196h.04c.064 0 .124.025.167.07s.064.105.059.165l-.473 5.22h1.41l-.065 3.176a.27.27 0 01-.275.258h-.012c-.074 0-.145-.029-.197-.08s-.08-.119-.079-.19l.064-2.693zm0-6.6l6.907-.808-3.383-1.414S17.046 6.673 14.72 6l-.211.808s1.41.337 1.269 2.492z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ngc';
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
@prop export let ariaLabel = 'ngc';
-->
