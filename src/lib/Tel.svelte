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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.08-20.522L19.026 6.56c-.633-.512-1.78-.71-2.553-.438l-7.42 2.606c-.772.27-1.522 1.134-1.664 1.918l-1.36 7.524c-.143.784.257 1.84.89 2.353l6.058 4.917c.632.513 1.78.71 2.552.438l7.419-2.605c.772-.27 1.522-1.134 1.664-1.918l1.36-7.524c.14-.779-.26-1.84-.892-2.353zm-6.311 3.378l-2.83-.004-.526 2.662c-.165.825-.21 1.29.64 1.29h1.914l-.4 1.69h-2.288c-1.353 0-2.233-1.263-1.881-3.042.14-.699.56-2.593.56-2.593h-1.239l.257-1.319a5.759 5.759 0 002.748-2.225h.915l-.4 2.016 2.832-.004z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#14c8ff" r="16"/><path d="M25.08 11.478c.633.513 1.032 1.574.892 2.353l-1.36 7.524c-.142.784-.892 1.647-1.664 1.918l-7.419 2.605c-.772.271-1.92.075-2.552-.438l-6.058-4.917c-.633-.513-1.033-1.569-.89-2.353l1.36-7.524C7.53 9.862 8.28 9 9.053 8.728l7.42-2.606c.773-.272 1.92-.074 2.553.438zm-6.311 3.378l.302-1.53-2.832.005.4-2.016h-.915a5.759 5.759 0 01-2.748 2.225l-.257 1.319h1.238s-.419 1.894-.56 2.593c-.35 1.78.53 3.042 1.882 3.042h2.288l.4-1.69h-1.914c-.85 0-.805-.465-.64-1.29l.527-2.662z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M25.08 10.478c.633.513 1.032 1.574.892 2.353l-1.36 7.524c-.142.784-.892 1.647-1.664 1.918l-7.419 2.605c-.772.271-1.92.075-2.552-.438l-6.058-4.917c-.633-.513-1.033-1.569-.89-2.353l1.36-7.524C7.53 8.862 8.28 8 9.053 7.728l7.42-2.606c.773-.272 1.92-.074 2.553.438l6.054 4.918zm-6.311 3.378l.302-1.53-2.832.005.4-2.016h-.915a5.759 5.759 0 01-2.748 2.225l-.257 1.319h1.238s-.419 1.894-.56 2.593c-.35 1.78.53 3.042 1.882 3.042h2.288l.4-1.69h-1.914c-.85 0-.805-.465-.64-1.29l.527-2.662 2.829.004z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#14C8FF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.08-20.522L19.026 6.56c-.633-.512-1.78-.71-2.553-.438l-7.42 2.606c-.772.27-1.522 1.134-1.664 1.918l-1.36 7.524c-.143.784.257 1.84.89 2.353l6.058 4.917c.632.513 1.78.71 2.552.438l7.419-2.605c.772-.27 1.522-1.134 1.664-1.918l1.36-7.524c.14-.779-.26-1.84-.892-2.353zm-6.311 3.378l-2.83-.004-.526 2.662c-.165.825-.21 1.29.64 1.29h1.914l-.4 1.69h-2.288c-1.353 0-2.233-1.263-1.881-3.042.14-.699.56-2.593.56-2.593h-1.239l.257-1.319a5.759 5.759 0 002.748-2.225h.915l-.4 2.016 2.832-.004z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'tel';
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
@prop export let ariaLabel = 'tel';
-->
