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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.082-15.167c.507 0 .918-.373.918-.833v-1.667c0-.46-.41-.833-.918-.833h-5.53c-.507 0-.918.373-.918.833 0 .46.411.833.918.833h4.612V16c0 .46.411.833.918.833zm-4.549 0h-.7l-5.232-3.18a.979.979 0 00-.531-.153h-1.835c-.507 0-.918.373-.918.833 0 .46.41.833.918.833h1.542l5.352 3.24c.127.06.27.094.423.094h2.816c.507 0 .918-.373.918-.834 0-.46-.41-.833-.918-.833h-1.835zm-6.463 0h-1.554l-5.232-3.18a.98.98 0 00-.531-.153H5.918c-.507 0-.918.373-.918.833 0 .46.41.833.918.833H7.46l5.352 3.24c.126.06.27.094.423.094h1.835c.507 0 .918-.373.918-.834 0-.46-.411-.833-.918-.833zm-9.152 0c-.507 0-.918.373-.918.834 0 .46.41.833.918.833h1.835c.507 0 .918-.373.918-.833 0-.46-.411-.834-.918-.834H5.918z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#008FBB"/><path fill="#FFF" d="M26.082 16.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V16c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 01-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 01-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 01.531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="170%" x="-8%" y="-25%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M26.082 15.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V15c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 01-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 01-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 01.531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#008FBB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.082-15.167c.507 0 .918-.373.918-.833v-1.667c0-.46-.41-.833-.918-.833h-5.53c-.507 0-.918.373-.918.833 0 .46.411.833.918.833h4.612V16c0 .46.411.833.918.833zm-4.549 0h-.7l-5.232-3.18a.979.979 0 00-.531-.153h-1.835c-.507 0-.918.373-.918.833 0 .46.41.833.918.833h1.542l5.352 3.24c.127.06.27.094.423.094h2.816c.507 0 .918-.373.918-.834 0-.46-.41-.833-.918-.833h-1.835zm-6.463 0h-1.554l-5.232-3.18a.98.98 0 00-.531-.153H5.918c-.507 0-.918.373-.918.833 0 .46.41.833.918.833H7.46l5.352 3.24c.126.06.27.094.423.094h1.835c.507 0 .918-.373.918-.834 0-.46-.411-.833-.918-.833zm-9.152 0c-.507 0-.918.373-.918.834 0 .46.41.833.918.833h1.835c.507 0 .918-.373.918-.833 0-.46-.411-.834-.918-.834H5.918z"/>';
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
  export let ariaLabel = 'nxt';
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
@prop export let ariaLabel = 'nxt';
-->
