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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-13.038L20.516 12.5h-2.375l4.625 3.998-1.461 1.257-3.039-3.708h-2.01l-3.652 4.445-.398.486 1.788-4.923H12.37l-1.184 3.325L10 14.056H8l-1.188 3.332-1.192-3.346H4l1.773 4.911h2.112L9 15.823l1.124 3.155h2.08L10.96 20.5h1.997l4.305-5.241 1.233 1.508h-1.619l-.833 1.029h3.292l.955 1.16h1.998l1.671-1.43 1.677 1.436zm-2.345-2.972l2.249-1.902-2.251-.002-1.113.948z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f89022" r="16"/><path d="M28 18.962h-2.364l-1.677-1.436-1.671 1.43H20.29l-.955-1.16h-3.292l.833-1.029h1.619l-1.233-1.508-4.305 5.241H10.96l1.246-1.522h-2.081L9 15.824l-1.116 3.13H5.773L4 14.041h1.62l1.192 3.346L8 14.056h2l1.185 3.324 1.184-3.325h1.625l-1.788 4.923.398-.486 3.652-4.445h2.01l3.039 3.708 1.462-1.257L18.14 12.5h2.375zm-2.345-2.972l-1.115-.956 1.113-.948 2.25.002z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="114.6%" height="143.8%" x="-7.3%" y="-15.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M28 17.962h-2.364l-1.677-1.436-1.671 1.43H20.29l-.955-1.16h-3.292l.833-1.029h1.619l-1.233-1.508-4.305 5.241H10.96l1.246-1.522h-2.081L9 14.824l-1.116 3.13H5.773L4 13.041h1.62l1.192 3.346L8 13.056h2l1.185 3.324 1.184-3.325h1.625l-1.788 4.923.398-.486 3.652-4.445h2.01l3.039 3.708 1.462-1.257L18.14 11.5h2.375L28 17.962zm-2.345-2.972l-1.115-.956 1.113-.948 2.25.002-2.248 1.902z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F89022" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-13.038L20.516 12.5h-2.375l4.625 3.998-1.461 1.257-3.039-3.708h-2.01l-3.652 4.445-.398.486 1.788-4.923H12.37l-1.184 3.325L10 14.056H8l-1.188 3.332-1.192-3.346H4l1.773 4.911h2.112L9 15.823l1.124 3.155h2.08L10.96 20.5h1.997l4.305-5.241 1.233 1.508h-1.619l-.833 1.029h3.292l.955 1.16h1.998l1.671-1.43 1.677 1.436zm-2.345-2.972l2.249-1.902-2.251-.002-1.113.948z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'wax';
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
@prop export let ariaLabel = 'wax';
-->
