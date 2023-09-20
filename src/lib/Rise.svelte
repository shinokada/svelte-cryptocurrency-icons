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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.605 9.155c.858 0 1.553-.706 1.553-1.577S13.463 6 12.605 6c-.857 0-1.552.706-1.552 1.578s.695 1.577 1.552 1.577zM19.447 26c.858 0 1.553-.706 1.553-1.578 0-.87-.695-1.577-1.553-1.577-.857 0-1.552.706-1.552 1.577 0 .872.695 1.578 1.552 1.578zm-6.205-11.79L20.4 8.65a1.432 1.432 0 00.26-1.987 1.38 1.38 0 00-1.955-.265l-7.157 5.562a1.432 1.432 0 00-.261 1.986 1.38 1.38 0 001.955.265zm.053 5.669l7.157-5.562a1.432 1.432 0 00.261-1.986 1.38 1.38 0 00-1.955-.265L11.6 17.628a1.432 1.432 0 00-.26 1.987 1.38 1.38 0 001.955.265zm0 5.829l7.157-5.562a1.432 1.432 0 00.261-1.986 1.38 1.38 0 00-1.955-.265L11.6 23.457a1.432 1.432 0 00-.26 1.987 1.38 1.38 0 001.955.265z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f49352" r="16"/><path d="M12.605 9.155c-.857 0-1.552-.706-1.552-1.577S11.748 6 12.605 6c.858 0 1.553.706 1.553 1.578s-.695 1.577-1.553 1.577zM19.447 26a1.565 1.565 0 01-1.552-1.578c0-.87.695-1.577 1.552-1.577.858 0 1.553.706 1.553 1.577 0 .872-.695 1.578-1.553 1.578zm-6.205-11.79a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.986l7.158-5.562a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.987zm.053 5.669a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.987l7.158-5.561a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.986zm0 5.829a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.987l7.158-5.561a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.986z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="135%" height="117.5%" x="-17.5%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M12.605 8.155a1.565 1.565 0 01-1.552-1.577c0-.872.695-1.578 1.552-1.578.858 0 1.553.706 1.553 1.578 0 .87-.695 1.577-1.553 1.577zM19.447 25a1.565 1.565 0 01-1.552-1.578c0-.87.695-1.577 1.552-1.577.858 0 1.553.706 1.553 1.577 0 .872-.695 1.578-1.553 1.578zm-6.205-11.79a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.986l7.158-5.562a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.987l-7.158 5.561zm.053 5.669a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.987l7.158-5.561a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.986l-7.158 5.562zm0 5.829a1.38 1.38 0 01-1.955-.265 1.432 1.432 0 01.26-1.987l7.158-5.561a1.38 1.38 0 011.955.265 1.432 1.432 0 01-.26 1.986l-7.158 5.562z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F49352" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.605 9.155c.858 0 1.553-.706 1.553-1.577S13.463 6 12.605 6c-.857 0-1.552.706-1.552 1.578s.695 1.577 1.552 1.577zM19.447 26c.858 0 1.553-.706 1.553-1.578 0-.87-.695-1.577-1.553-1.577-.857 0-1.552.706-1.552 1.577 0 .872.695 1.578 1.552 1.578zm-6.205-11.79L20.4 8.65a1.432 1.432 0 00.26-1.987 1.38 1.38 0 00-1.955-.265l-7.157 5.562a1.432 1.432 0 00-.261 1.986 1.38 1.38 0 001.955.265zm.053 5.669l7.157-5.562a1.432 1.432 0 00.261-1.986 1.38 1.38 0 00-1.955-.265L11.6 17.628a1.432 1.432 0 00-.26 1.987 1.38 1.38 0 001.955.265zm0 5.829l7.157-5.562a1.432 1.432 0 00.261-1.986 1.38 1.38 0 00-1.955-.265L11.6 23.457a1.432 1.432 0 00-.26 1.987 1.38 1.38 0 001.955.265z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'rise';
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
@prop export let ariaLabel = 'rise';
-->
