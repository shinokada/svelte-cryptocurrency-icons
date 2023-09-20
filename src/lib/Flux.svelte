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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-2.255 23.42l-.048.03-1.915 1.108L16 27l1.963-1.138-4.145-2.399-.073-.042zm6.477-11.08l-5.277 3.057v6.111l5.27 3.052.007.004 5.278-3.056v-6.11l-5.278-3.058zM9.536 16.221L6.5 17.98v3.514l3.036 1.758 3.035-1.758V17.98l-3.035-1.76zM16 5l-9.5 5.5v4.87l1.91-1.105 1.125-.652 1.126.652 2.031 1.176v-1.348l1.126-.652 5.278-3.055 1.126-.652 1.126.652 4.152 2.403v-2.29L16 5z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#2B61D1" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M17.963 25.862L16 27l-4.218-2.442 1.915-1.109.048-.028.073.042zM25.5 10.5v2.289l-4.152-2.403-1.126-.652-1.126.652-5.278 3.055-1.126.652v1.348l-2.03-1.176-1.127-.652-1.126.652L6.5 15.371V10.5L16 5z"/><path d="M25.5 15.397v6.111l-5.278 3.056-.007-.004-5.27-3.052v-6.11l5.277-3.058zm-12.929 2.582v3.514L9.536 23.25 6.5 21.493v-3.514l3.036-1.758z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2B61D1" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M17.963 24.862L16 26l-4.218-2.442 1.915-1.109.048-.028.073.042zM25.5 9.5v2.289l-4.152-2.403-1.126-.652-1.126.652-5.278 3.055-1.126.652v1.348l-2.03-1.176-1.127-.652-1.126.652L6.5 14.371V9.5L16 4z"/><path d="M25.5 14.397v6.111l-5.278 3.056-.007-.004-5.27-3.052v-6.11l5.277-3.058zm-12.929 2.582v3.514L9.536 22.25 6.5 20.493v-3.514l3.036-1.758z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-2.255 23.42l-.048.03-1.915 1.108L16 27l1.963-1.138-4.145-2.399-.073-.042zm6.477-11.08l-5.277 3.057v6.111l5.27 3.052.007.004 5.278-3.056v-6.11l-5.278-3.058zM9.536 16.221L6.5 17.98v3.514l3.036 1.758 3.035-1.758V17.98l-3.035-1.76zM16 5l-9.5 5.5v4.87l1.91-1.105 1.125-.652 1.126.652 2.031 1.176v-1.348l1.126-.652 5.278-3.055 1.126-.652 1.126.652 4.152 2.403v-2.29L16 5z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'flux';
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
@prop export let ariaLabel = 'flux';
-->
