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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.144-14.38l6.023 5.257h3.99l-3.484-3.042a5.632 5.632 0 003.38-6.29A5.602 5.602 0 0019.274 9h-4.419l3.014 2.629h1.406a2.987 2.987 0 012.978 2.995 2.987 2.987 0 01-2.978 2.995h-4.42zm2.157-3.36L10.993 9h-3.99l3.481 3.043a5.632 5.632 0 00-3.38 6.29 5.602 5.602 0 005.49 4.545h4.418L14 20.25h-1.407a2.987 2.987 0 01-2.978-2.995 2.987 2.987 0 012.978-2.995h4.42z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#2ED6A1"/><path fill="#FFF" fill-rule="nonzero" d="M14.856 17.62h4.42a2.987 2.987 0 002.978-2.996 2.987 2.987 0 00-2.978-2.995H17.87L14.856 9h4.42a5.602 5.602 0 015.488 4.545 5.632 5.632 0 01-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 00-2.978 2.994 2.987 2.987 0 002.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 01-5.488-4.545 5.632 5.632 0 013.379-6.29L7.002 9h3.991l6.02 5.26z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.6%" height="125.2%" x="-9.8%" y="-9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.856 16.62h4.42a2.987 2.987 0 002.978-2.996 2.987 2.987 0 00-2.978-2.995H17.87L14.856 8h4.42a5.602 5.602 0 015.488 4.545 5.632 5.632 0 01-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 00-2.978 2.994 2.987 2.987 0 002.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 01-5.488-4.545 5.632 5.632 0 013.379-6.29L7.002 8h3.991l6.02 5.26z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2ED6A1" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.144-14.38l6.023 5.257h3.99l-3.484-3.042a5.632 5.632 0 003.38-6.29A5.602 5.602 0 0019.274 9h-4.419l3.014 2.629h1.406a2.987 2.987 0 012.978 2.995 2.987 2.987 0 01-2.978 2.995h-4.42zm2.157-3.36L10.993 9h-3.99l3.481 3.043a5.632 5.632 0 00-3.38 6.29 5.602 5.602 0 005.49 4.545h4.418L14 20.25h-1.407a2.987 2.987 0 01-2.978-2.995 2.987 2.987 0 012.978-2.995h4.42z"/>';
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
  export let ariaLabel = 'dcr';
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
@prop export let ariaLabel = 'dcr';
-->
