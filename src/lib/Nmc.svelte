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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.261-8.5l.001-.002a1.8 1.8 0 00.458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 00-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#186C9D"/><path fill="#FFF" fill-rule="nonzero" d="M19.261 23.5l.001-.002a1.8 1.8 0 00.458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 00-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="123.3%" x="-9.7%" y="-8.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M19.261 22.5l.001-.002a1.8 1.8 0 00.458-.05c.876-.205 1.617-.97 1.793-1.796L25 7.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 7.5v.001a1.9 1.9 0 00-.459.049c-.875.206-1.616.971-1.793 1.796L7 22.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#186C9D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.261-8.5l.001-.002a1.8 1.8 0 00.458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 00-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"/>';
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
  export let ariaLabel = 'nmc';
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
@prop export let ariaLabel = 'nmc';
-->
