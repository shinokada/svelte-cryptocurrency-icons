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
    '<path d="M3.993 5.425l4.854 17.382.035.15h4.186l1.87-6.932 1.87 6.932h4.185l.036-.15 1.96-7.078 3.435 12.41A15.937 15.937 0 0116 32C7.163 32 0 24.837 0 16A15.94 15.94 0 013.993 5.425zm2.65-2.405A15.928 15.928 0 0116 0c8.837 0 16 7.163 16 16a15.93 15.93 0 01-3.025 9.364L24.901 10.65l-.035-.15h-3.75l-2.336 8.438-1.973-8.438h-3.739l-1.973 8.438L6.642 3.02z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffe600" r="16"/><path d="M3.993 5.425a16.096 16.096 0 012.65-2.405l4.452 15.918 1.973-8.438h3.74l1.972 8.438 2.337-8.438h3.749l.035.15 4.074 14.714a16.092 16.092 0 01-2.55 2.775l-3.437-12.41-1.96 7.078-.035.15h-4.186l-1.869-6.932-1.87 6.932H8.882l-.035-.15z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="114.4%" height="115.2%" x="-7.2%" y="-5.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M4.328 5.578a15.09 15.09 0 012.614-2.535l4.16 14.875 1.974-8.438h3.739l1.972 8.438 2.337-8.438h3.75l.034.15 3.727 13.458a15.075 15.075 0 01-2.498 2.968l-3.141-11.348-1.96 7.08-.035.149h-4.186l-1.87-6.932-1.87 6.932H8.89l-.034-.15L4.328 5.578z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFE600" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M3.993 5.425l4.854 17.382.035.15h4.186l1.87-6.932 1.87 6.932h4.185l.036-.15 1.96-7.078 3.435 12.41A15.937 15.937 0 0116 32C7.163 32 0 24.837 0 16A15.94 15.94 0 013.993 5.425zm2.65-2.405A15.928 15.928 0 0116 0c8.837 0 16 7.163 16 16a15.93 15.93 0 01-3.025 9.364L24.901 10.65l-.035-.15h-3.75l-2.336 8.438-1.973-8.438h-3.739l-1.973 8.438L6.642 3.02z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'wpr';
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
@prop export let ariaLabel = 'wpr';
-->
