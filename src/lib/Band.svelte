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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.086 5.25L9.25 9.1v13.671l6.836 3.929 6.757-4.007v-6.757l-6.522-3.929-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V10.2l4.715-2.593 2.2 1.179v3.693l2.2 1.257V7.45l-4.4-2.2zm-1.965 8.329v5.657l4.872-2.75-1.65-1.022-1.493.786V14.6l-1.729-1.021z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#516AFF" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M18.286 12.479l2.2 1.257V7.45l-4.4-2.2L9.25 9.1v13.671l6.836 3.929 6.757-4.007v-6.757l-6.522-3.929-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V10.2l4.715-2.593 2.2 1.179v3.693z"/><path d="M15.85 16.25l1.493-.786 1.65 1.022-4.872 2.75v-5.657L15.85 14.6"/></g></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-26.8%" y="-17%" width="153.6%" height="134.1%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#516AFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(9.25 4.25)" fill="#FFF" fill-rule="nonzero"><path d="M9.036 7.229l2.2 1.257V2.2L6.836 0 0 3.85v13.671l6.836 3.929 6.757-4.007v-6.757L7.07 6.757l-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V4.95l4.715-2.593 2.2 1.179v3.693z"/><path d="M6.6 11l1.493-.786 1.65 1.022-4.872 2.75V8.329L6.6 9.35"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.086 5.25L9.25 9.1v13.671l6.836 3.929 6.757-4.007v-6.757l-6.522-3.929-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V10.2l4.715-2.593 2.2 1.179v3.693l2.2 1.257V7.45l-4.4-2.2zm-1.965 8.329v5.657l4.872-2.75-1.65-1.022-1.493.786V14.6l-1.729-1.021z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'band';
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
@prop export let ariaLabel = 'band';
-->
