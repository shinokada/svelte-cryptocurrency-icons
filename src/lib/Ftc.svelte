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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.603-26c-5.83 3.022-8.05 5.565-8.05 5.565l-.345 2.405c-.346.411-.627-.068-.627-.068l-.208-1.237-1.663 1.58c0 3.02-.627 4.053-.627 4.053-.276.41-.552.068-.552.068l-.138-3.158-1.042.894.07 5.018c-.973-.206-1.18-2.612-1.18-2.612-.766.685-.622 3.159-.622 3.159l-1.732-2.2 1.041 2.542L6.5 20.704l1.876 1.858c-.973.895-.139 1.58-.139 1.58a.624.624 0 01.346-.827c.834-.41.696.758.696.758L7.892 25.72c-.207.342.138.273.138.273l1.663-1.784c.973 1.237 2.152.963 2.152.963-1.456-.616-1.456-2.064-1.456-2.064 1.249 1.996 3.332 1.306 3.332 1.306-2.36-.41-2.428-1.858-2.428-1.858 5.201 1.032 6.52-.41 6.52-.41l-6.175-.275c1.456-1.51 5.202-.895 5.202-.895l3.262-4.259 4.065-4.77a5.53 5.53 0 00.914-1.505C26.25 7.463 24.603 6 24.603 6zm-11.1 13.95s5.962-8.454 8.804-10.444c.006 0-3.05 5.154-8.804 10.445z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#27323a" r="16"/><path d="M24.603 6s1.647 1.464.478 4.443a5.53 5.53 0 01-.914 1.506l-4.065 4.77-3.262 4.258s-3.746-.616-5.202.895l6.174.274s-1.318 1.443-6.52.41c0 0 .07 1.448 2.429 1.86 0 0-2.083.689-3.332-1.307 0 0 0 1.448 1.456 2.064 0 0-1.18.274-2.152-.963L8.03 25.994s-.345.069-.138-.273l1.387-1.648s.138-1.169-.696-.758c0 0-.553.205-.346.826 0 0-.834-.684.139-1.579L6.5 20.704l2.428 1.305-1.041-2.543 1.732 2.201s-.144-2.474.622-3.159c0 0 .207 2.406 1.18 2.612l-.07-5.018 1.042-.894.138 3.158s.276.342.552-.068c0 0 .627-1.032.627-4.054l1.663-1.58.208 1.238s.281.479.627.068l.345-2.405s2.22-2.543 8.05-5.565zm-11.1 13.95c5.754-5.29 8.81-10.444 8.804-10.444-2.842 1.99-8.804 10.445-8.804 10.445z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M24.603 5s1.647 1.464.478 4.443a5.53 5.53 0 01-.914 1.506l-4.065 4.77-3.262 4.258s-3.746-.616-5.202.895l6.174.274s-1.318 1.443-6.52.41c0 0 .07 1.448 2.429 1.86 0 0-2.083.689-3.332-1.307 0 0 0 1.448 1.456 2.064 0 0-1.18.274-2.152-.963L8.03 24.994s-.345.069-.138-.273l1.387-1.648s.138-1.169-.696-.758c0 0-.553.205-.346.826 0 0-.834-.684.139-1.579L6.5 19.704l2.428 1.305-1.041-2.543 1.732 2.201s-.144-2.474.622-3.159c0 0 .207 2.406 1.18 2.612l-.07-5.018 1.042-.894.138 3.158s.276.342.552-.068c0 0 .627-1.032.627-4.054l1.663-1.58.208 1.238s.281.479.627.068l.345-2.405s2.22-2.543 8.05-5.565zm-11.1 13.95c5.754-5.29 8.81-10.444 8.804-10.444-2.842 1.99-8.804 10.445-8.804 10.445z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#27323A" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.603-26c-5.83 3.022-8.05 5.565-8.05 5.565l-.345 2.405c-.346.411-.627-.068-.627-.068l-.208-1.237-1.663 1.58c0 3.02-.627 4.053-.627 4.053-.276.41-.552.068-.552.068l-.138-3.158-1.042.894.07 5.018c-.973-.206-1.18-2.612-1.18-2.612-.766.685-.622 3.159-.622 3.159l-1.732-2.2 1.041 2.542L6.5 20.704l1.876 1.858c-.973.895-.139 1.58-.139 1.58a.624.624 0 01.346-.827c.834-.41.696.758.696.758L7.892 25.72c-.207.342.138.273.138.273l1.663-1.784c.973 1.237 2.152.963 2.152.963-1.456-.616-1.456-2.064-1.456-2.064 1.249 1.996 3.332 1.306 3.332 1.306-2.36-.41-2.428-1.858-2.428-1.858 5.201 1.032 6.52-.41 6.52-.41l-6.175-.275c1.456-1.51 5.202-.895 5.202-.895l3.262-4.259 4.065-4.77a5.53 5.53 0 00.914-1.505C26.25 7.463 24.603 6 24.603 6zm-11.1 13.95s5.962-8.454 8.804-10.444c.006 0-3.05 5.154-8.804 10.445z" fill="#fff"/>';
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
  export let ariaLabel = 'ftc';
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
@prop export let ariaLabel = 'ftc';
-->
