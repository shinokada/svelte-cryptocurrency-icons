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
    '<path d="M13.577 22.012l-3.717-2.14v5.456l1.89-1.091 3.72 2.14V20.92l-1.893 1.092zm-3.35-9.704l.024.014v5.437l4.73-2.725-1.942-1.122.012-.006 2.726 1.572V10.03l.742.427V5l-4.738 2.732 3.988 2.293-2.008 1.155-2.722-1.573v3.15-5.438L6.3 10.044l3.92 2.261-4.73 2.729 4.737 2.725v-5.45zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.519-27v5.457l4.738-2.725L16.519 5zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zM4.273 10.273v5.457l4.738-2.732-4.738-2.725zm2.465 5.48v5.457l4.737-2.732-4.737-2.725zm9.743 6.468v5.457l4.73-2.733-4.73-2.724zm.038-6.307l-4.73 2.732 4.73 2.725v-5.457zm-9.781 1.27L2 19.91l4.738 2.733v-5.457zm19.256-6.727l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732V13.19zm4.737 2.725l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732v-5.457zm0-10.914l-4.738 2.725 4.738 2.732V7.732z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#00D4D5"/><g fill="#FFF"><path d="M16.519 5v5.457l4.738-2.725z"/><path opacity=".9" d="M21.257 7.732v5.457l4.737-2.732z"/><path opacity=".8" d="M16.519 10.457v5.457l4.738-2.725zm4.738 2.733v5.456l4.737-2.732z"/><path opacity=".8" d="M16.519 15.914v5.457l4.738-2.725z"/><path d="M21.257 18.646v5.457l4.737-2.732z"/><path opacity=".4" d="M4.273 10.273v5.457l4.738-2.732z"/><path opacity=".2" d="M10.25 12.302v5.457l4.73-2.725z"/><path opacity=".3" d="M6.738 15.753v5.457l4.737-2.732z"/><path opacity=".9" d="M9.86 19.871v5.457l4.73-2.732z"/><path opacity=".7" d="M16.48 22.22v5.458l4.73-2.733z"/><path opacity=".9" d="M11.039 9.607v5.458l4.73-2.725z"/><path opacity=".8" d="M16.519 5v5.457l-4.738-2.725z"/><path opacity=".6" d="M11.039 7.32v5.456L6.3 10.044z"/><path opacity=".6" d="M15.777 10.02v5.458l-4.738-2.733z"/><path opacity=".95" d="M10.228 12.302v5.457L5.49 15.034z"/><path opacity=".6" d="M16.519 15.914v5.457l-4.73-2.725z"/><path opacity=".55" d="M6.738 17.185v5.457L2 19.909z"/><path d="M25.994 10.457v5.457l-4.737-2.725z"/><path opacity=".95" d="M21.257 13.19v5.456l-4.738-2.732z"/><path opacity=".9" d="M25.994 15.914v5.457l-4.737-2.725z"/><path opacity=".7" d="M21.257 18.646v5.457l-4.738-2.732z"/><path opacity=".4" d="M15.47 20.92v5.457l-4.737-2.725z"/><path d="M21.257 7.732v5.457l-4.738-2.732z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00D4D5" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M16.31 5v5.002l4.342-2.497z"/><path opacity=".9" d="M20.652 7.505v5.002l4.343-2.505z"/><path opacity=".8" d="M16.31 10.002v5.003l4.342-2.498zm4.342 2.505v5.002l4.343-2.504zm-4.342 2.498v5.002l4.342-2.498z"/><path d="M20.652 17.51v5.001l4.343-2.504z"/><path opacity=".4" d="M5.084 9.834v5.002l4.343-2.505z"/><path opacity=".2" d="M10.563 11.693v5.002l4.336-2.497z"/><path opacity=".3" d="M7.343 14.857v5.003l4.343-2.505z"/><path opacity=".9" d="M10.205 18.632v5.002l4.336-2.505z"/><path opacity=".7" d="M16.274 20.786v5.002l4.336-2.505z"/><path opacity=".9" d="M11.286 9.223v5.003l4.335-2.498z"/><path opacity=".8" d="M16.31 5v5.002l-4.344-2.497z"/><path opacity=".6" d="M11.286 7.126v5.002L6.943 9.623zm4.343 2.476v5.003L11.286 12.1z"/><path opacity=".95" d="M10.542 11.693v5.002L6.2 14.198z"/><path opacity=".6" d="M16.31 15.005v5.002l-4.337-2.498z"/><path opacity=".55" d="M7.343 16.17v5.002L3 18.667z"/><path d="M24.995 10.002v5.003l-4.343-2.498z"/><path opacity=".95" d="M20.652 12.507v5.002l-4.343-2.504z"/><path opacity=".9" d="M24.995 15.005v5.002l-4.343-2.498z"/><path opacity=".7" d="M20.652 17.51v5.001l-4.343-2.504z"/><path opacity=".4" d="M15.348 19.593v5.002l-4.343-2.497z"/><path d="M20.652 7.505v5.002l-4.343-2.505z"/></g></g>';
  let svgwhite =
    '<path d="M13.577 22.012l-3.717-2.14v5.456l1.89-1.091 3.72 2.14V20.92l-1.893 1.092zm-3.35-9.704l.024.014v5.437l4.73-2.725-1.942-1.122.012-.006 2.726 1.572V10.03l.742.427V5l-4.738 2.732 3.988 2.293-2.008 1.155-2.722-1.573v3.15-5.438L6.3 10.044l3.92 2.261-4.73 2.729 4.737 2.725v-5.45zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.519-27v5.457l4.738-2.725L16.519 5zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zm-4.738 2.725v5.457l4.738-2.725-4.738-2.732zm4.738 2.732v5.457l4.737-2.732-4.737-2.725zM4.273 10.273v5.457l4.738-2.732-4.738-2.725zm2.465 5.48v5.457l4.737-2.732-4.737-2.725zm9.743 6.468v5.457l4.73-2.733-4.73-2.724zm.038-6.307l-4.73 2.732 4.73 2.725v-5.457zm-9.781 1.27L2 19.91l4.738 2.733v-5.457zm19.256-6.727l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732V13.19zm4.737 2.725l-4.737 2.732 4.737 2.725v-5.457zm-4.737 2.732l-4.738 2.725 4.738 2.732v-5.457zm0-10.914l-4.738 2.725 4.738 2.732V7.732z" fill="#FFF"/>';
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
  export let ariaLabel = 'iotx';
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
@prop export let ariaLabel = 'iotx';
-->
