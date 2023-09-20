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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.343 5.108l-.084.07-10.394 10.39a.607.607 0 00-.071.775l.07.085 10.39 10.393a.607.607 0 00.776.071l.084-.07 10.39-10.39a.608.608 0 00.004-.864l-10.39-10.39a.607.607 0 00-.775-.07zm.387 2.328l.04.027 8.454 8.453a.117.117 0 01.027.131l-.027.041-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 01-.027-.131l.027-.04 8.454-8.454a.12.12 0 01.132-.027z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#F6C054" cx="16" cy="16" r="16"/><path d="M26.822 15.568l-10.39-10.39a.607.607 0 00-.86 0L5.18 15.569a.607.607 0 000 .86l10.39 10.393a.607.607 0 00.859 0l10.39-10.389a.608.608 0 00.004-.864zm-2.284.52l-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 010-.172l8.454-8.453a.12.12 0 01.172 0l8.454 8.453a.12.12 0 010 .172c0-.004 0-.004 0 0z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F6C054" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M26.822 14.568l-10.39-10.39a.607.607 0 00-.86 0L5.18 14.569a.607.607 0 000 .86l10.39 10.393a.607.607 0 00.859 0l10.39-10.389a.608.608 0 00.004-.864zm-2.284.52l-7.616 7.616V15h-1.848v7.704l-7.616-7.616a.12.12 0 010-.172l8.454-8.453a.12.12 0 01.172 0l8.454 8.453a.12.12 0 010 .172c0-.004 0-.004 0 0z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.343 5.108l-.084.07-10.394 10.39a.607.607 0 00-.071.775l.07.085 10.39 10.393a.607.607 0 00.776.071l.084-.07 10.39-10.39a.608.608 0 00.004-.864l-10.39-10.39a.607.607 0 00-.775-.07zm.387 2.328l.04.027 8.454 8.453a.117.117 0 01.027.131l-.027.041-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 01-.027-.131l.027-.04 8.454-8.454a.12.12 0 01.132-.027z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'emb';
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
@prop export let ariaLabel = 'emb';
-->
