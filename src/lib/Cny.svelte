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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.171 8v1.925h13.816V8zm-1.54 5.641v1.945h4.895v.385c-.079 1.886-.473 3.407-1.223 4.6-.75 1.08-2.171 2.003-4.303 2.735L8.105 25c2.21-.75 3.79-1.81 4.777-3.157 1.006-1.464 1.559-3.427 1.657-5.872v-.385h2.922v6.93c0 1.406.69 2.118 2.092 2.118h3.138c.69 0 1.204-.212 1.559-.597.355-.404.612-1.694.75-3.87l-1.855-.577c-.04 1.56-.138 2.503-.277 2.81-.118.29-.315.444-.552.444h-2.171c-.454 0-.671-.25-.671-.751v-6.507h5.23V13.64z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ff4314" r="16"/><path d="M9.171 8h13.816v1.925H9.17zm-1.54 5.641h17.073v1.945h-5.23v6.507c0 .5.217.75.67.75h2.172c.237 0 .434-.153.552-.442.139-.308.237-1.252.277-2.811l1.855.578c-.138 2.175-.395 3.465-.75 3.87-.355.384-.868.596-1.56.596h-3.137c-1.402 0-2.092-.712-2.092-2.118v-6.93h-2.922v.385c-.098 2.445-.65 4.408-1.657 5.872-.987 1.347-2.566 2.406-4.777 3.157L7 23.306c2.132-.732 3.553-1.656 4.303-2.734.75-1.194 1.144-2.715 1.223-4.601v-.385H7.632z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="120.6%" x="-9.7%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M9.171 7h13.816v1.925H9.17V7zm-1.54 5.641h17.073v1.945h-5.23v6.507c0 .5.217.75.67.75h2.172c.237 0 .434-.153.552-.442.139-.308.237-1.252.277-2.811l1.855.578c-.138 2.175-.395 3.465-.75 3.87-.355.384-.868.596-1.56.596h-3.137c-1.402 0-2.092-.712-2.092-2.118v-6.93h-2.922v.385c-.098 2.445-.65 4.408-1.657 5.872-.987 1.347-2.566 2.406-4.777 3.157L7 22.306c2.132-.732 3.553-1.656 4.303-2.734.75-1.194 1.144-2.715 1.223-4.601v-.385H7.632V12.64z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FF4314" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.171 8v1.925h13.816V8zm-1.54 5.641v1.945h4.895v.385c-.079 1.886-.473 3.407-1.223 4.6-.75 1.08-2.171 2.003-4.303 2.735L8.105 25c2.21-.75 3.79-1.81 4.777-3.157 1.006-1.464 1.559-3.427 1.657-5.872v-.385h2.922v6.93c0 1.406.69 2.118 2.092 2.118h3.138c.69 0 1.204-.212 1.559-.597.355-.404.612-1.694.75-3.87l-1.855-.577c-.04 1.56-.138 2.503-.277 2.81-.118.29-.315.444-.552.444h-2.171c-.454 0-.671-.25-.671-.751v-6.507h5.23V13.64z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'cny';
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
@prop export let ariaLabel = 'cny';
-->
