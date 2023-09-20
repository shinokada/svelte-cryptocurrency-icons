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
    '<path d="M10.827 15.376l1.745-3.7L7.23 17.02 6 18.248l3.894 3.858-.812-3.032 1.745-3.699-1.745 3.7 5.442-5.443-1.952-1.955-1.745 3.699zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.926 9.082l5.442 5.442L13.752 6l-3.86 3.894 3.034-.812zm6.148 13.836l-5.442-5.442L18.248 26l3.858-3.894-3.032.812zM20.04 9.34l2.066.552.814 3.032-5.444 5.444 1.952 1.953L26 13.75l-1.638-6.113L18.248 6l-.772.775L20.04 9.34zM13.752 26l.772-.775-2.564-2.567-2.066-.552L6 18.248l1.64 6.112L13.752 26zM26 18.248l-.775-.772-2.565 2.564-.554 2.066L18.248 26l6.114-1.638L26 18.248zM6 13.752l.775.772 2.565-2.566.552-2.064L13.752 6 7.64 7.638 6 13.752zm14.32-1.183l-5.34-5.338L13.752 6l4.616 8.524 1.953-1.955zm-8.64 6.86L18.247 26l-4.616-8.524-1.953 1.952z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#504C4C"/><path fill="#FFF" d="M10.827 15.376l-1.745 3.698.812 3.032 2.066.552 2.564 2.567-.772.775-6.112-1.64L6 18.248l1.23-1.228 5.342-5.343-1.745 3.699-1.745 3.698 5.442-5.442-1.952-1.955-1.745 3.699zm2.805 2.1l5.442 5.442 3.032-.812.554-2.066 2.565-2.564.775.772-1.638 6.114L18.248 26l-6.569-6.572 1.953-1.952zm4.736-2.952l-5.442-5.442-3.034.812-.552 2.063-2.565 2.567L6 13.752l1.64-6.114L13.752 6l1.228 1.23 5.34 5.34-1.952 1.954zM20.04 9.34l-2.564-2.565.772-.775 6.114 1.638L26 13.752l-6.572 6.569-1.952-1.953 5.444-5.444-.814-3.032-2.066-.552z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.827 14.376l-1.745 3.698.812 3.032 2.066.552 2.564 2.567-.772.775-6.112-1.64L6 17.248l1.23-1.228 5.342-5.343-1.745 3.699-1.745 3.698 5.442-5.442-1.952-1.955-1.745 3.699zm2.805 2.1l5.442 5.442 3.032-.812.554-2.066 2.565-2.564.775.772-1.638 6.114L18.248 25l-6.569-6.572 1.953-1.952zm4.736-2.952l-5.442-5.442-3.034.812-.552 2.063-2.565 2.567L6 12.752l1.64-6.114L13.752 5l1.228 1.23 5.34 5.34-1.952 1.954zM20.04 8.34l-2.564-2.565.772-.775 6.114 1.638L26 12.752l-6.572 6.569-1.952-1.953 5.444-5.444-.814-3.032-2.066-.552z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#504C4C" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M10.827 15.376l1.745-3.7L7.23 17.02 6 18.248l3.894 3.858-.812-3.032 1.745-3.699-1.745 3.7 5.442-5.443-1.952-1.955-1.745 3.699zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.926 9.082l5.442 5.442L13.752 6l-3.86 3.894 3.034-.812zm6.148 13.836l-5.442-5.442L18.248 26l3.858-3.894-3.032.812zM20.04 9.34l2.066.552.814 3.032-5.444 5.444 1.952 1.953L26 13.75l-1.638-6.113L18.248 6l-.772.775L20.04 9.34zM13.752 26l.772-.775-2.564-2.567-2.066-.552L6 18.248l1.64 6.112L13.752 26zM26 18.248l-.775-.772-2.565 2.564-.554 2.066L18.248 26l6.114-1.638L26 18.248zM6 13.752l.775.772 2.565-2.566.552-2.064L13.752 6 7.64 7.638 6 13.752zm14.32-1.183l-5.34-5.338L13.752 6l4.616 8.524 1.953-1.955zm-8.64 6.86L18.247 26l-4.616-8.524-1.953 1.952z"/>';
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
  export let ariaLabel = 'btm';
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
@prop export let ariaLabel = 'btm';
-->
