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
    '<path d="M19.544 19.969l-.612-1.301H17.55l.626 1.33h2.962l2.141-2.91-.779-1.07.779-1.07-2.141-2.91h-1.615l2.952 3.98zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.91-13.332l.594-1.296 1.121-2.354 1.121 2.315h1.415L15.838 12l-3.753 7.999h1.382zM24.07 16L27 12.003h-1.58l-2.141 2.91zm0 0l-.79 1.088 2.14 2.91H27zm-12.648-2.842a3.511 3.511 0 00-2.665-1.154 3.416 3.416 0 00-2.173.736l.92.98a2.19 2.19 0 011.25-.35 2.333 2.333 0 011.78.77c.462.508.722 1.188.723 1.896a2.652 2.652 0 01-.724 1.895 2.396 2.396 0 01-1.78.81 2.396 2.396 0 01-1.78-.81 2.822 2.822 0 01-.36-3.265l-.921-.98a3.965 3.965 0 00-.691 2.315 4 4 0 001.085 2.842A3.575 3.575 0 008.754 20c1.053 0 1.945-.347 2.668-1.156a4.124 4.124 0 001.085-2.842 3.965 3.965 0 00-1.085-2.843z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#164b79" r="16"/><path d="M14.09 18.668l-.623 1.33h-1.382L15.838 12l2.503 5.333h-1.415l-1.12-2.315-1.122 2.354zm5.454 1.3l2.93-3.95-2.951-3.98h1.615l2.141 2.91-.779 1.07.779 1.07-2.14 2.91h-2.963l-.626-1.33h1.382zm4.526-3.967l-.791-1.087 2.141-2.91H27zm0 0L27 19.999h-1.58l-2.14-2.91zm-12.648-2.842a3.965 3.965 0 011.085 2.843 4.124 4.124 0 01-1.085 2.842C10.7 19.653 9.807 20 8.754 20a3.575 3.575 0 01-2.668-1.156A4 4 0 015 16.002a3.965 3.965 0 01.691-2.315l.92.98a2.822 2.822 0 00.362 3.265 2.396 2.396 0 001.78.81c.672 0 1.314-.293 1.78-.81a2.65 2.65 0 00.723-1.895 2.82 2.82 0 00-.724-1.896 2.333 2.333 0 00-1.78-.77 2.19 2.19 0 00-1.249.35l-.92-.98a3.416 3.416 0 012.173-.736 3.51 3.51 0 012.665 1.154z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="143.8%" x="-8%" y="-15.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.09 17.668l-.623 1.33h-1.382L15.838 11l2.503 5.333h-1.415l-1.12-2.315-1.122 2.354-.594 1.296zm5.454 1.3l2.93-3.95-2.951-3.98h1.615l2.141 2.91-.779 1.07.779 1.07-2.14 2.91h-2.963l-.626-1.33h1.382l.612 1.3zm4.526-3.967l-.791-1.087 2.141-2.91H27L24.07 15zm0 0L27 18.999h-1.58l-2.14-2.91.79-1.088zm-12.648-2.842a3.965 3.965 0 011.085 2.843 4.124 4.124 0 01-1.085 2.842C10.7 18.653 9.807 19 8.754 19a3.575 3.575 0 01-2.668-1.156A4 4 0 015 15.002a3.965 3.965 0 01.691-2.315l.92.98a2.822 2.822 0 00.362 3.265 2.396 2.396 0 001.78.81c.672 0 1.314-.293 1.78-.81a2.65 2.65 0 00.723-1.895 2.82 2.82 0 00-.724-1.896 2.333 2.333 0 00-1.78-.77 2.19 2.19 0 00-1.249.35l-.92-.98a3.416 3.416 0 012.173-.736 3.51 3.51 0 012.665 1.154z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#164B79" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M19.544 19.969l-.612-1.301H17.55l.626 1.33h2.962l2.141-2.91-.779-1.07.779-1.07-2.141-2.91h-1.615l2.952 3.98zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.91-13.332l.594-1.296 1.121-2.354 1.121 2.315h1.415L15.838 12l-3.753 7.999h1.382zM24.07 16L27 12.003h-1.58l-2.141 2.91zm0 0l-.79 1.088 2.14 2.91H27zm-12.648-2.842a3.511 3.511 0 00-2.665-1.154 3.416 3.416 0 00-2.173.736l.92.98a2.19 2.19 0 011.25-.35 2.333 2.333 0 011.78.77c.462.508.722 1.188.723 1.896a2.652 2.652 0 01-.724 1.895 2.396 2.396 0 01-1.78.81 2.396 2.396 0 01-1.78-.81 2.822 2.822 0 01-.36-3.265l-.921-.98a3.965 3.965 0 00-.691 2.315 4 4 0 001.085 2.842A3.575 3.575 0 008.754 20c1.053 0 1.945-.347 2.668-1.156a4.124 4.124 0 001.085-2.842 3.965 3.965 0 00-1.085-2.843z" fill="#fff"/>';
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
  export let ariaLabel = 'oax';
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
@prop export let ariaLabel = 'oax';
-->
