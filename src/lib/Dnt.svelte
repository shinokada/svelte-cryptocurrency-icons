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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.075-12.9c-.827-.046-.367-1.362-.735-2.863-.437-1.662.207-2.817 1.057-2.77.4.062.778.22 1.103.461a6.819 6.819 0 00-.781-2.055c-.759-1.27-2.413-3.117-4.481-4.571v13.922a1.398 1.398 0 11-2.666.6 5.435 5.435 0 01-6.978-1.05 5.498 5.498 0 01-.104-7.09 5.435 5.435 0 016.944-1.257V7.025c-.007-.421.18-.822.506-1.085-2.689-1.247-5.699-1.501-8.273.785-4.32 3.855-6.48 9.235-4.32 14.591.046.116.092.231.138.323.063-.13.149-.246.253-.346 1.126-1.154 2.367 1.2 5.01 2.563 1.677.854 2.642 1.985 3.01 3.047 2.458.3 4.986-.092 7.008-1.27 2.643-1.523 4.183-4.294 4.734-7.11a2.338 2.338 0 01-1.425.577zm-10.363.092c1.333.762 2.941.462 3.24-1.247.16-.992.069-2.54-.804-3.024-2.896-1.662-5.332 2.609-2.436 4.271zm1.356-11.036c.62-.023 1.194.716 1.217 1.062.023.347-.528.208-1.126.416-.666.23-1.149.023-1.171-.323-.023-.347.436-1.132 1.08-1.155z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#2c398f" r="16"/><path d="M25.075 19.1a2.338 2.338 0 001.425-.577c-.551 2.816-2.091 5.587-4.734 7.11-2.022 1.178-4.55 1.57-7.008 1.27-.368-1.062-1.333-2.193-3.01-3.047-2.643-1.362-3.884-3.717-5.01-2.563-.104.1-.19.217-.253.346a4.353 4.353 0 01-.138-.323c-2.16-5.356 0-10.736 4.32-14.591 2.574-2.286 5.584-2.032 8.273-.785a1.362 1.362 0 00-.506 1.085v5.402a5.435 5.435 0 00-6.944 1.258 5.498 5.498 0 00.104 7.088 5.435 5.435 0 006.978 1.051 1.398 1.398 0 002.666-.6V7.302c2.068 1.454 3.722 3.301 4.48 4.571.37.638.634 1.332.782 2.055-.325-.24-.704-.4-1.103-.462-.85-.046-1.494 1.109-1.057 2.77.368 1.502-.092 2.818.735 2.864zm-10.363.092c-2.896-1.662-.46-5.933 2.436-4.271.873.485.965 2.032.804 3.024-.299 1.709-1.907 2.009-3.24 1.247zm1.356-11.036c-.644.023-1.103.808-1.08 1.155.022.346.505.554 1.171.323.598-.208 1.15-.07 1.126-.416-.023-.346-.597-1.085-1.217-1.062z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="116.7%" height="115.9%" x="-8.3%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M25.075 18.1a2.338 2.338 0 001.425-.577c-.551 2.816-2.091 5.587-4.734 7.11-2.022 1.178-4.55 1.57-7.008 1.27-.368-1.062-1.333-2.193-3.01-3.047-2.643-1.362-3.884-3.717-5.01-2.563-.104.1-.19.217-.253.346a4.353 4.353 0 01-.138-.323c-2.16-5.356 0-10.736 4.32-14.591 2.574-2.286 5.584-2.032 8.273-.785a1.362 1.362 0 00-.506 1.085v5.402a5.435 5.435 0 00-6.944 1.258 5.498 5.498 0 00.104 7.088 5.435 5.435 0 006.978 1.051 1.398 1.398 0 002.666-.6V6.302c2.068 1.454 3.722 3.301 4.48 4.571.37.638.634 1.332.782 2.055-.325-.24-.704-.4-1.103-.462-.85-.046-1.494 1.109-1.057 2.77.368 1.502-.092 2.818.735 2.864zm-10.363.092c-2.896-1.662-.46-5.933 2.436-4.271.873.485.965 2.032.804 3.024-.299 1.709-1.907 2.009-3.24 1.247zm1.356-11.036c-.644.023-1.103.808-1.08 1.155.022.346.505.554 1.171.323.598-.208 1.15-.07 1.126-.416-.023-.346-.597-1.085-1.217-1.062z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2C398F" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.075-12.9c-.827-.046-.367-1.362-.735-2.863-.437-1.662.207-2.817 1.057-2.77.4.062.778.22 1.103.461a6.819 6.819 0 00-.781-2.055c-.759-1.27-2.413-3.117-4.481-4.571v13.922a1.398 1.398 0 11-2.666.6 5.435 5.435 0 01-6.978-1.05 5.498 5.498 0 01-.104-7.09 5.435 5.435 0 016.944-1.257V7.025c-.007-.421.18-.822.506-1.085-2.689-1.247-5.699-1.501-8.273.785-4.32 3.855-6.48 9.235-4.32 14.591.046.116.092.231.138.323.063-.13.149-.246.253-.346 1.126-1.154 2.367 1.2 5.01 2.563 1.677.854 2.642 1.985 3.01 3.047 2.458.3 4.986-.092 7.008-1.27 2.643-1.523 4.183-4.294 4.734-7.11a2.338 2.338 0 01-1.425.577zm-10.363.092c1.333.762 2.941.462 3.24-1.247.16-.992.069-2.54-.804-3.024-2.896-1.662-5.332 2.609-2.436 4.271zm1.356-11.036c.62-.023 1.194.716 1.217 1.062.023.347-.528.208-1.126.416-.666.23-1.149.023-1.171-.323-.023-.347.436-1.132 1.08-1.155z" fill="#fff"/>';
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
  export let ariaLabel = 'dnt';
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
@prop export let ariaLabel = 'dnt';
-->
