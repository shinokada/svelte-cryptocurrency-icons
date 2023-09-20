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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM4 13v1.221h1.298V13H4zm1.298 4.774v-1.111h2.513v-1.221H4V19h5.075v-1.226H5.298zm17.627-2.332v1.22h3.777v1.112h-2.513V19H28v-3.558h-5.075zm3.798-1.162v-1.221h-3.8v1.22h3.8zm-16.411 1.162V19h3.81v-1.174h1.265v-2.384h-5.075zm3.777 2.332H11.61v-1.111h2.48v1.11zM10.312 13v1.221h5.075V13h-5.075zm6.334 2.442V19h3.81v-1.174h1.265v-2.384h-5.075zm3.772 2.332h-2.48v-1.111h2.48v1.11zM16.646 13v1.221h5.075V13h-5.075z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#002342"/><path fill="#FFF" d="M4 13h1.298v1.221H4V13zm1.298 4.774h3.777V19H4v-3.558h3.81v1.22H5.299v1.112zm17.627-2.332H28V19h-3.81v-1.226h2.512v-1.111h-3.777v-1.221zm3.798-1.162h-3.8v-1.221h3.8v1.22zm-16.411 1.162h5.075v2.384h-1.264V19h-3.811v-3.558zm3.777 2.332v-1.111H11.61v1.11h2.48zM10.312 13h5.075v1.221h-5.075V13zm6.334 2.442h5.075v2.384h-1.264V19h-3.81v-3.558zm3.772 2.332v-1.111h-2.48v1.11h2.48zM16.646 13h5.075v1.221h-5.075V13z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="114.6%" height="158.3%" x="-7.3%" y="-20.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M4 12h1.298v1.221H4V12zm1.298 4.774h3.777V18H4v-3.558h3.81v1.22H5.299v1.112zm17.627-2.332H28V18h-3.81v-1.226h2.512v-1.111h-3.777v-1.221zm3.798-1.162h-3.8v-1.221h3.8v1.22zm-16.411 1.162h5.075v2.384h-1.264V18h-3.811v-3.558zm3.777 2.332v-1.111H11.61v1.11h2.48zM10.312 12h5.075v1.221h-5.075V12zm6.334 2.442h5.075v2.384h-1.264V18h-3.81v-3.558zm3.772 2.332v-1.111h-2.48v1.11h2.48zM16.646 12h5.075v1.221h-5.075V12z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#002342" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM4 13v1.221h1.298V13H4zm1.298 4.774v-1.111h2.513v-1.221H4V19h5.075v-1.226H5.298zm17.627-2.332v1.22h3.777v1.112h-2.513V19H28v-3.558h-5.075zm3.798-1.162v-1.221h-3.8v1.22h3.8zm-16.411 1.162V19h3.81v-1.174h1.265v-2.384h-5.075zm3.777 2.332H11.61v-1.111h2.48v1.11zM10.312 13v1.221h5.075V13h-5.075zm6.334 2.442V19h3.81v-1.174h1.265v-2.384h-5.075zm3.772 2.332h-2.48v-1.111h2.48v1.11zM16.646 13v1.221h5.075V13h-5.075z"/>';
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
  export let ariaLabel = 'taas';
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
@prop export let ariaLabel = 'taas';
-->
