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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.14-26.145l8.169 4.705 2.457-1.428L16.14 3v2.855zm8.332 14.417l2.481 1.428V9.436l-2.48 1.428v9.408zm-8.332 5.009v2.855l10.626-6.132-2.457-1.427-8.169 4.704zM5.164 22.004l10.625 6.132v-2.855l-8.144-4.704-2.481 1.427zM5 9.436V21.7l2.457-1.428v-9.408L5 9.436zm.164-.304l2.48 1.428 8.145-4.705V3L5.164 9.132zm10.824-3.008L7.797 10.83v9.455l8.191 4.728 8.168-4.728V10.83l-8.168-4.705zm6.577 8.45l-.351.608-2.34-1.31-2.996 1.684 2.995 1.685 2.34-1.31.352.608-1.966 1.1 1.966 1.1-.351.609-1.966-1.1v2.2h-.726V17.85l-2.995-1.685v3.37l2.317 1.287-.351.597-1.966-1.1v2.2H15.8v-2.2l-1.966 1.1-.374-.608 2.34-1.288v-3.358l-2.996 1.685v2.598h-.749v-2.2l-1.942 1.1-.375-.609 1.966-1.1-1.966-1.1.375-.608 2.317 1.31 3.019-1.685-3.02-1.685-2.316 1.31-.375-.608 1.966-1.1-1.966-1.1.375-.608 1.942 1.1v-2.212h.75v2.598l2.995 1.685v-3.358l-2.317-1.288.351-.608 1.966 1.1v-2.2h.726v2.2l1.966-1.1.35.608-2.316 1.288v3.37l2.995-1.685v-2.61h.726v2.2l1.966-1.1.35.609-1.965 1.1 1.966 1.111z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#D21E2B"/><path d="M16.14 5.855V3l10.626 6.132-2.457 1.428zm8.332 14.417v-9.408l2.481-1.428V21.7l-2.48-1.428zm-8.332 5.009l8.169-4.704 2.457 1.427-10.626 6.132v-2.855zM5.164 22.004l2.48-1.427 8.145 4.704v2.855L5.164 22.004zM5 9.436l2.457 1.428v9.408L5 21.7zm.164-.304L15.789 3v2.855L7.645 10.56zm10.824-3.008L7.797 10.83v9.455l8.191 4.728 8.168-4.728V10.83l-8.168-4.705zm6.577 8.45l-.351.608-2.34-1.31-2.996 1.684 2.995 1.685 2.34-1.31.352.608-1.966 1.1 1.966 1.1-.351.609-1.966-1.1v2.2h-.726V17.85l-2.995-1.685v3.37l2.317 1.287-.351.597-1.966-1.1v2.2H15.8v-2.2l-1.966 1.1-.374-.608 2.34-1.288v-3.358l-2.996 1.685v2.598h-.749v-2.2l-1.942 1.1-.375-.609 1.966-1.1-1.966-1.1.375-.608 2.317 1.31 3.019-1.685-3.02-1.685-2.316 1.31-.375-.608 1.966-1.1-1.966-1.1.375-.608 1.942 1.1v-2.212h.75v2.598l2.995 1.685v-3.358l-2.317-1.288.351-.608 1.966 1.1v-2.2h.726v2.2l1.966-1.1.35.608-2.316 1.288v3.37l2.995-1.685v-2.61h.726v2.2l1.966-1.1.35.609-1.965 1.1 1.966 1.111z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" offset="0%"/><stop offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#D21E2B" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16.128 6.596V4l9.66 5.574-2.235 1.298zm7.574 13.106V11.15l2.255-1.298V21l-2.255-1.298zm-7.574 4.553l7.425-4.276 2.234 1.298-9.66 5.574v-2.596zm-9.98-2.978l2.256-1.298 7.405 4.276v2.596l-9.66-5.574zM6 9.851l2.234 1.298v8.553L6 21zm.149-.277L15.809 4v2.596l-7.405 4.276zM15.99 6.84l-7.447 4.277v8.596l7.446 4.298 7.426-4.298v-8.596L15.989 6.84zm5.978 7.681l-.32.553-2.127-1.191-2.723 1.532 2.723 1.532 2.128-1.192.32.554-1.788 1 1.787 1-.32.553-1.786-1v2h-.66V17.5l-2.723-1.532v3.064l2.106 1.17-.319.543-1.787-1v2h-.66v-2l-1.787 1-.34-.554 2.127-1.17v-3.053L13.096 17.5v2.362h-.681v-2l-1.766 1-.34-.553 1.787-1-1.787-1 .34-.554 2.106 1.192 2.745-1.532-2.745-1.532-2.106 1.191-.34-.553 1.787-1-1.787-1 .34-.553 1.766 1v-2.01h.68v2.361l2.724 1.532v-3.053l-2.106-1.17.319-.554 1.787 1v-2h.66v2l1.787-1 .32.554-2.107 1.17v3.064l2.723-1.532v-2.373h.66v2l1.787-1 .32.554-1.788 1 1.787 1.01z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.14-26.145l8.169 4.705 2.457-1.428L16.14 3v2.855zm8.332 14.417l2.481 1.428V9.436l-2.48 1.428v9.408zm-8.332 5.009v2.855l10.626-6.132-2.457-1.427-8.169 4.704zM5.164 22.004l10.625 6.132v-2.855l-8.144-4.704-2.481 1.427zM5 9.436V21.7l2.457-1.428v-9.408L5 9.436zm.164-.304l2.48 1.428 8.145-4.705V3L5.164 9.132zm10.824-3.008L7.797 10.83v9.455l8.191 4.728 8.168-4.728V10.83l-8.168-4.705zm6.577 8.45l-.351.608-2.34-1.31-2.996 1.684 2.995 1.685 2.34-1.31.352.608-1.966 1.1 1.966 1.1-.351.609-1.966-1.1v2.2h-.726V17.85l-2.995-1.685v3.37l2.317 1.287-.351.597-1.966-1.1v2.2H15.8v-2.2l-1.966 1.1-.374-.608 2.34-1.288v-3.358l-2.996 1.685v2.598h-.749v-2.2l-1.942 1.1-.375-.609 1.966-1.1-1.966-1.1.375-.608 2.317 1.31 3.019-1.685-3.02-1.685-2.316 1.31-.375-.608 1.966-1.1-1.966-1.1.375-.608 1.942 1.1v-2.212h.75v2.598l2.995 1.685v-3.358l-2.317-1.288.351-.608 1.966 1.1v-2.2h.726v2.2l1.966-1.1.35.608-2.316 1.288v3.37l2.995-1.685v-2.61h.726v2.2l1.966-1.1.35.609-1.965 1.1 1.966 1.111z" fill="#FFF"/>';
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
  export let ariaLabel = 'xsg';
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
@prop export let ariaLabel = 'xsg';
-->
