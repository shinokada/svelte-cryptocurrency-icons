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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.078-12.644c.908 1.422 1.345 4.4 1.268 5.467C30.31 20.71 26.562 7.567 18.586 7c0 2.945-.678 5.322-1.508 5.322 3.267.2 5.08 5.467 0 7.034zM6 17.8c5.954 0 10.773-4.823 10.773-10.79h-5.561c.01 2.923-2.317 5.312-5.201 5.323H6V17.8zm7.287-.99c-1.507 1.357-2.349 2.057-6.478 2.723 2.436 0 4.403 2.445 4.403 5.467h5.56c0-.911-.185-5.478-3.485-8.19z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" d="M17.078 19.356c5.08-1.567 3.267-6.834 0-7.034.83 0 1.508-2.377 1.508-5.322 7.976.567 11.723 13.711-.24 17.823.077-1.067-.36-4.045-1.267-5.467zM6 17.8v-5.467h.01c2.885-.011 5.212-2.4 5.202-5.322h5.56C16.773 12.977 11.955 17.8 6 17.8zm7.287-.99c3.3 2.712 3.486 7.279 3.486 8.19h-5.561c0-3.022-1.967-5.467-4.403-5.467 4.13-.666 4.971-1.366 6.478-2.722z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M17.078 18.356c5.08-1.567 3.267-6.834 0-7.034.83 0 1.508-2.377 1.508-5.322 7.976.567 11.723 13.711-.24 17.823.077-1.067-.36-4.045-1.267-5.467zM6 16.8v-5.467h.01c2.885-.011 5.212-2.4 5.202-5.322h5.56C16.773 11.977 11.955 16.8 6 16.8zm7.287-.99c3.3 2.712 3.486 7.279 3.486 8.19h-5.561c0-3.022-1.967-5.467-4.403-5.467 4.13-.666 4.971-1.366 6.478-2.722z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F60" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.078-12.644c.908 1.422 1.345 4.4 1.268 5.467C30.31 20.71 26.562 7.567 18.586 7c0 2.945-.678 5.322-1.508 5.322 3.267.2 5.08 5.467 0 7.034zM6 17.8c5.954 0 10.773-4.823 10.773-10.79h-5.561c.01 2.923-2.317 5.312-5.201 5.323H6V17.8zm7.287-.99c-1.507 1.357-2.349 2.057-6.478 2.723 2.436 0 4.403 2.445 4.403 5.467h5.56c0-.911-.185-5.478-3.485-8.19z"/>';
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
  export let ariaLabel = 'btcd';
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
@prop export let ariaLabel = 'btcd';
-->
