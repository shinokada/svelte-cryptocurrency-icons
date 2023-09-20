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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm6 5.813a2.25 2.25 0 012.25 2.25v3.374a2.25 2.25 0 01-2.25 2.25h-2.786l-.18.844a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844h1.313l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844H22z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F7931E"/><path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm6 5.813a2.25 2.25 0 012.25 2.25v3.374a2.25 2.25 0 01-2.25 2.25h-2.786l-.18.844a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844h1.313l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844H22z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F7931E" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0016 4zm5.5 5.328c1.14 0 2.063.924 2.063 2.063v3.093c0 1.14-.924 2.063-2.063 2.063h-2.554l-.164.773a.448.448 0 01-.417.344h-.516a.27.27 0 01-.27-.344l.164-.773H16.54l-.164.773a.448.448 0 01-.417.344h-.516a.27.27 0 01-.27-.344l.164-.773h-1.29l-1.132 5.328h-2.75l2.01-9.453h2.75l-.44 2.062h5.296a1.03 1.03 0 001.032-1.03v-1.032c0-.57-.462-1.031-1.032-1.031H8.438l1.718-2.063h6.715l.165-.773a.448.448 0 01.416-.344h.516a.27.27 0 01.27.344l-.163.773h1.203l.164-.773a.448.448 0 01.417-.344h.515a.27.27 0 01.27.344l-.163.773H21.5z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm6 5.813a2.25 2.25 0 012.25 2.25v3.374a2.25 2.25 0 01-2.25 2.25h-2.786l-.18.844a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844h1.313l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844H22z" fill="#FFF"/>';
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
  export let ariaLabel = 'pasc';
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
@prop export let ariaLabel = 'pasc';
-->
