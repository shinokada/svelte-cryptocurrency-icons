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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.476 8H8.467S8 8.131 8 8.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578v.034c.005.214.066 1.368.811 2.019.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-.925 0-.992-.806-.996-.976v-5.942c0-.784.393-1.177 1.155-1.177h3.369v10.567s.049.614.651.614h.651V13.82h.91V25h.652c.602 0 .651-.614.651-.614V13.819h3.369c.774 0 1.156.393 1.156 1.177v5.942c-.005.17-.073.976-.996.976h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.745-.65.806-1.805.81-2.019l.001-.034-.012-6.578c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V9.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889zm-7 1.818v2.21h-.921v-2.21h.922z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#2D4692" cx="16" cy="16" r="16"/><path d="M23.988 14.617c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V9.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889H8.467S8 8.131 8 8.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578s-.012 1.334.811 2.053c.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-1.034 0-.996-1.007-.996-1.007v-5.91c0-.785.393-1.178 1.155-1.178h3.369v10.567s.049.614.651.614h.651V13.82h.91V25h.652c.602 0 .651-.614.651-.614V13.819h3.369c.774 0 1.156.393 1.156 1.177v5.911s.036 1.007-.996 1.007h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.823-.72.811-2.053.811-2.053l-.012-6.578zm-7.511-2.59h-.922v-2.21h.922v2.21z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2D4692" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M23.988 13.617c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V8.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889H8.467S8 7.131 8 7.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578s-.012 1.334.811 2.053c.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-1.034 0-.996-1.007-.996-1.007v-5.91c0-.785.393-1.178 1.155-1.178h3.369v10.567s.049.614.651.614h.651V12.82h.91V24h.652c.602 0 .651-.614.651-.614V12.819h3.369c.774 0 1.156.393 1.156 1.177v5.911s.036 1.007-.996 1.007h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.823-.72.811-2.053.811-2.053l-.012-6.578zm-7.511-2.59h-.922v-2.21h.922v2.21z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.476 8H8.467S8 8.131 8 8.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578v.034c.005.214.066 1.368.811 2.019.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-.925 0-.992-.806-.996-.976v-5.942c0-.784.393-1.177 1.155-1.177h3.369v10.567s.049.614.651.614h.651V13.82h.91V25h.652c.602 0 .651-.614.651-.614V13.819h3.369c.774 0 1.156.393 1.156 1.177v5.942c-.005.17-.073.976-.996.976h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.745-.65.806-1.805.81-2.019l.001-.034-.012-6.578c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V9.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889zm-7 1.818v2.21h-.921v-2.21h.922z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'max';
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
@prop export let ariaLabel = 'max';
-->
