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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.029-8.85c3.957 0 7.176-3.199 7.176-7.13 0-3.932-3.219-7.13-7.176-7.13-3.957 0-7.176 3.198-7.176 7.13 0 3.931 3.22 7.13 7.176 7.13zm0-12.864c3.182 0 5.77 2.572 5.77 5.734 0 3.161-2.588 5.733-5.77 5.733-3.181 0-5.77-2.572-5.77-5.733 0-3.162 2.589-5.734 5.77-5.734zm5.025-2.415l.736-1.19a11.053 11.053 0 00-5.76-1.614c-1.874 0-3.724.476-5.35 1.375l.683 1.221a9.67 9.67 0 014.666-1.198c1.78 0 3.517.486 5.025 1.406zm2.095 16.51a10.911 10.911 0 003.902-8.361h-1.406a9.519 9.519 0 01-3.405 7.294l.909 1.067zm-7.12 2.59c1.762 0 3.516-.423 5.07-1.224l-.648-1.24a9.558 9.558 0 01-4.422 1.068 9.667 9.667 0 01-6.12-2.185l-.896 1.076a11.083 11.083 0 007.016 2.506zm9.38-13.546l1.128-.31a10.71 10.71 0 00-2.125-4.026l-.9.745a9.558 9.558 0 011.897 3.591zM6.86 21.976l.978-.64a9.587 9.587 0 01-1.601-5.316 9.564 9.564 0 012.966-6.952l-.814-.837a10.717 10.717 0 00-3.323 7.789c0 2.127.62 4.187 1.793 5.956z"/><path d="M25.35 13.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM6.86 21.976a10.742 10.742 0 01-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z" opacity=".5"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#00BFEC"/><g fill="#FFF"><path d="M15.971 23.15c-3.957 0-7.176-3.199-7.176-7.13 0-3.932 3.22-7.13 7.176-7.13 3.957 0 7.176 3.198 7.176 7.13 0 3.931-3.219 7.13-7.176 7.13zm0-12.864c-3.181 0-5.77 2.572-5.77 5.734 0 3.161 2.589 5.733 5.77 5.733 3.182 0 5.77-2.572 5.77-5.733 0-3.162-2.588-5.734-5.77-5.734zm5.025-2.415a9.638 9.638 0 00-5.025-1.406 9.67 9.67 0 00-4.666 1.198l-.684-1.22a11.083 11.083 0 015.35-1.376c2.04 0 4.032.558 5.761 1.614l-.736 1.19zm2.095 16.51l-.909-1.067a9.519 9.519 0 003.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 006.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 01-5.069 1.225z"/><path d="M25.35 13.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM6.86 21.976a10.742 10.742 0 01-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z" opacity=".5"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00BFEC" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(5 4)"><path d="M10.971 18.15c-3.957 0-7.176-3.199-7.176-7.13 0-3.932 3.22-7.13 7.176-7.13 3.957 0 7.176 3.198 7.176 7.13 0 3.931-3.219 7.13-7.176 7.13zm0-12.864c-3.181 0-5.77 2.572-5.77 5.734 0 3.161 2.589 5.733 5.77 5.733 3.182 0 5.77-2.572 5.77-5.733 0-3.162-2.588-5.734-5.77-5.734zm5.025-2.415a9.638 9.638 0 00-5.025-1.406 9.67 9.67 0 00-4.666 1.198l-.684-1.22a11.083 11.083 0 015.35-1.376c2.04 0 4.032.558 5.761 1.614l-.736 1.19zm2.095 16.51l-.909-1.067a9.519 9.519 0 003.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 006.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 01-5.069 1.225z"/><path d="M20.35 8.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM1.86 16.976A10.742 10.742 0 01.067 11.02c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z" opacity=".5"/></g></g>';
  let svgwhite =
    '<g fill="#FFF"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.029-8.85c3.957 0 7.176-3.199 7.176-7.13 0-3.932-3.219-7.13-7.176-7.13-3.957 0-7.176 3.198-7.176 7.13 0 3.931 3.22 7.13 7.176 7.13zm0-12.864c3.182 0 5.77 2.572 5.77 5.734 0 3.161-2.588 5.733-5.77 5.733-3.181 0-5.77-2.572-5.77-5.733 0-3.162 2.589-5.734 5.77-5.734zm5.025-2.415l.736-1.19a11.053 11.053 0 00-5.76-1.614c-1.874 0-3.724.476-5.35 1.375l.683 1.221a9.67 9.67 0 014.666-1.198c1.78 0 3.517.486 5.025 1.406zm2.095 16.51a10.911 10.911 0 003.902-8.361h-1.406a9.519 9.519 0 01-3.405 7.294l.909 1.067zm-7.12 2.59c1.762 0 3.516-.423 5.07-1.224l-.648-1.24a9.558 9.558 0 01-4.422 1.068 9.667 9.667 0 01-6.12-2.185l-.896 1.076a11.083 11.083 0 007.016 2.506zm9.38-13.546l1.128-.31a10.71 10.71 0 00-2.125-4.026l-.9.745a9.558 9.558 0 011.897 3.591zM6.86 21.976l.978-.64a9.587 9.587 0 01-1.601-5.316 9.564 9.564 0 012.966-6.952l-.814-.837a10.717 10.717 0 00-3.323 7.789c0 2.127.62 4.187 1.793 5.956z"/><path d="M25.35 13.425a9.558 9.558 0 00-1.896-3.59l.9-.746a10.71 10.71 0 012.125 4.025l-1.128.311zM6.86 21.976a10.742 10.742 0 01-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 00-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z" opacity=".5"/></g>';
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
  export let ariaLabel = 'aion';
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
@prop export let ariaLabel = 'aion';
-->
