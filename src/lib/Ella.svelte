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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.073-18.788l2.207-2.207L16 5l-4.25 6.062 2.163 2.164L16 11.14zm-4.883.738l-2.2-2.2L5 16l6.056 4.229 2.156-2.156L11.14 16zm5.584 4.137l2.182 2.182L27 16l-5.978-4.29-2.226 2.226L20.86 16zm-4.838.71l-2.14 2.139L16 27l4.232-6.007-2.182-2.183L16 20.86zM16 12.527L12.528 16 16 19.472 19.472 16z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#396a28" r="16"/><path d="M18.073 13.212L16 11.14l-2.087 2.086-2.164-2.164L16 5l4.28 6.005zm-4.883.738L11.14 16l2.072 2.073-2.156 2.156L5 16l5.99-4.25zm5.584 4.137L20.86 16l-2.064-2.064 2.226-2.226L27 16l-6.044 4.269zm-4.838.71L16 20.86l2.05-2.05 2.182 2.183L16 27l-4.204-6.064zM16 12.527L19.472 16 16 19.472 12.528 16z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.073 12.212L16 10.14l-2.087 2.086-2.164-2.164L16 4l4.28 6.005-2.207 2.207zm-4.883.738L11.14 15l2.072 2.073-2.156 2.156L5 15l5.99-4.25 2.2 2.2zm5.584 4.137L20.86 15l-2.064-2.064 2.226-2.226L27 15l-6.044 4.269-2.182-2.182zm-4.838.71L16 19.86l2.05-2.05 2.182 2.183L16 26l-4.204-6.064 2.14-2.14zM16 11.527L19.472 15 16 18.472 12.528 15 16 11.528z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#396A28" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.073-18.788l2.207-2.207L16 5l-4.25 6.062 2.163 2.164L16 11.14zm-4.883.738l-2.2-2.2L5 16l6.056 4.229 2.156-2.156L11.14 16zm5.584 4.137l2.182 2.182L27 16l-5.978-4.29-2.226 2.226L20.86 16zm-4.838.71l-2.14 2.139L16 27l4.232-6.007-2.182-2.183L16 20.86zM16 12.527L12.528 16 16 19.472 19.472 16z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ella';
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
@prop export let ariaLabel = 'ella';
-->
