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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.21-28C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26v-3.7h2.6v3.7h1.88v-4.16a1 1 0 00-1.15-1.17H9.79c-.74 0-1.11.39-1.11 1.17v4.16h1.9zm2.6 1.22l.01-.02h-4.5v5a1 1 0 001.1 1.18h4.14a1 1 0 001.15-1.16v-5h-1.9zm7.8.07H18.4v-4.9h2.5v2.54h2v-3a1 1 0 00-1.2-1.17h-4.1a1 1 0 00-1.17 1.17v10.36a1 1 0 001.14 1.16h4.17a1 1 0 001.16-1.16v-5h-1.92z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#98C23A"/><path d="M15.79 4C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26h-1.9v-4.16c0-.78.37-1.17 1.11-1.17h4.12a1 1 0 011.15 1.17v4.16h-1.88v-3.7h-2.6v3.7zm2.6 1.22h1.9v5a1 1 0 01-1.15 1.16H9.79a1 1 0 01-1.1-1.18v-5h4.5l-.01.02zm7.8.07h1.92v5a1 1 0 01-1.16 1.16h-4.17a1 1 0 01-1.14-1.16V10.67A1 1 0 0117.6 9.5h4.1a1 1 0 011.2 1.17v3h-2v-2.54h-2.5v4.9h2.58z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#98C23A" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M15.807 4C9.84 4 5 8.839 5 14.807c0 5.97 4.839 10.808 10.807 10.808 5.97 0 10.808-4.839 10.808-10.807C26.605 8.842 21.772 4.01 15.808 4zm0 20.167a9.35 9.35 0 119.35-9.36 9.36 9.36 0 01-9.35 9.35v.01zm-4.775-10.322H9.29v-3.813c0-.715.34-1.073 1.018-1.073h3.776a.917.917 0 011.054 1.073v3.813h-1.723v-3.392h-2.383v3.392zm2.383 1.118h1.742v4.584a.917.917 0 01-1.055 1.063h-3.795A.917.917 0 019.3 19.528v-4.583h4.125l-.009.018zm7.15.065h1.76v4.583a.917.917 0 01-1.063 1.063h-3.823a.917.917 0 01-1.045-1.063v-9.497a.917.917 0 011.073-1.072h3.758a.917.917 0 011.1 1.072v2.75h-1.833v-2.328H18.2v4.491h2.365z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.21-28C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26v-3.7h2.6v3.7h1.88v-4.16a1 1 0 00-1.15-1.17H9.79c-.74 0-1.11.39-1.11 1.17v4.16h1.9zm2.6 1.22l.01-.02h-4.5v5a1 1 0 001.1 1.18h4.14a1 1 0 001.15-1.16v-5h-1.9zm7.8.07H18.4v-4.9h2.5v2.54h2v-3a1 1 0 00-1.2-1.17h-4.1a1 1 0 00-1.17 1.17v10.36a1 1 0 001.14 1.16h4.17a1 1 0 001.16-1.16v-5h-1.92z" fill="#FFF"/>';
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
  export let ariaLabel = 'ilk';
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
@prop export let ariaLabel = 'ilk';
-->
