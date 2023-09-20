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
    '<path d="M24.92 15.62l.551-.387a28.18 28.18 0 01-.005-.006l.697-.487a4.247 4.247 0 000-6.953l.008.01L22.21 5.02l-4.9 3.429 1.314.925 3.58-2.505 3.09 2.167a2.729 2.729 0 010 4.473l-1.697 1.184L9.78 5 5.809 7.791a4.247 4.247 0 000 6.953l1.241.871-.304.214.005.007-.942.658a4.247 4.247 0 000 6.953l3.957 2.779 4.897-3.429-1.314-.926-3.586 2.506-3.09-2.167a2.729 2.729 0 010-4.473l1.705-1.19 13.816 9.692 3.972-2.792a4.247 4.247 0 000-6.953l-1.247-.874zm-1.326.93l1.697 1.19a2.729 2.729 0 010 4.473l-3.094 2.164-12.49-8.757 4.966-3.466-1.32-.928-.367.256-.01-.015-4.6 3.22L6.683 13.5a2.729 2.729 0 010-4.473l3.093-2.164 12.492 8.757-4.974 3.471 1.315.926 3.71-2.592.01.012 1.265-.887zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#48BEFF"/><g fill="#FFF"><path d="M22.194 26.239L5.81 14.744a4.247 4.247 0 010-6.953L9.78 5l16.386 11.494a4.247 4.247 0 010 6.953l-3.972 2.792zM9.776 6.863L6.683 9.027a2.729 2.729 0 000 4.473l15.514 10.877 3.094-2.164a2.729 2.729 0 000-4.473L9.776 6.863z"/><path d="M9.763 24.377l-3.09-2.167a2.729 2.729 0 010-4.473l8-5.583-1.32-.928-7.544 5.268a4.247 4.247 0 000 6.953l3.957 2.779 4.897-3.429-1.314-.926-3.586 2.506zM26.17 7.797L22.21 5.02l-4.9 3.429 1.314.925 3.58-2.505 3.09 2.167a2.729 2.729 0 010 4.473l-8 5.582 1.315.926 7.554-5.277a4.247 4.247 0 000-6.953l.008.01z"/><path d="M6.746 15.829l6.23-4.362.868 1.24-6.231 4.362zm17.75-1.758l-3.035 2.125.868 1.241 3.142-2.204c-.334-.382-.657-.772-.981-1.163l.006.001z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#48BEFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M21.678 24.469L6.658 13.932a3.893 3.893 0 010-6.373L10.298 5l15.02 10.536a3.893 3.893 0 010 6.374l-3.64 2.559zM10.294 6.708L7.46 8.692a2.501 2.501 0 000 4.1l14.222 9.97 2.836-1.984a2.501 2.501 0 000-4.1l-14.223-9.97z"/><path d="M10.283 22.762L7.45 20.776a2.501 2.501 0 010-4.1l7.333-5.118-1.21-.851-6.915 4.83a3.893 3.893 0 000 6.373l3.627 2.547 4.49-3.143-1.205-.849-3.287 2.297zm15.04-15.198l-3.63-2.546L17.2 8.161l1.205.849 3.281-2.297 2.833 1.986a2.501 2.501 0 010 4.1l-7.334 5.118 1.205.849 6.925-4.838a3.893 3.893 0 000-6.373l.008.009z"/><path d="M7.517 14.926l5.71-3.998.797 1.137-5.712 3.998zm16.271-1.611l-2.782 1.948.795 1.138 2.881-2.02c-.306-.35-.602-.708-.9-1.067l.006.001z"/></g></g>';
  let svgwhite =
    '<path d="M24.92 15.62l.551-.387a28.18 28.18 0 01-.005-.006l.697-.487a4.247 4.247 0 000-6.953l.008.01L22.21 5.02l-4.9 3.429 1.314.925 3.58-2.505 3.09 2.167a2.729 2.729 0 010 4.473l-1.697 1.184L9.78 5 5.809 7.791a4.247 4.247 0 000 6.953l1.241.871-.304.214.005.007-.942.658a4.247 4.247 0 000 6.953l3.957 2.779 4.897-3.429-1.314-.926-3.586 2.506-3.09-2.167a2.729 2.729 0 010-4.473l1.705-1.19 13.816 9.692 3.972-2.792a4.247 4.247 0 000-6.953l-1.247-.874zm-1.326.93l1.697 1.19a2.729 2.729 0 010 4.473l-3.094 2.164-12.49-8.757 4.966-3.466-1.32-.928-.367.256-.01-.015-4.6 3.22L6.683 13.5a2.729 2.729 0 010-4.473l3.093-2.164 12.492 8.757-4.974 3.471 1.315.926 3.71-2.592.01.012 1.265-.887zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="#FFF"/>';
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
  export let ariaLabel = 'loom';
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
@prop export let ariaLabel = 'loom';
-->
