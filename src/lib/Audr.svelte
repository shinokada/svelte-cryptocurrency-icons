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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.146-18.736l3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0010 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 00-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 001.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 00-.25-.596zm-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856v4.378z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#34318A"/><path d="M10.854 13.264l3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0010 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 00-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 001.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 00-.25-.596zm-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856v4.378z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#34318A" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M10.783 12.492l3.309 1.76 1.76-.88-4.206-2.28V7.08l8.087 4.198 1.76-.88-10.358-5.43A.774.774 0 0010 5.654v5.562c.003.538.305 1.03.783 1.276zm12.61-.933a.774.774 0 00-.88-.14l-11.73 6.089A1.443 1.443 0 0010 18.793v5.553a.774.774 0 001.135.686L22.84 18.96a1.45 1.45 0 00.783-1.311v-5.544a.766.766 0 00-.228-.546zm-1.407 5.993l-10.34 5.368v-4.013l10.34-5.368v4.013z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.146-18.736l3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0010 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 00-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 001.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 00-.25-.596zm-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856v4.378z" fill="#FFF"/>';
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
  export let ariaLabel = 'audr';
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
@prop export let ariaLabel = 'audr';
-->
