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
    '<path d="M14.863 26.986v-3.37A7.7 7.7 0 018.336 16a7.7 7.7 0 016.527-7.616v-3.37C9.32 5.595 5 10.292 5 16c0 5.708 4.32 10.405 9.863 10.986zM17.038 5v3.363a7.7 7.7 0 016.585 6.474h3.363C26.44 9.617 22.268 5.48 17.038 5zM27 17.017h-3.356a7.7 7.7 0 01-6.606 6.62V27c5.278-.483 9.48-4.694 9.962-9.983zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#00ADEF" fill-rule="nonzero"/><path fill="#FFF" d="M14.863 26.986C9.32 26.405 5 21.708 5 16c0-5.708 4.32-10.405 9.863-10.986v3.37A7.7 7.7 0 008.336 16a7.7 7.7 0 006.527 7.616v3.37zM17.038 5c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 00-6.585-6.474V5zM27 17.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 006.606-6.62H27z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.863 25.986C9.32 25.405 5 20.708 5 15 5 9.292 9.32 4.595 14.863 4.014v3.37A7.7 7.7 0 008.336 15a7.7 7.7 0 006.527 7.616v3.37zM17.038 4c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 00-6.585-6.474V4zM27 16.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 006.606-6.62H27z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00ADEF" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M14.863 26.986v-3.37A7.7 7.7 0 018.336 16a7.7 7.7 0 016.527-7.616v-3.37C9.32 5.595 5 10.292 5 16c0 5.708 4.32 10.405 9.863 10.986zM17.038 5v3.363a7.7 7.7 0 016.585 6.474h3.363C26.44 9.617 22.268 5.48 17.038 5zM27 17.017h-3.356a7.7 7.7 0 01-6.606 6.62V27c5.278-.483 9.48-4.694 9.962-9.983zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
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
  export let ariaLabel = 'mnx';
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
@prop export let ariaLabel = 'mnx';
-->
