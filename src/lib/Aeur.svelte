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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.048-13.014a7.144 7.144 0 00.093 0 .055.055 0 01.004.014.049.049 0 11-.097-.014zm-6.014-3.493a6.993 6.993 0 006.055 10.493 7.002 7.002 0 006.993-6.993 6.96 6.96 0 00-.94-3.503 6.993 6.993 0 10-12.11.003zM16.048 12a7.138 7.138 0 00-.097 0 .049.049 0 01.049-.05.055.055 0 01.049.05z"/>';
  let svgcolor =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#FFF" stop-opacity=".83" offset="3%"/><stop stop-color="#FFF" stop-opacity=".66" offset="7%"/><stop stop-color="#FFF" stop-opacity=".5" offset="11%"/><stop stop-color="#FFF" stop-opacity=".37" offset="15%"/><stop stop-color="#FFF" stop-opacity=".25" offset="19%"/><stop stop-color="#FFF" stop-opacity=".16" offset="25%"/><stop stop-color="#FFF" stop-opacity=".09" offset="30%"/><stop stop-color="#FFF" stop-opacity=".04" offset="37%"/><stop stop-color="#FFF" stop-opacity=".01" offset="47%"/><stop stop-color="#FFF" stop-opacity="0" offset="100%"/></linearGradient></defs><g fill="none"><circle cx="16" cy="16" r="16" fill="#051D2D"/><g transform="translate(9 6)" fill="url(#a)"><path d="M6.993 13.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 6.951A.049.049 0 107.049 7a.055.055 0 00-.05-.05z"/><path d="M6.993 20.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 13.951a.049.049 0 10.049.049.055.055 0 00-.05-.05z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="d"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#FFF" stop-opacity=".83" offset="3%"/><stop stop-color="#FFF" stop-opacity=".66" offset="7%"/><stop stop-color="#FFF" stop-opacity=".5" offset="11%"/><stop stop-color="#FFF" stop-opacity=".37" offset="15%"/><stop stop-color="#FFF" stop-opacity=".25" offset="19%"/><stop stop-color="#FFF" stop-opacity=".16" offset="25%"/><stop stop-color="#FFF" stop-opacity=".09" offset="30%"/><stop stop-color="#FFF" stop-opacity=".04" offset="37%"/><stop stop-color="#FFF" stop-opacity=".01" offset="47%"/><stop stop-color="#FFF" stop-opacity="0" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#051D2D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g transform="translate(9 5)" fill="url(#d)"><path d="M6.993 13.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 6.951A.049.049 0 107.049 7a.055.055 0 00-.05-.05z"/><path d="M6.993 20.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 13.951a.049.049 0 10.049.049.055.055 0 00-.05-.05z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.048-12.014a7.144 7.144 0 00.093 0 .055.055 0 01.004.014.049.049 0 11-.097-.014zm-6.014-3.493a6.993 6.993 0 006.055 10.493 7.002 7.002 0 006.993-6.993 6.96 6.96 0 00-.94-3.503 6.993 6.993 0 10-12.11.003zM16.048 13a7.138 7.138 0 00-.097 0 .049.049 0 01.049-.05.055.055 0 01.049.05z" fill="#FFF"/>';
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
  export let ariaLabel = 'aeur';
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
@prop export let ariaLabel = 'aeur';
-->
