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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838zm-2.925-12.872l-.132.082L19 20.48v-9.658l-3.05-1.808-2.925 1.734zm-.198 10.282l3.124 1.858 2.852-1.693-5.976-9.444v9.28zM10.1 12.482v6.937l2.178 1.29v-9.517l-2.178 1.29zm9.452 8.269l2.252-1.332v-6.937l-2.252-1.331v9.6z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#B3BA00"/><g fill="#FFF"><path d="M13.13 10.664l-.13.079L19 20v-9.265L16.004 9zM13 21.165L16.136 23 19 21.328 13 12zm-3-8.809v7.288L12 21V11zM20 21l2-1.387v-7.226L20 11z"/><path d="M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#B3BA00" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M13.273 10.186l-.12.075 5.597 8.845v-8.853l-2.795-1.657zm-.181 9.425l2.863 1.703 2.614-1.552-5.477-8.657zm-2.502-7.836v6.36l1.997 1.182v-8.725zm8.665 7.58l2.064-1.22v-6.36l-2.064-1.22z"/><path d="M16 4C9.927 4 5 8.927 5 15s4.927 11 11 11 11-4.927 11-11S22.073 4 16 4zm-.045 17.984l-5.937-3.518v-7.03l5.937-3.51 5.937 3.51v7.03l-5.937 3.518z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838zm-2.925-12.872l-.132.082L19 20.48v-9.658l-3.05-1.808-2.925 1.734zm-.198 10.282l3.124 1.858 2.852-1.693-5.976-9.444v9.28zM10.1 12.482v6.937l2.178 1.29v-9.517l-2.178 1.29zm9.452 8.269l2.252-1.332v-6.937l-2.252-1.331v9.6z" fill="#FFF"/>';
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
  export let ariaLabel = 'neu';
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
@prop export let ariaLabel = 'neu';
-->
