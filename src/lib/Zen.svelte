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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.8 9.568l-1.78 2.77a7.835 7.835 0 01.856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 01-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933a10.82 10.82 0 00-1.838-6.062l-.211-.303zM15.933 5A10.923 10.923 0 005 15.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 017.725-2.52c.798 0 1.572.07 2.333.21l.455.093a5.494 5.494 0 00-5.492-5.492 5.48 5.48 0 00-5.452 5.983l.028.248c-1.377 1.058-2.032 1.88-2.066 1.914a8.049 8.049 0 01-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0015.933 5zm2.754 11.621c-2.72 0-5.256.874-7.305 2.352a5.458 5.458 0 004.55 2.418 5.482 5.482 0 005.392-4.484 12.434 12.434 0 00-2.637-.286z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#00EAAB" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M24.8 9.568l-1.78 2.77a7.835 7.835 0 01.856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 01-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933 0-2.385-.756-4.568-2.049-6.365z"/><path d="M15.933 21.39a5.482 5.482 0 005.39-4.483 12.473 12.473 0 00-9.942 2.066 5.458 5.458 0 004.552 2.418z"/><path d="M18.62 15.63c.957 0 1.88.101 2.788.303a5.494 5.494 0 00-5.492-5.492 5.48 5.48 0 00-5.424 6.23c-1.377 1.059-2.032 1.882-2.066 1.915a8.049 8.049 0 01-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0015.933 5 10.923 10.923 0 005 15.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 017.725-2.52z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00EAAB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M24.8 8.568l-1.78 2.77a7.835 7.835 0 01.856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 01-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933 0-2.385-.756-4.568-2.049-6.365z"/><path d="M15.933 20.39a5.482 5.482 0 005.39-4.483 12.473 12.473 0 00-9.942 2.066 5.458 5.458 0 004.552 2.418z"/><path d="M18.62 14.63c.957 0 1.88.101 2.788.303a5.494 5.494 0 00-5.492-5.492 5.48 5.48 0 00-5.424 6.23c-1.377 1.059-2.032 1.882-2.066 1.915a8.049 8.049 0 01-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0015.933 4 10.923 10.923 0 005 14.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 017.725-2.52z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.8 9.568l-1.78 2.77a7.835 7.835 0 01.856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 01-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933a10.82 10.82 0 00-1.838-6.062l-.211-.303zM15.933 5A10.923 10.923 0 005 15.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 017.725-2.52c.798 0 1.572.07 2.333.21l.455.093a5.494 5.494 0 00-5.492-5.492 5.48 5.48 0 00-5.452 5.983l.028.248c-1.377 1.058-2.032 1.88-2.066 1.914a8.049 8.049 0 01-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0015.933 5zm2.754 11.621c-2.72 0-5.256.874-7.305 2.352a5.458 5.458 0 004.55 2.418 5.482 5.482 0 005.392-4.484 12.434 12.434 0 00-2.637-.286z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'zen';
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
@prop export let ariaLabel = 'zen';
-->
