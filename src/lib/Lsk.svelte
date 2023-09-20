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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.751-7.042l2.467-2.786c.042-.042.014-.111-.055-.111h-2.717a.105.105 0 01-.056-.028l-2.301-2.59c-.014-.029-.028-.057-.014-.084l3.854-6.645c.014-.028.014-.056 0-.07l-1.594-2.758c-.028-.041-.097-.041-.125 0L8.01 19.721a.09.09 0 000 .083l4.575 5.168c.014.014.028.028.056.028h1.552c.014-.014.042-.028.056-.042zm1.69-18.916L14.333 8.8c-.014.028-.014.056 0 .07l1.663 2.869 4.409 7.606c.014.027.014.055-.014.083l-2.329 2.619-2.481 2.814c-.042.041-.014.111.055.111h3.715a.105.105 0 00.056-.028l4.574-5.168c.014-.027.028-.055.014-.083L16.051 6.042c-.014-.056-.083-.056-.111 0z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#0d4ea0" r="16"/><path d="M14.249 24.958c-.014.014-.042.028-.056.042h-1.552c-.028 0-.042-.014-.056-.028L8.01 19.804a.09.09 0 010-.083l5.698-9.835c.028-.041.097-.041.125 0l1.594 2.758c.014.014.014.042 0 .07l-3.854 6.645c-.014.027 0 .055.014.083l2.301 2.591a.105.105 0 00.056.028h2.717c.07 0 .097.07.055.111zm1.69-18.916c.029-.056.098-.056.112 0l7.943 13.65c.014.029 0 .057-.014.084l-4.574 5.168a.105.105 0 01-.056.028h-3.715c-.07 0-.097-.07-.055-.111l2.481-2.814 2.329-2.619c.028-.028.028-.056.014-.083l-4.409-7.606-1.663-2.87c-.014-.013-.014-.041 0-.07z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="118.4%" x="-10.9%" y="-6.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.249 23.958c-.014.014-.042.028-.056.042h-1.552c-.028 0-.042-.014-.056-.028L8.01 18.804a.09.09 0 010-.083l5.698-9.835c.028-.041.097-.041.125 0l1.594 2.758c.014.014.014.042 0 .07l-3.854 6.645c-.014.027 0 .055.014.083l2.301 2.591a.105.105 0 00.056.028h2.717c.07 0 .097.07.055.111l-2.467 2.786zm1.69-18.916c.029-.056.098-.056.112 0l7.943 13.65c.014.029 0 .057-.014.084l-4.574 5.168a.105.105 0 01-.056.028h-3.715c-.07 0-.097-.07-.055-.111l2.481-2.814 2.329-2.619c.028-.028.028-.056.014-.083l-4.409-7.606-1.663-2.87c-.014-.013-.014-.041 0-.07l1.608-2.757z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0D4EA0" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.751-7.042l2.467-2.786c.042-.042.014-.111-.055-.111h-2.717a.105.105 0 01-.056-.028l-2.301-2.59c-.014-.029-.028-.057-.014-.084l3.854-6.645c.014-.028.014-.056 0-.07l-1.594-2.758c-.028-.041-.097-.041-.125 0L8.01 19.721a.09.09 0 000 .083l4.575 5.168c.014.014.028.028.056.028h1.552c.014-.014.042-.028.056-.042zm1.69-18.916L14.333 8.8c-.014.028-.014.056 0 .07l1.663 2.869 4.409 7.606c.014.027.014.055-.014.083l-2.329 2.619-2.481 2.814c-.042.041-.014.111.055.111h3.715a.105.105 0 00.056-.028l4.574-5.168c.014-.027.028-.055.014-.083L16.051 6.042c-.014-.056-.083-.056-.111 0z" fill="#fff"/>';
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
  export let ariaLabel = 'lsk';
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
@prop export let ariaLabel = 'lsk';
-->
