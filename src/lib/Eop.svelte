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
    '<path d="M17 32C8.163 32 1 24.837 1 16S8.163 0 17 0s16 7.163 16 16-7.163 16-16 16zm-1.286-4l-5.348-14.263-2.16 9.84L15.714 28zM17.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983L17.12 4.17zM18.56 28l7.474-4.423-2.125-9.84L18.56 28z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#35A7DF"/><path d="M14.714 28L9.366 13.737l-2.16 9.84zM16.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983zM17.56 28l5.349-14.263 2.125 9.84z" fill="#FEFFFE"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(2)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#35A7DF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M15.75 25l-4.68-12.48-1.89 8.61zm1.23-20.85l-5.13 6.24 5.13 13.11 5.16-13.11zM18.24 25l4.68-12.48 1.86 8.61z" fill="#FEFFFE"/></g>';
  let svgwhite =
    '<path d="M17 32C8.163 32 1 24.837 1 16S8.163 0 17 0s16 7.163 16 16-7.163 16-16 16zm-1.286-4l-5.348-14.263-2.16 9.84L15.714 28zM17.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983L17.12 4.17zM18.56 28l7.474-4.423-2.125-9.84L18.56 28z" fill="#FFF"/>';
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
  export let ariaLabel = 'eop';
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
@prop export let ariaLabel = 'eop';
-->
