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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.173 16.503c-1.551.945-4.075 1.562-6.93 1.562-2.926 0-5.505-.506-7.043-1.493-1.97.715-3.2 1.73-3.2 2.856 0 2.158 4.518 3.768 10.092 3.768 5.575 0 10.093-1.75 10.093-3.911 0-1.088-1.154-2.075-3.012-2.782zm-2.081-4.142c-1.182.617-2.953 1.011-4.94 1.011-1.987 0-3.758-.394-4.94-1.01-1.656.54-2.712 1.352-2.712 2.258 0 1.635 3.426 2.96 7.652 2.96 4.228 0 7.655-1.325 7.652-2.96 0-.906-1.053-1.715-2.712-2.259zM16.124 8c-3.267 0-5.916 1.095-5.916 2.44 0 1.346 2.65 2.44 5.916 2.44 3.266 0 5.916-1.094 5.916-2.44 0-1.345-2.65-2.44-5.916-2.44z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#1E1E1E" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M16.092 23.196C10.518 23.196 6 21.586 6 19.428c0-1.126 1.23-2.14 3.2-2.856 1.538.987 4.117 1.493 7.042 1.493 2.856 0 5.38-.617 6.93-1.562 1.859.707 3.013 1.694 3.013 2.782 0 2.161-4.518 3.911-10.093 3.911z"/><path d="M16.152 17.58c-4.226 0-7.652-1.325-7.652-2.96 0-.906 1.056-1.718 2.712-2.259 1.182.617 2.953 1.011 4.94 1.011 1.987 0 3.758-.394 4.94-1.01 1.659.543 2.712 1.352 2.712 2.258.003 1.635-3.424 2.96-7.652 2.96z"/><path d="M16.124 12.88c-3.267 0-5.916-1.094-5.916-2.44 0-1.345 2.65-2.44 5.916-2.44 3.266 0 5.916 1.095 5.916 2.44 0 1.346-2.65 2.44-5.916 2.44z"/></g></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-17.9%" y="-23.4%" width="135.7%" height="146.9%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1E1E1E" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(6 7)" fill="#FFF" fill-rule="nonzero"><path d="M10.092 15.196C4.518 15.196 0 13.586 0 11.428c0-1.126 1.23-2.14 3.2-2.856 1.538.987 4.117 1.493 7.042 1.493 2.856 0 5.38-.617 6.93-1.562 1.859.707 3.013 1.694 3.013 2.782 0 2.161-4.518 3.911-10.093 3.911z"/><path d="M10.152 9.58C5.926 9.58 2.5 8.255 2.5 6.62c0-.906 1.056-1.718 2.712-2.259 1.182.617 2.953 1.011 4.94 1.011 1.987 0 3.758-.394 4.94-1.01 1.659.543 2.712 1.352 2.712 2.258.003 1.635-3.424 2.96-7.652 2.96z"/><path d="M10.124 4.88c-3.267 0-5.916-1.094-5.916-2.44 0-1.345 2.65-2.44 5.916-2.44 3.266 0 5.916 1.095 5.916 2.44 0 1.346-2.65 2.44-5.916 2.44z"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.173 16.503c-1.551.945-4.075 1.562-6.93 1.562-2.926 0-5.505-.506-7.043-1.493-1.97.715-3.2 1.73-3.2 2.856 0 2.158 4.518 3.768 10.092 3.768 5.575 0 10.093-1.75 10.093-3.911 0-1.088-1.154-2.075-3.012-2.782zm-2.081-4.142c-1.182.617-2.953 1.011-4.94 1.011-1.987 0-3.758-.394-4.94-1.01-1.656.54-2.712 1.352-2.712 2.258 0 1.635 3.426 2.96 7.652 2.96 4.228 0 7.655-1.325 7.652-2.96 0-.906-1.053-1.715-2.712-2.259zM16.124 8c-3.267 0-5.916 1.095-5.916 2.44 0 1.346 2.65 2.44 5.916 2.44 3.266 0 5.916-1.094 5.916-2.44 0-1.345-2.65-2.44-5.916-2.44z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'bal';
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
@prop export let ariaLabel = 'bal';
-->
