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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-6.5-5l5.649-4.188-2.031-12.6L9.5 27zm3.688-16.885l2.054 12.649 3.443.06-5.497-12.71zm.082-.096l5.532 12.805 1.669-11.782-7.201-1.023zm5.66 12.624l2.685-10.145-1.062-1.348-1.623 11.493zm1.517-11.71l-.7-3.08-6.326 2.081 7.026 1zm-7.06-1.107l6.36-2.082-2.054-.903-4.307 2.985zm-.106-.036l4.342-2.997-3.513 1.408-.829 1.589zm.83-1.66l3.29-1.337-2.894.096-.397 1.24zm.373-1.337l2.94-.096-2.007-.903-.933 1zm.992-1.059l3.21 1.432-1.81-2.118-1.4.686zm1.599-.602l1.715 2.046.374-1.131-2.09-.915zm1.785 2.082l.852.434-.467-1.589-.385 1.155zM16.923 5l2.232.918a.048.048 0 00.054-.076L18.452 5h-1.53zm2.416.963l.467 1.733 2.642-.725a.072.072 0 000-.14l-3.11-.868z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#384182"/><path fill="#FFF" d="M9.5 27l3.618-16.789 2.03 12.6L9.5 27zm3.688-16.885l5.497 12.709-3.443-.06-2.054-12.65zm.082-.096l7.2 1.023-1.668 11.782-5.532-12.805zm5.66 12.624l1.623-11.493 1.062 1.348-2.685 10.145zm1.517-11.71l-7.026-.999 6.326-2.082.7 3.081zm-7.06-1.107l4.306-2.985 2.054.903-6.36 2.082zm-.106-.036l.83-1.589 3.512-1.408-4.342 2.997zm.83-1.66l.396-1.24 2.894-.097-3.29 1.336zm.373-1.337l.933-.999 2.008.903-2.941.096zm.992-1.059l1.4-.686 1.81 2.118-3.21-1.432zm1.599-.602l2.089.915-.374 1.131-1.715-2.046zm1.785 2.082l.385-1.155.467 1.589-.852-.434zM16.923 5h1.529l.757.842a.048.048 0 01-.054.076L16.923 5zm2.416.963l3.11.868a.072.072 0 010 .14l-2.643.725-.467-1.733z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="126.9%" height="115.9%" x="-13.5%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M9.5 26l3.618-16.789 2.03 12.6L9.5 26zm3.688-16.885l5.497 12.709-3.443-.06-2.054-12.65zm.082-.096l7.2 1.023-1.668 11.782L13.27 9.019zm5.66 12.624l1.623-11.493 1.062 1.348-2.685 10.145zm1.517-11.71l-7.026-.999 6.326-2.082.7 3.081zm-7.06-1.107l4.306-2.985 2.054.903-6.36 2.082zm-.106-.036l.83-1.589 3.512-1.408-4.342 2.997zm.83-1.66l.396-1.24 2.894-.097-3.29 1.336zm.373-1.337l.933-.999 2.008.903-2.941.096zm.992-1.059l1.4-.686 1.81 2.118-3.21-1.432zm1.599-.602l2.089.915-.374 1.131-1.715-2.046zm1.785 2.082l.385-1.155.467 1.589-.852-.434zM16.923 4h1.529l.757.842a.048.048 0 01-.054.076L16.923 4zm2.416.963l3.11.868a.072.072 0 010 .14l-2.643.725-.467-1.733z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#384182" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-6.5-5l5.649-4.188-2.031-12.6L9.5 27zm3.688-16.885l2.054 12.649 3.443.06-5.497-12.71zm.082-.096l5.532 12.805 1.669-11.782-7.201-1.023zm5.66 12.624l2.685-10.145-1.062-1.348-1.623 11.493zm1.517-11.71l-.7-3.08-6.326 2.081 7.026 1zm-7.06-1.107l6.36-2.082-2.054-.903-4.307 2.985zm-.106-.036l4.342-2.997-3.513 1.408-.829 1.589zm.83-1.66l3.29-1.337-2.894.096-.397 1.24zm.373-1.337l2.94-.096-2.007-.903-.933 1zm.992-1.059l3.21 1.432-1.81-2.118-1.4.686zm1.599-.602l1.715 2.046.374-1.131-2.09-.915zm1.785 2.082l.852.434-.467-1.589-.385 1.155zM16.923 5l2.232.918a.048.048 0 00.054-.076L18.452 5h-1.53zm2.416.963l.467 1.733 2.642-.725a.072.072 0 000-.14l-3.11-.868z"/>';
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
  export let ariaLabel = 'rvn';
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
@prop export let ariaLabel = 'rvn';
-->
