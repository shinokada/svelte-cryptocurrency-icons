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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.05 11.4c-2.526 0-4.547 2.05-4.547 4.5 0 2.05 1.364 3.75 3.284 4.3V23l-5.609-2.8c-.151-.1-.252-.25-.252-.4v-1.55H6.5v1.55c0 1.1.606 2.05 1.566 2.55l6.57 3.35c.404.2.859.3 1.313.3.455 0 .91-.1 1.314-.3l6.62-3.35c.96-.5 1.566-1.5 1.566-2.55v-1.55h-2.425v1.55c0 .2-.101.35-.253.4L17.314 23v-2.8a4.476 4.476 0 003.284-4.3c0-2.5-2.071-4.5-4.547-4.5zM16 13.85c1.112 0 2.072.9 2.072 2.05s-.96 2.05-2.072 2.05-2.072-.9-2.072-2.05.91-2.05 2.072-2.05zm1.314-7.55c-.86-.4-1.82-.4-2.628 0l-6.62 3.35c-.96.5-1.566 1.5-1.566 2.55v1.55h2.426V12.2c0-.2.1-.35.252-.4l6.62-3.35c.151-.05.303-.05.404 0l6.62 3.35c.151.1.252.25.252.4v1.55H25.5V12.2c0-1.1-.606-2.05-1.566-2.55z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#2E6BF6" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M17.314 6.3l6.62 3.35c.96.5 1.566 1.45 1.566 2.55v1.55h-2.426V12.2c0-.15-.1-.3-.252-.4l-6.62-3.35c-.1-.05-.253-.05-.404 0l-6.62 3.35c-.151.05-.252.2-.252.4v1.55H6.5V12.2c0-1.05.606-2.05 1.566-2.55l6.62-3.35c.809-.4 1.769-.4 2.628 0zm.758 9.6c0-1.15-.96-2.05-2.072-2.05-1.162 0-2.072.9-2.072 2.05s.96 2.05 2.072 2.05 2.072-.9 2.072-2.05zm4.7 4.3c.15-.05.252-.2.252-.4v-1.55h2.425v1.55c0 1.05-.606 2.05-1.566 2.55l-6.62 3.35c-.404.2-.859.3-1.314.3-.454 0-.91-.1-1.313-.3l-6.57-3.35c-.96-.5-1.566-1.45-1.566-2.55v-1.55h2.426v1.55c0 .15.1.3.252.4l5.61 2.8v-2.8c-1.921-.55-3.285-2.25-3.285-4.3 0-2.45 2.02-4.5 4.548-4.5 2.476 0 4.547 2 4.547 4.5 0 2.05-1.414 3.8-3.284 4.3V23l5.457-2.8z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2E6BF6" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M17.314 5.3l6.62 3.35c.96.5 1.566 1.45 1.566 2.55v1.55h-2.426V11.2c0-.15-.1-.3-.252-.4l-6.62-3.35c-.1-.05-.253-.05-.404 0l-6.62 3.35c-.151.05-.252.2-.252.4v1.55H6.5V11.2c0-1.05.606-2.05 1.566-2.55l6.62-3.35c.809-.4 1.769-.4 2.628 0zm.758 9.6c0-1.15-.96-2.05-2.072-2.05-1.162 0-2.072.9-2.072 2.05s.96 2.05 2.072 2.05 2.072-.9 2.072-2.05zm4.7 4.3c.15-.05.252-.2.252-.4v-1.55h2.425v1.55c0 1.05-.606 2.05-1.566 2.55l-6.62 3.35c-.404.2-.859.3-1.314.3-.454 0-.91-.1-1.313-.3l-6.57-3.35c-.96-.5-1.566-1.45-1.566-2.55v-1.55h2.426v1.55c0 .15.1.3.252.4l5.61 2.8v-2.8c-1.921-.55-3.285-2.25-3.285-4.3 0-2.45 2.02-4.5 4.548-4.5 2.476 0 4.547 2 4.547 4.5 0 2.05-1.414 3.8-3.284 4.3V22l5.457-2.8z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.05 11.4c-2.526 0-4.547 2.05-4.547 4.5 0 2.05 1.364 3.75 3.284 4.3V23l-5.609-2.8c-.151-.1-.252-.25-.252-.4v-1.55H6.5v1.55c0 1.1.606 2.05 1.566 2.55l6.57 3.35c.404.2.859.3 1.313.3.455 0 .91-.1 1.314-.3l6.62-3.35c.96-.5 1.566-1.5 1.566-2.55v-1.55h-2.425v1.55c0 .2-.101.35-.253.4L17.314 23v-2.8a4.476 4.476 0 003.284-4.3c0-2.5-2.071-4.5-4.547-4.5zM16 13.85c1.112 0 2.072.9 2.072 2.05s-.96 2.05-2.072 2.05-2.072-.9-2.072-2.05.91-2.05 2.072-2.05zm1.314-7.55c-.86-.4-1.82-.4-2.628 0l-6.62 3.35c-.96.5-1.566 1.5-1.566 2.55v1.55h2.426V12.2c0-.2.1-.35.252-.4l6.62-3.35c.151-.05.303-.05.404 0l6.62 3.35c.151.1.252.25.252.4v1.55H25.5V12.2c0-1.1-.606-2.05-1.566-2.55z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ankr';
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
@prop export let ariaLabel = 'ankr';
-->
