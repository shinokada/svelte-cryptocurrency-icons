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
    '<path d="M10.082 17.21a1.61 1.61 0 001.783-.01l1.114 1.114 1.163-1.162-1.583-1.582a1.622 1.622 0 00-1.593-1.334c-.807 0-1.477.592-1.6 1.365L6.88 18.089A9.35 9.35 0 016.644 16c0-5.16 4.197-9.356 9.356-9.356S25.356 10.84 25.356 16c0 .764-.092 1.506-.266 2.217l-3.874-3.874a1.621 1.621 0 00-1.61-1.456 1.62 1.62 0 00-1.614 1.491l-8.417 8.417-1.162 1.163c.398.38.825.73 1.277 1.047A10.939 10.939 0 0016 27c6.065 0 11-4.935 11-11S22.065 5 16 5 5 9.935 5 16a10.957 10.957 0 001.234 5.058l1.23-1.23zm8.709-1.306a1.609 1.609 0 001.65-.012l4.045 4.046c-1.49 3.197-4.733 5.418-8.486 5.418a9.301 9.301 0 01-5.127-1.534zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.635-18.212a.728.728 0 11-.001 1.455.728.728 0 01.001-1.455zm-8.66 1.327a.728.728 0 11-.002 1.456.728.728 0 01.001-1.456z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#044aac" r="16"/><path d="M10.082 17.21l-2.618 2.62-1.23 1.23A10.937 10.937 0 015 16C5 9.935 9.935 5 16 5s11 4.935 11 11-4.935 11-11 11c-2.346 0-4.522-.739-6.31-1.995a11.08 11.08 0 01-1.277-1.047l1.162-1.163 8.417-8.417a1.621 1.621 0 011.614-1.49 1.62 1.62 0 011.61 1.455l3.874 3.874A9.346 9.346 0 0025.356 16c0-5.16-4.197-9.356-9.356-9.356S6.644 10.84 6.644 16c0 .718.081 1.417.235 2.089L9.367 15.6a1.621 1.621 0 011.599-1.365 1.62 1.62 0 011.593 1.334l1.583 1.582-1.163 1.162-1.114-1.114a1.61 1.61 0 01-1.783.01zm8.709-1.306l-7.918 7.918A9.301 9.301 0 0016 25.356c3.753 0 6.997-2.221 8.486-5.418l-4.045-4.046a1.609 1.609 0 01-1.65.012zm.844-2.116a.728.728 0 10.002 1.455.728.728 0 00-.002-1.455zm-8.66 1.327a.728.728 0 100 1.456.728.728 0 000-1.456z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.082 16.21l-2.618 2.62-1.23 1.23A10.937 10.937 0 015 15C5 8.935 9.935 4 16 4s11 4.935 11 11-4.935 11-11 11c-2.346 0-4.522-.739-6.31-1.995a11.08 11.08 0 01-1.277-1.047l1.162-1.163 8.417-8.417a1.621 1.621 0 011.614-1.49 1.62 1.62 0 011.61 1.455l3.874 3.874A9.346 9.346 0 0025.356 15c0-5.16-4.197-9.356-9.356-9.356-5.16 0-9.356 4.197-9.356 9.356 0 .718.081 1.417.235 2.089L9.367 14.6a1.621 1.621 0 011.599-1.365 1.62 1.62 0 011.593 1.334l1.583 1.582-1.163 1.162-1.114-1.114a1.61 1.61 0 01-1.783.01zm8.709-1.306l-7.918 7.918A9.301 9.301 0 0016 24.356c3.753 0 6.997-2.221 8.486-5.418l-4.045-4.046a1.609 1.609 0 01-1.65.012zm.844-2.116a.728.728 0 10.002 1.455.728.728 0 00-.002-1.455zm-8.66 1.327a.728.728 0 100 1.456.728.728 0 000-1.456z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#044AAC" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M10.082 17.21a1.61 1.61 0 001.783-.01l1.114 1.114 1.163-1.162-1.583-1.582a1.622 1.622 0 00-1.593-1.334c-.807 0-1.477.592-1.6 1.365L6.88 18.089A9.35 9.35 0 016.644 16c0-5.16 4.197-9.356 9.356-9.356S25.356 10.84 25.356 16c0 .764-.092 1.506-.266 2.217l-3.874-3.874a1.621 1.621 0 00-1.61-1.456 1.62 1.62 0 00-1.614 1.491l-8.417 8.417-1.162 1.163c.398.38.825.73 1.277 1.047A10.939 10.939 0 0016 27c6.065 0 11-4.935 11-11S22.065 5 16 5 5 9.935 5 16a10.957 10.957 0 001.234 5.058l1.23-1.23zm8.709-1.306a1.609 1.609 0 001.65-.012l4.045 4.046c-1.49 3.197-4.733 5.418-8.486 5.418a9.301 9.301 0 01-5.127-1.534zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.635-18.212a.728.728 0 11-.001 1.455.728.728 0 01.001-1.455zm-8.66 1.327a.728.728 0 11-.002 1.456.728.728 0 01.001-1.456z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'evx';
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
@prop export let ariaLabel = 'evx';
-->
