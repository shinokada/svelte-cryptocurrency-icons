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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.91-16.304a1.137 1.137 0 00-.215-.3C24.793 13.242 20.922 9 20.922 9l-4.917 5.378-4.98-5.327S7.109 13.33 5.19 15.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 23l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541zm-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464zm15.988.126a2.267 2.267 0 01-.256.355l-2.71 2.945L17.44 16l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#302C2C"/><path fill="#FFF" d="M26.91 15.696a1.137 1.137 0 00-.215-.3C24.793 13.242 20.922 9 20.922 9l-4.917 5.378-4.98-5.327S7.109 13.33 5.19 15.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 23l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541m-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464m15.988.126a2.267 2.267 0 01-.256.355l-2.71 2.945L17.44 16l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M26.91 14.696a1.137 1.137 0 00-.215-.3C24.793 12.242 20.922 8 20.922 8l-4.917 5.378-4.98-5.327S7.109 12.33 5.19 14.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 22l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541m-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464m15.988.126a2.267 2.267 0 01-.256.355l-2.71 2.945L17.44 15l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#302C2C" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.91-16.304a1.137 1.137 0 00-.215-.3C24.793 13.242 20.922 9 20.922 9l-4.917 5.378-4.98-5.327S7.109 13.33 5.19 15.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 23l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541zm-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464zm15.988.126a2.267 2.267 0 01-.256.355l-2.71 2.945L17.44 16l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726z"/>';
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
  export let ariaLabel = 'pay';
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
@prop export let ariaLabel = 'pay';
-->
